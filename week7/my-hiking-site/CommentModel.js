// normally the model would have more going on...retrieving the comments from a database, adding comments, editing comments, filtering, etc. 
// Our model will be very simple.  We could simply export the CommentList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.

// Comment Model
export default class CommentModel {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
    this.commentList = [];
  }

  getAllComments() {
    // should return a list of all the Comments.
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
    return this.commentList;
  }

  getCommentByName(commentName) {
    // filter the Comments for the record identified by CommentName and return it
    let comment = commentList.filter(oneComment => oneComment.name = commentName);
    return comment;
  }

 // Add comment to the array of comments
  addTask (comment) {
      this.commentList.push(comment);
  }

}