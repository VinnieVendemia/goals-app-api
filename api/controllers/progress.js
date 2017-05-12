'use strict';

var logger   = global.logger.addLogger('[PROGRESS]');

// Exports all the functions to perform on the db
module.exports = {getAll, save, getProgressByGoal, delProgress};

var Progress = require('../classes/Progress');
var progress = new Progress();

//GET /progress operationId
function getAll(req, res, next) {
  progress.findAll(
    function(data) {
      res.json({ progress: data});
    }
  );  
}

//POST /progress operationId
function save(req, res, next) {
    progress.save(req.body, 
        function(data) {
            res.json({success: 1, description: "progress added to the list!"})
        }
    )
}

function getProgressByGoal(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    progress.findAllByGoal(id, function(data){
        res.json({ progress: data});
    });
}

//DELETE /goal/{id} operationId
function delProgress(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    progress.remove(id, 
        function(data) {
            res.json({success: 1, description: "progress deleted!"})
        }
    )
}