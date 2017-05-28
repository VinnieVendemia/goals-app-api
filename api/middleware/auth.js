var jwt    = require('jsonwebtoken');
var ConfigFactory = require('../classes/ConfigFactory');

module.exports.tokenMiddleWare = function (req, res, next) {

  // Create a map of endpoints to blacklist
  // An empty array means all methods are blacklisted
  // Otherwise, specific methods must be provided 
  var blacklistEndpoints = { 
    '/goals': [],
    '/progress': [],
    '/users': ['GET', 'PUT', 'DELETE'] // Allow POST of user w/o token
  }

  var blacklistedRequest = false

  for(var key in blacklistEndpoints) {
    if( req.path.includes(key) ) {
      if (blacklistEndpoints[key].length == 0) {
        blacklistedRequest = true
      } else if(blacklistEndpoints[key].includes(req.method)) {
        blacklistedRequest = true
      }
    }
  }

  if( blacklistedRequest == true) {
    var token = req.headers['token']
    var secret = new ConfigFactory().fetchSecretKey();

    if(token) {
      jwt.verify(token, secret, function(err, decoded) {      
        if (err) {
          return res.status(401).send({ 
            success: false, 
            message: 'Unauthorized' 
          })
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded
          return next()
        }
      })
    } else {
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided' 
      })
    }
  } else {
    return next()
  }
};
