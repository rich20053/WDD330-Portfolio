let toDate = document.getElementById("toDate").value;
let fromDate = document.getElementById("fromDate").value;
  
function getJSON(url) {
  return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

// Quake Model
class Quake {

    constructor() {
      this.baseUrl =
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${fromDate}&endtime=${toDate}`;
      //'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
      // this is where we will store the last batch of retrieved quakes 
      //in the model.  I don't always do this...in this case the api 
      //doesn't have an endpoint to request one quake.
      console.log(`baseURL= ${this.baseUrl}`);
      this._quakes = [];
    }

    async getEarthQuakesByRadius(position, radius = 100) {
      // use the getJSON function and the position provided to build out the correct URL
      // to get the data we need.  Store it into this._quakes, then return it
        this._quakes = await getJSON(
            `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${fromDate}&endtime=${toDate}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
        )
      return this._quakes;
    }

    getQuakeById(id, pQuakes, pQQuakes) {
      // filter this._quakes for the record identified by id and return it
      return this._quakes.features.filter(item => item.id === id)[0];
    }
  
}
    // Quake View handler
    class QuakesView {
        renderQuakeList(quakeList, listElement, radius) {
          //build a list of the quakes...include the title and 
          //time of each quake then append the list to listElement. 
          //You should also add the id of the quake record as a data- 
          //property to the li. ie. <li data-id="">

          listElement.innerHTML = quakeList.features.map(quake => {
            const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'};
            //debugger;
            return `<li data-id="${quake.id}">${quake.properties.title}, ${new Date(quake.properties.time).toLocaleDateString('en-US', options)}</li>`;
          }).join('');
          console.log(`count: ${quakeList.features.length}`);
          listElement.innerHTML = `<h3>Quakes within ${radius} kilometers (${quakeList.features.length}): </h3>` + listElement.innerHTML;
      }
    
        renderQuake(quake, element) {
            // const quakeProperties = Object.entries(quake.properties);
            // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
            // our quake information is inside of an object called properties. Objects are sometimes hard to iterate over...below is a nice way to convert an object into an array.
            const quakeProperties = Object.entries(quake.properties);
            console.log(quakeProperties);
            element.innerHTML = quakeProperties.map(item => {
                if (item[0] === "time" || item[0] === "updated") {
                    return `<li>${item[0]}: ${new Date(item[1])}</li>`;
                } else return `<li>${item[0]}: ${item[1]}</li>`;
            }).join("");
        }
      }

// Quake controller
class QuakesController {
    constructor(parent, position = null) {
      this.parent = parent;
      // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
      this.parentElement = null;
      // let's give ourselves the option of using a location other than the current location by passing it in.
      this.position = position || {
        lat: 0,
        lon: 0
      };
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.quakes = new Quake();
      this.quakesView = new QuakesView();
      console.log(`parent=${this.parent}; position=${position}`);
      console.log("end of controller constructor");
    }
  
    async init(radius = 100) {
      // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
      this.parentElement = document.querySelector(this.parent);
      let child = this.parentElement.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
        this.parentElement.removeChild(child);
        child = this.parentElement.lastElementChild;
      }
  
      console.log(`parEle ${this.parentElement}`);
      console.log(radius);
      await this.initPos();
      this.getQuakesByRadius(radius);
      console.log("end of init");
    }
  
    async initPos() {
      // if a position has not been set
      if (this.position.lat === 0) {
        try {
            // try to get the position using getLocation()
            const locRep = await getLocation();
            const location = locRep.coords;
            // if we get the location back then set the latitude and longitude into this.position
            if (location) {
                this.position.lat = location.latitude;
                this.position.lon = location.longitude;
            };            
        } catch (error) {
          console.log(error);
        }
      }
      console.log(`position: ${this.position}`);
      console.log("end of initPos");
    }
  
    async getQuakesByRadius(radius = 100) {
      // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
      //set loading message
      //this.parentElement.innerHTML = 'Loading...';
      //debugger;
      // get the list of quakes in the specified radius of the location
      console.log(`to: ${toDate} from:${fromDate}`);
      const quakeList = await this.quakes.getEarthQuakesByRadius(
        this.position,
        radius
      );
      //debugger;
      // render the list to html
      this.quakesView.renderQuakeList(quakeList, this.parentElement, radius);
      // add a listener to the new list of quakes to allow drill down in 
      // to the details
      this.parentElement.addEventListener('touchend', e => {
        //debugger;
        this.getQuakeDetails(e.target.dataset.id);
      });
    }
    
    async getQuakeDetails(quakeId) {
      // get the details for the quakeId provided from the model, 
      // then send them to the view to be displayed
      //debugger;
      const backButton = document.querySelector(".backbtn");
      backButton.classList.add('show');
      const ourQuake = this.quakes.getQuakeById(quakeId, this.quakes, this.quakes._quakes);
      this.quakesView.renderQuake(ourQuake, this.parentElement);
    }
  }  

  function resetRadius() {
    const backButton = document.querySelector(".backbtn");
    backButton.classList.remove('show');    const radiusInput = parseInt(document.getElementById("radiussize").value);
    toDate = document.getElementById("toDate").value;
    fromDate = document.getElementById("fromDate").value;
    qCtrl.init(radiusInput);
  }
  
  function goBack() {
    const backButton = document.querySelector(".backbtn");
    backButton.classList.remove('show');
    const radiusInput = parseInt(document.getElementById("radiussize").value);
    toDate = document.getElementById("toDate").value;
    fromDate = document.getElementById("fromDate").value;
    qCtrl.init(radiusInput);
  }
  
    

const qCtrl = new QuakesController("#quakeList");

qCtrl.init();

  /*
  const routes = [
    {
      controller: new QuakesController('#quakeList'),
      file: 'views/quakeList.html',
      label: 'Local Quakes'
    },
    {
      controller: new QuakesController('#quakeList'),
      file: 'views/quakeList.html',
      label: 'Yellowstone Quakes'
    }
  ];
  
  // function to create a navigation for the items found in routes.
  // creates element, add a touchend event listener and appends it to parent
  function buildNavigation(parent) {
    routes.forEach(route => {
      let item = document.createElement('li');
      item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
      parent.appendChild(item);
      addNavEventAsync(item, route.file, route.controller);
    });
  }
  
  // makes an AJAX request for the html file found at viewPath and returns it as text
  async function getViewAsync(viewPath) {
    try {
      const response = await fetch(viewPath);
      const text = await response.text();
  
      return text;
    } catch (err) {
      console.log('Something went wrong', err);
    }
  }
  
  // adds a touchend event to element that will insert the view found at path into the content area of the index.html
  function addNavEventAsync(element, path, controller) {
    // adding both a touch and mouse event.  Notice the e.preventDefault(); If the touch event fires prevent default will keep the click event from firing.
    element.addEventListener('touchend', e => {
      insertViewAsync(getViewAsync(path), controller);
      e.preventDefault();
    });
    // this event won't fire if the touch event did.
    element.addEventListener('click', e => {
      insertViewAsync(getViewAsync(path), controller);
    });
  }
  
  // inserts the view into the content area of index.html
  // remember that getView returns a promise!
  // runs a function from the controller to load any dynamic elements
  async function insertViewAsync(viewPromise, controller) {
    const contentElement = document.getElementById('content');
    //debugger;
    contentElement.innerHTML = await viewPromise;
    controller.init();
  }
//const navElement = document.getElementById('mainNav');
//buildNavigation(navElement);

// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.getQuakesByRadius();

*/
