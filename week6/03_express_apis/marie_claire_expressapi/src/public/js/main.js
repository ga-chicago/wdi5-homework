console.log('resource loaded')

$(document).ready(function(){
  // $.ajax(ajax)  // this makes the overall ajax call. 'ajax' is the variable we set below
});


var objectToSend = {
  username: '',
  password: '',
  email: '',
  gender: ''
}


// We are sending AN OBJECT
var ajax = {
  url: '/users',
  type: 'POST',
  data: objectToSend,
  success: function(response) {
    console.log(response)
  },
  error: function(err) {
    console.log(err)
  }
}


$('#form-send').on('click', function(event){
  // prevent default which submits without grabbing and storing input data
  event.preventDefault();
  // grab values from input field
  objectToSend.username = $('#user').val();
  objectToSend.password = $('#pass').val();
  objectToSend.email = $('#em').val();
  objectToSend.gender = $('#gend').val();
  console.log(objectToSend)
  // send in the ajax variable definied right above
  $.ajax(ajax)
});
