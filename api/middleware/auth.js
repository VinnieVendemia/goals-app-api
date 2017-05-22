var jwt    = require('jsonwebtoken');
var ConfigFactory = require('../classes/ConfigFactory');

module.exports.tokenMiddleWare = function (req, res, next) {

  var blacklistEndpoints = ['/goals', '/progress', '/users']
  var blacklistedRequest = false

  for(var i = 0; i < blacklistEndpoints.length; i++) {
    if( req.path.includes(blacklistEndpoints[i]) ) {
      blacklistedRequest = true
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
