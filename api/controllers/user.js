'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, save};

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