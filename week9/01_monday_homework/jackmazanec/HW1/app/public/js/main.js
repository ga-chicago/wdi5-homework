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
  url: '/user',
  type: 'get',
  dataType: 'json',
  success: function(data) {
    console.log(data)
  },
  error: function(err) {
    console.log(err)
  }
})
