// example code

// create a fortune
// http://api.jquery.com/jquery.post/
//
let fortune = { content: 'Walk through life like a badass.' }
$.post('/api/v1/fortunes.json', fortune, () => {
  alert('New fortune accepted')
})

// read a fortune
// https://api.jquery.com/jquery.get/
//
$.get('/api/v1/fortunes/random.json', (response) => {
  alert('Read some data: ' + response.content)
})

$.get('/api/v1/fortunes/8.json', (response) => {
  alert('Read some data: ' + response.content)
})

// update a fortune
// http://api.jquery.com/jquery.ajax/
//
let requestData = {
  method: 'PUT',
  url: '/api/v1/fortunes/8.json',
  data: { content: 'You are confused but clarity will come soon.' }
}

let request = $.ajax(requestData)
request.done((msg) => {
  alert('Fixed that terrible fortune: ' + msg)
})

// delete a fortune
// http://api.jquery.com/jquery.ajax/
//
requestData = {
  method: 'DELETE',
  url: '/api/v1/fortunes/8.json'
}

let request = $.ajax(requestData)
request.done(function(msg) {
  alert('Deleted that terrible fortune: ' + msg)
})
