// update the random fortune page using AJAX
//
$('#random-fortune').on('click', (event) => {
  event.preventDefault()
  $.get('/api/v1/fortunes/random.json', (newFortune) => {
    $('#fortune').text(newFortune.content)
  })
})

// create a new fortune and update the page
//
$('form').on('submit', (event) => {
  event.preventDefault()
  let newFortuneContent = $('#fortune-content').val()

  let request = $.ajax({
    method: 'POST',
    data: { content: newFortuneContent },
    url: '/api/v1/fortunes.json'
  })

  request.done(() => {
    $('ul.fortunes').append('<li>' + newFortuneContent + '</li>')
    $('#fortune-content').val('')
  })
})
