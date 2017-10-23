// your code, here
let inchesOfSnow = Number(prompt('How many inches of snow fell?'));
let width = Number(prompt('How wide is your driveway?'));
let length = Number(prompt('How long is your driveway?'));
let mainDiv = document.getElementById('main');
let cubicFeet = Math.round(width*length*inchesOfSnow);

if (0 < cubicFeet && cubicFeet < 49) {
  let unitPrice = 20;
  console.log(cubicFeet*unitPrice);
  mainDiv.innerHTML = cubicFeet*unitPrice;
} else if (50 < cubicFeet && cubicFeet <149) {
  let unitPrice = 50;
  console.log(cubicFeet*unitPrice);
  mainDiv.innerHTML = cubicFeet*unitPrice;
} else if (150 < cubicFeet && cubicFeet <299) {
  let unitPrice = 100;
  console.log(cubicFeet*unitPrice);
  mainDiv.innerHTML = cubicFeet*unitPrice;
} else {
  let unitPrice = 150;
  console.log(cubicFeet*unitPrice);
  mainDiv.innerHTML = cubicFeet*unitPrice;
}
