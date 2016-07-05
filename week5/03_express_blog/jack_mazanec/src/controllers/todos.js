// Require dependecies

var express = require('express'),
    Todos   = express.Router(),
    fs      = require('fs');

Todos.route('/:id/?')
// GET /todos/:id
// ---------------
// responds to request for todo item details
  .get(function(req, res, next) {
    // get id from url
    var id    = parseInt(req.params.id),
        todos = fs.readFileSync(__dirname + '/../db/todos.json');




    // turns todos into string parsed into a pojo
    todos = JSON.parse(todos.toString()); // Turn todos file into JS object



    res.render('detail', {
      pageTitle: todos[id].name,
      todo:      todos[id]
    });
  });


module.exports = Todos;
