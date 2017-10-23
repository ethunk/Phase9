// your code, here
let dishes = ['Chicken Pot Pie','Baked Beans','Macaroni and Cheese','Burgundy Sauce with Beef and Noodles','Creamed Spinach','Pumpkin Pie','Strawberry Shortcake'];

let dishesMainDiv = document.getElementById('main');

stopCount = dishes.length;

mainDiv = document.getElementById('main');

let hideDish = (id) => {
  console.log('click called');
  dishElement = document.getElementById(id);
  dishElement.className += ' hidden';
};

let testEvent = () => {
  console.log('the event is happening');
};

for (let i = 0; i < stopCount; i++) {
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item';
  foodItemDiv.id = dishes[i];
  foodItemDiv.innerHTML = dishes[i];
  mainDiv.appendChild(foodItemDiv);
}

for (let i = 0; i < stopCount; i++) {
  let foodItem = document.getElementById(dishes[i]);
  foodItem.addEventListener('click', (event) => {
    hideDish(dishes[i]);
  });
}
