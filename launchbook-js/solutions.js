// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];

// Exercise: Find the sidebar on the left by using its id.
document.getElementById('sidebar-left');

// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];

// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');

// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];

// Exercise: Find the last comment on the page.
let comments = document.getElementsByClassName('comments');
let lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];

// Exercise: Find the fourth comment on the page. Make sure you grab the fourth *comment* rather than the fourth *block* of comments. You may need more than one line of code!
fourthComment = () => {
  let commentBlocks = document.getElementsByClassName('comments');
  let count = 1;
  let stopValue = 4;
  for (i = 0; i < commentBlocks.length; i++) {
    let comment = commentBlocks[i];
    for (k = 0; k < comment.children.length; k++) {
      let panel = comment.children[k];
      if (count == stopValue) {
        return panel;
      }
      count++;
    }

  }
};


// Exercise: Find one of the ads in the sidebar and hide them.
let firstAd = document.getElementsByClassName('ad-slot')[0];
firstAd.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAd.style.visibility = 'visible';

// Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let firstAdImage = firstAd.getElementsByTagName('img')[0];
firstAdImage.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change its text to something incredible.
let samPostBody = document.getElementsByClassName('post')[3].getElementsByClassName('media-body')[0];
let samPostText = samPostBody.getElementsByTagName('p')[0];
samPostText.innerHTML = 'WOAH!!!! INCREDIBLE';
// Exercise: Find the first post and add the `.post-liked` class to it.
let firstPost = document.getElementsByClassName('post')[0];
firstPost.className += ' post-liked';
// Exercise: Find the second post and remove the `.post-liked` class.
let secondPost = document.getElementsByClassName('post')[1];
secondPost.classList.remove("post-liked");
