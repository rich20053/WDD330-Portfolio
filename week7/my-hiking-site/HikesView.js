  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
        
    }

    renderHikeList(hikeList, listElement) {
      var screenList = document.querySelector("ul");
      var child = screenList.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
          screenList.removeChild(child);
          child = screenList.lastElementChild;
      }
      // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
      for (var i=0; i<hikeList.length; i++) {
        const hike = hikeList[i];
        const renderItem = this.renderOneHikeLight(hike);
        listElement.appendChild(renderItem);
        //console.log(`${i} ${hike.name} ${listElement} ${renderItem}`);
      };
    }

    renderOneHikeLight(hike) {
      // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
      const item = document.createElement("li");
      item.setAttribute("class", "light");
      item.addEventListener('touchend', () => {
        this.renderOneHikeFull(hike);
      });
      item.addEventListener('click', () => {
        this.renderOneHikeFull(hike);
      });
      return hike.renderThisHike(item);
    }

    renderOneHikeFull(hike) {
      console.log("full hike");
      var screenList = document.querySelector("ul");
      var child = screenList.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
          screenList.removeChild(child);
          child = screenList.lastElementChild;
      }
      // this method will be used to one hike with full detail...you will need this for the stretch goal! 
      const item = document.createElement("li");
      item.setAttribute("class", "full");
      const hikeItem = hike.renderThisHikeOnly(item);
      screenList.appendChild(hikeItem);
    }
  }





