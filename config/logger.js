'use strict';

var _logger = require('log4js');
var lo      = require('lodash');
var _logSet = [];
 _logger.setGlobalLogLevel('INFO');

function addToSet(name) {
  if (!lo.contains(_logSet, name)) {
    _logSet.push(name);
  }
}

exports.addLogger = function (name) {
  addToSet(name);
  return _logger.getLogger(name);
};

exports.getLoggers = function () {
  return lo.collect(_logSet);
};
