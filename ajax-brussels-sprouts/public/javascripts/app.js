$('#get-dish').on('click', (event) => {
  event.preventDefault();

  let request = $.ajax({
    method: 'GET',
    url: '/dishes/random.json'
  });

  request.done((dish) => {
    alert(`Your random dish is: ${dish['dish']}`);
  })

});
