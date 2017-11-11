// your GroceryList code, here
class GroceryList {

  constructor(storeName, date) {
    this.title = storeName;
    this.date = date;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  toHTML() {
    let header;
    let itemHTML;
    header  = `<h1>${this.title}</h1>`;
    itemHTML = '<ul>';
    for (let i = 0; i < this.items.length; i++) {
      itemHTML += `<li>${this.items[i].toString()}</li>`;
    }
    itemHTML += '</ul>';
    return (header + itemHTML);
  }

}
