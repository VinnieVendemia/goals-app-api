var test = require('tape');
global.env = 'dev'
var ConfigFactory = require('../../api/classes/ConfigFactory');


test('init test', function (t) {
   var dbConfig = new ConfigFactory();

   t.ok(dbConfig, 'dbConfig should be OK');
   t.end();
});