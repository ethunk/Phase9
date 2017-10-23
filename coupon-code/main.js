// your code, here

let couponDiv = document.getElementById('coupon-code');

let revealCode = () => {
  couponDiv.innerHTML = '50OFF-YOWSA!';
};

let buttonElement = document.getElementById('click-here');
buttonElement.addEventListener('click', revealCode);
