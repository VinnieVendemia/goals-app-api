var test = require('tape');
global.env = 'dev'
var Db = require('../../api/classes/Db');


test('init test', function (t) {
   var db = new Db();

   t.ok(db, 'db should be OK');
   t.end();
});