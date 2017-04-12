'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, save};

//GET /user
function getAll(req, res, next) {
  db.findAllUsers(
    function(data) {
      res.json({ users: data});
    }
  );  
}

//POST /user 
function save(req, res, next) {
    res.json({success: db.saveUser(req.body), description: "user added to the list!"});
}