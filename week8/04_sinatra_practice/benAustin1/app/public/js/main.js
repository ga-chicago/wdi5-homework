console.log('main.js is loaded');

$.ajax({
  url: '/?',
  type: 'get',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $('body').append(data.blood);
  },
  error: function(err) {
    console.log(err);
  }
});

function getInfo() {
  var inputData = {};
  inputData.month = $('input[name=month]').val();
  inputData.day   = $('input[name=day]').val();
  inputData.year  = $('input[name=year]').val();
  inputData.blood = $('input[name=blood]').val();
  inputData.siblings = $('input[name=siblings]').val();
  return inputData;
}

$('button').on('click', function(onClick){
  onClick.preventDefault();

  $.ajax({
    url: '/?',
    type: 'Post',
    data: getInfo(),
    success: function(response) {
      $('body').append('<div>You said your bloodtype is ' + inputData.blood);
      console.log(response);
    },
    error: function(err) {
      console.log(err);
    }
  });
});
