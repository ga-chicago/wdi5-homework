console.log('site has loaded')

$.ajax({
  url: '/api',
  type: 'post',
  data: {username: 'today', password: 'password'},
  success: function(res) {
    console.log(res)
  },
  error: function(err) {
    console.log(err)
  }
})
