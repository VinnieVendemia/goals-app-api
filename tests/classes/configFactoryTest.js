var test = require('tape');
global.env = 'dev'
global.debug = 'true'
var ConfigFactory = require('../../api/classes/ConfigFactory');


test('init test', function (t) {
   var dbConfig = new ConfigFactory();
   var config = dbConfig.fetchDbConfig();

   t.ok(dbConfig, 'dbConfig should be OK');
   t.ok(config, 'config should be OK');
   t.equal(config['host'], 'localhost', 'HOST SHOULD BE LOCALHOST')

   t.end();
});