'use strict';

var logger   = global.logger.addLogger('[GOAL]');
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne, update, delGoal};

//GET /goal operationId
function getAll(req, res, next) {
  db.findAll(
    function(data) {
      res.json({ goals: data});
    }
  );  
}
//POST /goal operationId
function save(req, res, next) {
    res.json({success: db.save(req.body), description: "goal added to the list!"});
}
//GET /goal/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    db.find(id, function(data){
        res.json(data);
    });
}
//PUT /goal/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var goal = req.body;
    res.json({success: db.update(id, goal), description: "goal UPDATED"});
}
//DELETE /goal/{id} operationId
function delGoal(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    res.json({success: db.remove(id), description: "goal deleted!"});
}