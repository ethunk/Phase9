// YOUR CODE GOES HERE

let tweetText = $('.tweets');

let pageNumber = () => {
  let regex = /^d+$/;
  if (regex.test($('a').attr('href').split('').pop())){
    return $('a').attr('href').split('').pop();
  } else {
    return '0';
  }
};

let page = parseInt(pageNumber());

let linkButton = $('.more-sprouts').on('click', (event) => {
  event.preventDefault();
  page +=1;
  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + `${page} +1`
  });
  request.done((data) => {
    for (i=0; i < data.length; i++) {
      htmlText ='';
      htmlText +='<li class="tweet">';
      htmlText +='<div class="body">'+  `${data[i]["text"]}`+'</div>';
      htmlText +='<div class="user">'+`${data[i]['username']}`+'</div></li>';
      tweetText.append(htmlText);
    }
  });
});
