let inventory = [
  ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.'],
  ['LA-SM-STICKER', 200, 'Small Sticker', 'images/la-small-sticker-128px.png', "It\'s a tiny Launch sticker. How cute!"],
  ['LA-T-SHIRT', 50, 'T-Shirt', 'images/la-t-shirt-200px.png', '100% Cotton. Makes a great gift.']
];

// your code, here

class Product {
  contructor(id, quantity, name, url, description) {
    this.id = id;
    this.quantity = quantity;
    this.name = name;
    this.url = url;
    this.description = description;
    debugger
  }

  sell() {
    debugger
    --this.quantity;
    return (this.quantity);
  }
  toHTML() {
    //defining variables
    let mainDiv = document.createElement('div');
    let h1Product = document.createElement('h1');
    let h5Quantity = document.createElement('h5');
    let img = document.createElement('IMG');
    let h3Description = document.createElement('h3');
    let pDescription = document.createElement('p');
    debugger
    //setting attributes
    mainDiv.className = 'product';
    h1Product.innerHTML = 'Product Name: ${this.name}';
    h5Quantity.innerHTML = `${this.quantity} In Stock`;
    img.src = `${this.url}`;
    h3Description.innerHTML = 'Description';
    pDescription.innerHTML = '${this.description}';
    //appending together
    h3Description.appendChild(pDescription);
    mainDiv.appendChild(h1Product,h5Quantity, img, h3Description);
    return (mainDiv);
  }
}


class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    debugger
    return `Hello, my name is ${this.name}.`;
  }
}

let john = new Person('John');
console.log(john.greet());


let test = new Product(453, 50, 'Toy Test', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 'some type of description');
