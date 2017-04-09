'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, save};

//GET /goal operationId
function getAll(req, res, next) {
	res.json([{ username: "NONE", password: "NONE"}]);
}

//POST /goal operationId
function save(req, res, next) {
	res.json({ success: true});
    // res.json({success: db.save(req.body), description: "User added to the list!"});
}