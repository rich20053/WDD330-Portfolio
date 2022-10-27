// normally the model would have more going on...retrieving the comments from a database, adding comments, editing comments, filtering, etc. 
// Our model will be very simple.  We could simply export the CommentList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.

// Comment Model
export default class CommentModel {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
  }

  getAllComments() {
    // should return a list of all the Comments.
    console.log(commentList);
    return commentList;
  }

  getCommentByName(commentName) {
    // filter the Comments for the record identified by CommentName and return it
    let comment = commentList.filter(oneComment => oneComment.name = commentName);
    return comment;
  }
}