var test = require('tape');
global.env = 'dev'
var Progress = require('../../api/classes/Progress');


test('init test', function (t) {
  var progress = new Progress();

  t.ok(progress, 'progress should be OK');


  var insertQuery = progress.insertQuery('title', 'test_title')
  t.equal(insertQuery, 'INSERT INTO progress (title) VALUES (test_title)')

   t.end();
});

test('insert query test', function (t) {
   var progress = new Progress();

   var insertQuery = progress.insertQuery('title', 'test_title')
   t.equal(insertQuery, 'INSERT INTO progress (title) VALUES (test_title)')

   t.end();
});

test('selectAll query test', function (t) {
   var progress = new Progress();

   var query = progress.selectAllQuery();
   t.equal(query, 'SELECT * FROM progress')

   t.end();
});

test('selectByKeyQuery query test', function (t) {
   var progress = new Progress();

   var query = progress.selectByKeyQuery('id', 1)
   t.equal(query, 'SELECT * FROM progress where id = 1')

   t.end();
});

test('deleteQuery query test', function (t) {
   var progress = new Progress();

   var query = progress.deleteQuery('id', 1)
   t.equal(query, 'DELETE FROM progress where id = 1')

   t.end();
});

test('updateQuery query test', function (t) {
   var progress = new Progress();

   var query = progress.updateQuery('title', 'id', 1)
   t.equal(query, 'UPDATE progress SET title=:title where id = 1')

   t.end();
});