// YOUR CODE GOES HERE
let pageNumber = () => {
  let regex = /^d+$/;
  let isNumber = regex.test($('a').attr('href').split('').pop());
  if (isNumber){
    return $('a').attr('href').split('').pop();
  } else {
    return '0';
  }
};

let page = parseInt(pageNumber());

let tweetDataRequest = $.ajax({
  method: 'GET',
  url: '/tweets.json?page=' + `${page} +1`
});

let linkButton = $('.more-sprouts').on('click', (event) => {
  event.preventDefault();

  page +=1;

  let tweetDataRequest = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + `${page} +1`
  });

  tweetDataRequest.done((data) => {
    for (i=0; i < data.length; i++) {
      htmlText ='';
      htmlText +='<li class="tweet">';
      htmlText +='<div class="body">'+  `${data[i].text}`+'</div>';
      htmlText +='<div class="user">'+`${data[i].username}`+'</div></li>';
      $('.tweets').append(htmlText);
    }
  });
});

window.onscroll = function(event) {
  // console.log(window.innerHeight);
  // console.log(window.scrollY);
  let documentHeight = () => {return $(document).height();};
  let viewportSize = window.innerHeight;
  let topOfScreenHeight = () => {return window.scrollY;};

  if ((viewportSize + topOfScreenHeight()) >= (documentHeight())) {
    page +=1;
    let tweetDataRequest = $.ajax({
      method: 'GET',
      url: '/tweets.json?page=' + `${page} +1`
    });

    tweetDataRequest.done((data) => {
      for (i=0; i < data.length; i++) {
        htmlText ='';
        htmlText +='<li class="tweet">';
        htmlText +='<div class="body">'+  `${data[i].text}`+'</div>';
        htmlText +='<div class="user">'+`${data[i].username}`+'</div></li>';
        $('.tweets').append(htmlText);
      }
    });
  }
};
