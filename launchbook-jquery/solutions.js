// Exercise: Find the top navbar by query for the element type, which is <nav>.
let topNavBar = $('nav.top-bar');
// Exercise: Find the sidebar on the right by using it's id.
let sidebarRight = $('#sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
let pages = $('.pages');
let groups = $('.groups');
// Exercise: Find all of the comments on the page.
let comments = $('.comments');
// Exercise: Find the first comment on the page.
firstComment = $($('.comments')[0]);
// Exercise: Find the last comment on the page.
let lastCommentIndex = comments.length - 1;
let lastComment = comments[lastCommentIndex];
// Exercise: Find the first comment nested under the third post.
let firstCommentUnderThirdPost = $('.post:nth-child(3) .panel')[0];
// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
let firstAd = $($('.ad-slot')[0]);
firstAd.hide();
// Exercise: Use .show() to make the ad that you hid in the previous step visible again.
firstAd.show();
// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
topNavBar.toggle();
// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
$($('div .ad-slot:nth-child(1) img')[0]).attr('src','http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
let SamPostText = $('.post:nth-child(4) p:first').text('INCREIBLE!');
// Exercise: Find the first post and use .addClass() to add the .post-liked class to it.
$('.post:first').addClass('post-liked');
// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.
$('.post:nth-child(2)').removeClass('post-liked');
// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
$('.post:nth-child(1)').toggleClass('post-liked');
