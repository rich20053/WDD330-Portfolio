  // Comment View handler
  export default class CommentsView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
        
    }

    renderCommentList(commentList, listElement) {
      // Creating a comment constant for use in the Comments class
      const commentUL = `
      <div class="addComment">
          <h2>Add a Comment</h2>
          <input type="text" id="commentEntry" />
          <button id="commentSubmit" onclick="addComm()">Add Comment</button>
      </div>
      <h2>Comments</h2>
      <ul class="commentlist"></ul>
      `;      
      
      var screenList = listElement;
      var child = screenList.lastElementChild;
      // Remove all current tasks from HTML
      while (child) {
          screenList.removeChild(child);
          child = screenList.lastElementChild;
      }
      
      listElement.innerHTML = commentUL;
      
      // loop through our list of comments building out the appropriate HTML for each and append it to the listElement
      for (var i=0; i<commentList.length; i++) {
        const aComment = commentList[i];
        const renderItem = this.renderOneCommentLight(aComment);
        listElement.appendChild(renderItem);
        //console.log(`${i} ${comment.name} ${listElement} ${renderItem}`);
      };
    }

    renderOneCommentLight(comment) {
      // this method will be used to create the list of comments with less detail: name, image, distance, difficulty 
      const item = document.createElement("li");
      item.setAttribute("class", "light");
      item.addEventListener('touchend', () => {
        this.renderOneCommentFull(comment);
      });
      item.addEventListener('click', () => {
        this.renderOneCommentFull(comment);
      });
      return comment.renderThisComment(item);
    }

    renderOneCommentFull(comment) {
      console.log("full comment");
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





