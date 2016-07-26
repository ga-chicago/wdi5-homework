console.log('this works!!!!!');


$(document).ready(function(){
  $.ajax(ajax);
});

var ajax = {
  url: '/api/events',
  type: 'get',
  dataType: 'json',
  success: function(events) {
    console.log(events);
    for (var i = 0; i < events.length; i++) {
      
      $('.list').append('<li>' + events[i].date + ': ' + events[i].band + ' @ ' + events[i].venue + '</li>');
    }
  },
  error: function(err) {
    console.log(err);
  }
}

