console.log('main.js is loaded');


// function getInfo() {
//   var inputData = {};
//   inputData.month = $('input[name=month]').val();
//   inputData.day   = $('input[name=day]').val();
//   inputData.year  = $('input[name=year]').val();
//   inputData.blood = $('input[name=blood]').val();
//   inputData.siblings = $('input[name=siblings]').val();
//   return inputData;
// }


$.ajax({
  url: '/api',
  type: 'get',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});

// this was working at some point isntead of the stuff 
// in lines ~37 --> day: $('form').day.value,


$('button').click(function(event){
  event.preventDefault();

  $.ajax({
    url: '/api',
    type: 'post',
    // difference between .val() and .value???
    data: { month: $('select[name=month]').val(),
            day: $('select[name=day]').val(), 
            year: $('select[name=year]').val(),
            blood: $('select[name=blood]').val(),
            siblings: $('select[name=siblings]').val()
          },
    success: function(response) {
      console.log(response);
      $('body').append('<div> Dummy text here. You are the ' + $('select[name=siblings]').val() + ' in your family </div>');
    },
    error: function(err) {
      console.log(err);
    }
  });

});
