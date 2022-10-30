
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
