'use strict';

var logger   = global.logger.addLogger('[GOAL]');

// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne, update, delGoal};

var Goal = require('../classes/Goal');
var goal = new Goal();

//GET /goal operationId
function getAll(req, res, next) {
  goal.findAll(
    function(data) {
      res.json({ goals: data});
    }
  );
}
//POST /goal operationId
function save(req, res, next) {
    goal.save(req.body, 
        function(data) {
            res.json({success: 1, description: "goal added to the list!"})
        }
    )
}
//GET /goal/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    goal.find(id, function(data){
        res.json(data);
    });
}
//PUT /goal/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    goal.update(id, req.body, 
        function(data) {
            res.json({success: 1, description: "goal UPDATED"})
        }
    )
}
//DELETE /goal/{id} operationId
function delGoal(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    goal.remove(id, 
        function(data) {
            res.json({success: 1, description: "goal deleted!"})
        }
    )
}