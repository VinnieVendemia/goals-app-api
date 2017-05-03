var test = require('tape');
global.env = 'dev'
var Db = require('../../api/classes/Db');


test('init test', function (t) {
   var db = new Db();

   t.ok(db, 'db should be OK');
   t.end();
});

test('insert query test', function (t) {
   var db = new Db('test_table');

   var insertQuery = db.insertQuery('title', 'test_title')
   t.equal(insertQuery, 'INSERT INTO test_table (title) VALUES (test_title)')

   t.end();
});