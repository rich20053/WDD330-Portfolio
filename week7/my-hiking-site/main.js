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
]

Object.prototype.renderThisHike = function(item) 
{
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
  return item;
}

Object.prototype.renderThisHikeOnly = function(item) 
{
  item.innerHTML = `<h2 id="hike-name">${this.name}</h2>
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
  return item;
}

Object.prototype.renderThisComment = function(item) 
{
  item.innerHTML = `<li>${this.name} - ${this.content}</li>`;
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
  
  getHikeByName(hikeName) {
    // filter the hikes for the record identified by hikeName and return it
    let hike = hikeList.filter(oneHike => oneHike.name = hikeName);
    return hike;
  }
}

// Hike View handler
class HikesView {
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
      var screenList = document.querySelector("ul");
      var child = screenList.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
          screenList.removeChild(child);
          child = screenList.lastElementChild;
      }
      // this method will be used to one hike with full detail...you will need this for the stretch goal! 
      const item = document.createElement("li");
      item.setAttribute("id", "full");
      const hikeItem = hike.renderThisHikeOnly(item);
      screenList.appendChild(hikeItem);
      toggleComments();
      commentCtrl.showCommentList();
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
  
// normally the model would have more going on...retrieving the comments from a database, adding comments, editing comments, filtering, etc. 
// Our model will be very simple.  We could simply export the CommentList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.

// Comment Model
class CommentModel {
    constructor() {
      // We need a constructor...but in this case it isn't doing much
      this.commentList = [];
      var myJSON = JSON.parse(window.localStorage.getItem('hikecommentlist'));
      if (myJSON != "" && myJSON != null) {
        for (var i=0; i<myJSON.length; i++) {
          const newComment = {
            name: myJSON[i].name,
            date: myJSON[i].date,
            content: myJSON[i].content
          };
          this.commentList.push(newComment);
        }
      }
    }
  
    getAllComments() {
      // should return a list of all the Comments.
      return this.commentList;
    }
  
    getCommentByName(commentName) {
      // filter the Comments for the record identified by CommentName and return it
      let comment = commentList.filter(oneComment => oneComment.name = commentName);
      return comment;
    }

    // Add comment to the array of comments
    addComment (comment) {
        this.commentList.push(comment);
    }
}

// Comment View handler
class CommentsView {
    constructor(listElementId) {
        
    }

    renderCommentList(commentList, listElement) {
      // Creating a comment constant for use in the Comments class
      var screenList = listElement;
      var child = screenList.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
        screenList.removeChild(child);
        child = screenList.lastElementChild;
      }
      var hikeElement = document.getElementById("hike-name");
      if (hikeElement != null) {
        var hikeName = hikeElement.textContent;
      }
      // loop through our list of comments building out the appropriate HTML for each and append it to the listElement
      for (var i=0; i<commentList.length; i++) {
        if (hikeElement != null) {
            if (commentList[i].name == hikeName) {
                const aComment = commentList[i];
                const renderItem = this.renderOneCommentLight(aComment);
                listElement.appendChild(renderItem);        
            }
        }
        else {
            const aComment = commentList[i];
            const renderItem = this.renderOneCommentLight(aComment);
            listElement.appendChild(renderItem);    
        }
      };
      // Save current list to localStorage
      var myJSON = JSON.stringify(commentList);   
      window.localStorage.setItem('hikecommentlist', myJSON);
    }

    renderOneCommentLight(comment) {
      // this method will be used to create the list of comments with less detail: name, image, distance, difficulty 
      const item = document.createElement("li");
      return comment.renderThisComment(item);
    }

    renderOneCommentFull(comment) {
      var screenList = document.querySelector("ul");
      var child = screenList.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
          screenList.removeChild(child);
          child = screenList.lastElementChild;
      }
      // this method will be used to one comment with full detail...you will need this for the stretch goal! 
      const item = document.createElement("li");
      item.setAttribute("class", "full");
      const commentItem = comment.renderThisCommentOnly(item);
      screenList.appendChild(commentItem);
    }
  }

  // Comments controller
class CommentsController {
    constructor(parentId) {
      this.parentElement = document.getElementById(parentId); 
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.commentModel = new CommentModel();
      this.commentsView = new CommentsView(parentId);
      //this.addHikeListener();
    }
  
    showCommentList() {
      //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
      const cList = this.commentModel.getAllComments();
      this.commentsView.renderCommentList(cList, this.parentElement);
    }
  
    showOneHike(hikeNbr, listElement) {
      // use this when you need to show just one hike...with full details
      const oneHike = this.hikeModel.getHikeByName(hikeNbr);
      this.hikesView.renderOneHikeFull(oneHike, listElement);
    }

    addNewComment(newComment) {
        this.commentModel.addComment(newComment);
    }
    
  }
          
  const hikesCtrl = new HikesController('hikes');
  const commentCtrl = new CommentsController('commentlist');
  
  window.addEventListener('load', () => {
    hikesCtrl.showHikeList();
    commentCtrl.showCommentList();
  });
  
  // Global functions that are triggered by buttons
  // Add Comment Button
  function addComm() {
    var thisHikeName = document.getElementById("hike-name").textContent;
    var commentText = document.getElementById('commentEntry').value;
    if (commentText != "") {
        const newComment = {
          name: thisHikeName,
          date: new Date(),
          content: commentText
        };
  
        commentCtrl.addNewComment(newComment);
        commentCtrl.showCommentList();
    }
    var NewCommentInput = document.querySelector('#commentEntry');
    NewCommentInput.focus();
    NewCommentInput.value = "";
  }
  
  function toggleComments() {
    document.getElementById('addComment').classList.toggle("hidden");
  }

//const x = document.getElementById('hamburgerBtn');
//x.onclick = toggleMenu();

    

