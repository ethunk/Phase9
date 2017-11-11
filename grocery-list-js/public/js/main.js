// Exceeds Expectation Part 1 Code Here


let list = new GroceryList('Stop N Shop', '11/11/2017');

let updatePage = function() {
  let mainBody = $('#main');
  let groceryData = $.ajax({
    method: 'GET',
    url: '/groceries.json'
  });

  groceryData.done((data) => {
    for (let i = 0; i < data.groceries.length; i++) {
      let groceryItem = new GroceryItem(data.groceries[i].name, data.groceries[i].quantity);
      list.addItem(groceryItem);
    }
    mainBody.append(list.toHTML());
  });
};


$(document).ready(() => {
  updatePage();
  // Exceeds Expectation Part 2 Code Here
  let addButton = $( "input[type='submit']" ).on('click', (event) => {
    event.preventDefault();
    //Get the values in the fields
    let name = $('#grocery_name').val();
    let quantity = $('#grocery_quantity').val();
    //Send AJAX request to POST data
    if (!(name == '' || quantity == '')) {
      let newItem = new GroceryItem(name, quantity);
      list.addItem(newItem);
      $.ajax({
        method: 'POST',
        url: '/groceries.json',
        dataType: 'json',
        data: JSON.stringify({'grocery': {'name': name, 'quantity': quantity}})
      })
      .done(function () {
        $('#grocery_name').val('');
        $('#grocery_quantity').val('');
        $('#main').html(list.toHTML());
    });
    }
  });
});
