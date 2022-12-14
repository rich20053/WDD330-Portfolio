
import HikesController from './hikesController.js';
import CommentsController from './CommentsController.js';
//import { addComm } from './AddButton.js';

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
const commentCtrl = new CommentsController('comments');

window.addEventListener('load', () => {
  hikesCtrl.showHikeList();
  commentCtrl.showCommentList();
});

// Global functions that are triggered by buttons
// Add Comment Button
export function addComm() {
  debugger;
  var newCommentInput = document.querySelector('#newItem');
  var commentName = newCommentInput.value; 
  if (commentName != "") {
    const newComment = {
      name: "hike1",
      date: new Date(),
      content: commentName
    };

      myTDList.addComment(newComment);
      myTDList.displayList();
  }
  var NewCommentInput = document.querySelector('#newItem');
  NewCommentInput.focus();
  NewCommentInput.value = "";
}

