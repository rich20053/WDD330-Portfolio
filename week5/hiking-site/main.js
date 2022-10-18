
// normally the model would have more going on...retrieving the hikes from a database, adding hikes, editing hikes, filtering, etc. Our model will be very simple.  We could simply export the hikeList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.
const hikeList = [
    {
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }
];

Object.prototype.renderThisHike = function(item) 
{

  item.innerHTML = ` <h2>${this.name}</h2>
  <div class="one-hike">
  <div class="image"><img src="./${this.imgSrc}" alt="${this.imgAlt}"></div>
  <div id="info-${this.name}">
          <div>
              <h3>Distance</h3>
              <p>${this.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${this.difficulty}</p>
          </div>
  </div>`;
  //console.log(item.innerHTML);
  return item;
}

Object.prototype.renderThisHikeOnly = function(item) 
{
  item.innerHTML = `<h2>${this.name}</h2>
  <div class="one-hike">
    <div class="image"><img src="./${this.imgSrc}" alt="${this.imgAlt}"></div>
    <div id="info-${this.name}">
      <div>
        <h3>Distance</h3>
        <p>${this.distance}</p>
    </div>
    <div>
        <h3>Difficulty</h3>
        <p>${this.difficulty}</p>
    </div>
    <div>
        <h3>Description</h3>
        <p>${this.description}</p>
    </div>
    <div>
        <h3>Directions</h3>
        <p>${this.directions}</p>
    </div>
  </div>`;
  //console.log(item.innerHTML);
  return item;
}


// Hike Model
class HikeModel {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
  }
  getAllHikes() {
    // should return a list of all the hikes.
    return hikeList;
  }

  getHikeByName(hikeNbr) {
    // filter the hikes for the record identified by hikeName and return it
    let hike = hikeList[hikeNbr];
    return hike;
  }
}

// Hike View handler
class HikesView {
    constructor(listElementId) {
        // will need this
        //this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
    }

    renderOneHikeLight(hike) {
        // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
        const item = document.createElement("li");
        const hikeItem = hike.renderThisHike(item);
        return hikeItem;
    }
    
    renderHikeList(hikeList, listElement) {
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
        for (var i=0; i<hikeList.length; i++) {
            const hike = hikeList[i];
            const renderItem = this.renderOneHikeLight(hike);
            //console.log(`${i} ${hike.name} ${listElement} ${renderItem}`);
            listElement.appendChild(renderItem);
            //console.log(`${i} ${hike.name} ${listElement} ${renderItem}`);
        }
    }

    renderOneHikeFull(hike, listElement) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal! 
        const item = document.createElement("li");
        const hikeItem = hike.renderThisHikeOnly(item);
        listElement.appendChild(hikeItem);
    }
}
  

// Hike controller
class HikesController {
    constructor(parentId) {
      this.parentElement = document.getElementById(parentId); 
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.hikeModel = new HikeModel();
      this.hikesView = new HikesView(parentId);
      //this.addHikeListener();
    }
    
    showHikeList() {
      //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
      const hList = this.hikeModel.getAllHikes();
      //console.log(this.parentElement);
      this.hikesView.renderHikeList(hList, this.parentElement);
    }
  
    showOneHike(hikeNbr, listElement) {
      // use this when you need to show just one hike...with full details
      const oneHike = this.hikeModel.getHikeByName(hikeNbr);
      this.hikesView.renderOneHikeFull(oneHike, listElement);
    }

    addHikeListener() {
        // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
        const hLList = document.getElementsByTagName('li');
        for (var i=0; i<hLList.length; i++) {
            hLList[i].addEventListener('touchend', () => 
                this.showOneHike(i), this.parentElement);
            hLList[i].addEventListener('click', () => 
                this.showOneHike(i), this.parentElement);
        }
    }
}

const hikesCtrl = new HikesController("hikeList"); 
window.addEventListener('load', () => {
    hikesCtrl.showHikeList();
    hikesCtrl.addHikeListener();
});




