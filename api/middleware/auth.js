var jwt    = require('jsonwebtoken');
var ConfigFactory = require('../classes/ConfigFactory');

module.exports.tokenMiddleWare = function (req, res, next) {

  if(req.path == "/authenticate") {
    return next()
  }else {

    var token = req.headers['token']
    var secret = new ConfigFactory().fetchSecretKey();

    if(token) {
      jwt.verify(token, secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded
          return next()
        }
      })
    } else {
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      })
    }
  }
};
