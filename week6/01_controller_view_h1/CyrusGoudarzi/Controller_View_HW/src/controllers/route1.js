var express          = require('express'),
  cvd                = express.Router(),
  fs                 = require('fs'); 

//Define the  route
cvd.route('/:id/?')
//GET /controllerviewdata/:id
//-------------------
// Responds to requests for
//todo item details
.get(function(req, res, next) {
  //Get the ID from the URL
  var id    = parseInt(req.params.id),
      cvd   = fs.readFileSync(__dirname + '/../db/controllerviewdata.json');

      //Turn controllerviewdata into string parsed into a POJO
      cvd = JSON.parse(cvd.toString());

      res.render('login', {
        pageTitle: cvd[id].name,
        cvd: JSON.parse(cvd.toString())

      })
})
  .post(function(req, res, next) {
    res.json({
      status: 'ok',
      message: 'New login'
    })
})

cvd.route('/?')
// GET /controllerviewdata/:id
//------------------
//Get the data with this ID number
.get(function(req, res, next) {
  res.render('login', {});
})
//DEFINE POST ROUTE FROM CLASS
.post(function(req, res, next) {
  console.log(req.body)
  console.log(req.params)
});







module.exports = cvd;
