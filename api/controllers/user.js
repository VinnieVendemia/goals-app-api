'use strict';

// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne, update, delUser, authUser};

var User = require('../classes/User');
var user = new User();
var jwt    = require('jsonwebtoken');

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

//GET /user/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    user.find(id, function(data){
        delete data[0]['password']
        res.json(data);
    });
}

//PUT /user/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    user.update(id, req.body, 
        function(data) {
            res.json({success: 1, description: "user UPDATED"})
        }
    )
}

//DELETE /goal/{id} operationId
function delUser(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    user.remove(id, 
        function(data) {
            res.json({success: 1, description: "user deleted!"})
        }
    )
}

function authUser(req, res, next) {
  user.validate(req.body, 
    function(data) {
      if(data[0] === undefined) {
        res.json({
          success: false,
          message: "Failed to Authenticate USER"
        })
       } else {
        var userToSign = {username: data['username'], password: data['password']}
        var token = jwt.sign(userToSign, 'FJ1w2N83VJxoH42r9Zmt', {
          expiresIn: 60 * 60 * 24 // expires in 24 hours
        })

        res.json({
          success: true,
          message: "Success",
          token: token
        })
       }
    }
  )
}