let inventory = [
  ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.'],
  ['LA-SM-STICKER', 200, 'Small Sticker', 'images/la-small-sticker-128px.png', "It\'s a tiny Launch sticker. How cute!"],
  ['LA-T-SHIRT', 50, 'T-Shirt', 'images/la-t-shirt-200px.png', '100% Cotton. Makes a great gift.']
];

// your code, here

class Product {
  constructor(id, quantity, name, url, description) {
    this.id = id;
    this.quantity = quantity;
    this.name = name;
    this.url = url;
    this.description = description;
  }

  sell() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
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
    //setting attributes
    mainDiv.className = 'product';
    h1Product.innerHTML = `Product Name: ${this.name}`;
    h5Quantity.innerHTML = `${this.quantity} In Stock`;
    img.src = `${this.url}`;
    h3Description.innerHTML = 'Description';
    pDescription.innerHTML = `${this.description}`;
    //appending together
    [h1Product, h5Quantity, img, h3Description, pDescription].forEach(function(element) {
        mainDiv.appendChild(element);
      }
    );
    return (mainDiv);
  }
}

let products = inventory.map(function(productData) {
  return new Product(...productData);
});

let element = document.getElementById('all-products');

products.forEach((product) => {
  element.appendChild(product.toHTML());
});
