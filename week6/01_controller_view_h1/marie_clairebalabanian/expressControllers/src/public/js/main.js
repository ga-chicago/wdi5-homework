$(document).ready(function() {
$.ajax(morvern)
});

var morvern = {
  type: 'get',
  url: 'http://www.omdbapi.com/?t=Morvern+Callar&y=2002&plot=short&r=json',
  dataType: 'json',
  success: function(dataFromResponse) {
    console.log(dataFromResponse);
    movieInfo = dataFromResponse;
    actorsArray = movieInfo.Actors.split(",");
    console.log(actorsArray);
    console.log(morvernInfo = movieInfo.Title + ', starring ' + actorsArray[0]'.');
  },
  error: function(error) {
    console.log(error);
  }
}


var postMorvern = {
  type: 'post',
  url: '/user/?',
  dataType: 'json',
  success: function(dataFromResponse) {
    console.log(dataFromResponse);
    movieInfo = dataFromResponse;
    actorsArray = movieInfo.Actors.split(",");
    console.log(actorsArray);
    console.log(morvernInfo = movieInfo.Title + ', starring ' + actorsArray[0]'.');
  },
  error: function(error) {
    console.log(error);
  }

}
