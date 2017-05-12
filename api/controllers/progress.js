'use strict';

var logger   = global.logger.addLogger('[PROGRESS]');

// Exports all the functions to perform on the db
module.exports = {getAll, save};

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