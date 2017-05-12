'use strict';

var logger   = global.logger.addLogger('[PROGRESS]');

// Exports all the functions to perform on the db
module.exports = {getAll};

var Progress = require('../classes/Progress');
var progress = new Progress();

//GET /goal operationId
function getAll(req, res, next) {
  progress.findAll(
    function(data) {
      res.json({ progress: data});
    }
  );  
}