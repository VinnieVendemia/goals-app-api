'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();
var morgan = require('morgan');
var authMiddleware = require('./api/middleware/auth.js')

module.exports = app; // for testing

var env = process.env.NODE_ENV || 'dev';
var debug = process.env.DEBUG || false;
global.env = env;
global.debug = debug;

global.logger = require('./config/logger');

var fs = require('fs'),
  yaml = require('js-yaml');

var port = process.env.PORT || 3000;

try {
  var swaggerObject = yaml.safeLoad(fs.readFileSync('./api/swagger/swagger.yaml', 'utf8'));
  if(global.debug === 'true') {
    swaggerObject['schemes'].unshift('http')
  }
} catch (err) {
  console.log(err);
}

var config = {
  appRoot: __dirname,
  swagger: swaggerObject
};


SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(morgan(global.env))

  // app.use('/users', tokenMiddleWare)
  app.all('*', authMiddleware.tokenMiddleWare);

  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

});
