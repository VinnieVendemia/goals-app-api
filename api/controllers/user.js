'use strict';

// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne};

var User = require('../classes/User');
var user = new User();

//GET /user
function getAll(req, res, next) {
  user.findAll(
    function(data) {
      res.json({ users: data});
    }
  );  
}

//POST /user 
function save(req, res, next) {
  user.save(req.body, 
      function(data) {
          res.json({success: 1, description: "User added to the list!"})
      }
  )
}

//GET /user/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    user.find(id, function(data){
        delete data[0]['password']
        res.json(data);
    });
}