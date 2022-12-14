import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    //this.addHikeListener();
  }

  showHikeList() {
    debugger;
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    const hList = this.hikeModel.getAllHikes();
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

