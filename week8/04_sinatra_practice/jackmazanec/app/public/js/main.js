// $.ajax({
//   url: '/api',
//   type: 'post',
//   data: {name: 'tacos', meat: 'steak', cheese: 'si'},
//   success: function(res) {
//     console.log(res)
//   },
//   error: function(err) {
//     console.log(err)
//   }
// })

$.ajax({
  url: '/api',
  type: 'get',
  dataType: 'json',
  success: function(data) {
    for (var i = data.length - 1; i >= 0; i--) {
      $('body').append('<li>' + data[i].meat + data[i].cheese + data[i].name +  '</li>')
    }
  },
  error: function(err) {
    console.log(err)
  }
})
