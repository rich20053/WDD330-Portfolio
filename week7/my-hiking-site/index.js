
import HikesController from './hikesController.js';

Object.prototype.renderThisHike = function(item) 
{
  console.log("thishikeforlist");
  item.innerHTML = ` <h2>${this.name}</h2>
  <div class="image"><img src="./${this.imgSrc}" alt="${this.imgAlt}"></div>
  <div class="info">
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
  console.log("thishikeonly");
  item.innerHTML = `<h2>${this.name}</h2>
  <div class="one-hike">
    <div class="image"><img src="./${this.imgSrc}" alt="${this.imgAlt}"></div>
    <div class="info">
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
      <button onclick="location.reload()">&lt;- All Hikes</button>
      </div>`;
  //console.log(item.innerHTML);
  return item;
}

const hikesCtrl = new HikesController('hikes');

window.addEventListener('load', () => {
    hikesCtrl.showHikeList();
});

function reloadList() {
    hikesCtrl.showHikeList();
}

