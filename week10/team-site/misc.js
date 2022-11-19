let toDate = document.getElementById("toDate").value;
let fromDate = document.getElementById("fromDate").value;
  
function getJSON(url) {
  /*
  fetch(peopleURL)
  .then( response => {
      outputUL.innerHTML = 'Waiting for response...';
      if(response.ok) {
          return response;
      }
          throw Error(response.statusText);
      }
  )
  .then( response => response.json() )
  .then( data => {
      nextURL = data.next;
      prevURL = data.previous;
      itemArray = data.results;
      outputUL.innerHTML = '';
      for (var i=0; i<itemArray.length; i++) {
          displayItem(itemArray[i], outputUL);
      }
  })
  .catch( error => console.log('There was an error:', error))
  */
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
        });x
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
      this.baseUrl =
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${fromDate}&endtime=${toDate}`;
      const query =
      this.baseUrl +
      `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
      console.log(query);
      this._quakes = getJSON(query);
      console.log(`quake data= ${this._quakes}`);
      return this._quakes;
    }

    getQuakeById(id) {
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
/*          quakeList.features.forEach(quake => {
            let subitem = document.createElement("li");
            subitem.innerHTML = `${quake.properties.title}, ${new Date(quake.properties.time)}`;
            console.log(`subitem: ${subitem} listElement: ${listElement}`);
            listElement.appendChild(subitem);
            debugger;                  
          });
          quakeList.features.forEach(element => {
            const item = document.createElement('li');
            console.log(element);
            item.setAttribute('data-id', element.id);
            item.innerHTML = `${element.properties.title} 
            <p>${new Date(element.properties.time)}</p>`;
            listElement.appendChild(item);
          });*/
      
          listElement.innerHTML = quakeList.features.map(quake => {
            const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
            return `<li data-id="${quake.properties.id}">${quake.properties.title} <div>${new Date(quake.properties.time).toLocaleDateString('en-US', options)}</div></li>`;
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
      //debugger;
      this.parentElement.addEventListener('touchend', e => {
        this.getQuakeDetails(e.target.dataset.id);
      });
    }
    
    async getQuakeDetails(quakeId) {
      // get the details for the quakeId provided from the model, 
      // then send them to the view to be displayed
      const ourQuake = getQuakeById(quakeId);
      renderQuake(ourQuake);
  
    }
  }  

function resetRadius() {
  const radiusInput = parseInt(document.getElementById("radiussize").value);
  toDate = document.getElementById("toDate").value;
  fromDate = document.getElementById("fromDate").value;
  qCtrl.init(radiusInput);
}

const qCtrl = new QuakesController("#quakeList");

qCtrl.init();
