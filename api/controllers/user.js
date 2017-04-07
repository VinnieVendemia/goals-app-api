'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll};

//GET /goal operationId
function getAll(req, res, next) {
	res.json([{ username: "NONE", password: "NONE"}]);
}