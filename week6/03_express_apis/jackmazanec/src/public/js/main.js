

var objectToSend = {
  name: '',
  age: '',
  race: '',
  gender: '',
  eyecolor: ''
}

var ajax = {
  url: 'input',
  type: 'POST',
  data: objectToSend,
  success: function(response){
    console.log(response)
  },
  error: function(err) {
    console.log(err)
  }
}

$('#form-send').on('click', function(event) {
  event.preventDefault();

  objectToSend.name     = $('#name').val();
  objectToSend.age      = $('#age').val();
  objectToSend.race     = $('#race').val();
  objectToSend.gender   = $('#gender').val();
  objectToSend.eyecolor = $('#eyecolor').val();

  $.ajax(ajax);

})
