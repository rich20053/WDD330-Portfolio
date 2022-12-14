  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
        
    }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    for (var i=0; i<hikeList.length; i++) {
        listElement.appendChild(this.renderOneHikeLight(hikeList[i]));
    };
  }

  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
    const item = document.createElement("li");
    return hike.renderThisHike(item);
  }

  renderOneHikeFull(hike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
  }
}
