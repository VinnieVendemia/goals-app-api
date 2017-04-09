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
    var goal = db.find(id);
    if(goal) {
        res.json(goal);
    }else {
        res.status(204).send();
    }       
}
//PUT /goal/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var goal = req.body;
    if(db.update(id, goal)){
        res.json({success: 1, description: "goal updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /goal/{id} operationId
function delGoal(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "goal deleted!"});
    }else{
        res.status(204).send();
    }

}