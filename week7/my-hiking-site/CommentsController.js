import CommentModel from './CommentModel.js';
import CommentsView from './CommentsView.js';

// Comments controller
export default class CommentsController {
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
  
  /*
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const hLList = document.getElementsByTagName('li');
    for (var i=0; i<hLList.length; i++) {
        hLList[i].addEventListener('touchend', () => 
          this.showOneHike(i), this.parentElement);
        hLList[i].addEventListener('click', () => 
            this.showOneHike(i), this.parentElement);
    }
  } */

}

