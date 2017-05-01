var test = require('tape');
global.env = 'dev'
var Goal = require('../../api/classes/Goal');


test('init test', function (t) {
   var goal = new Goal();

   t.ok(goal, 'goal should be OK');


   var insertQuery = goal.insertQuery('title', 'test_title')
   t.equal(insertQuery, 'INSERT INTO goals (title) VALUES (test_title)')

   t.end();
});

test('insert query test', function (t) {
   var goal = new Goal();

   var insertQuery = goal.insertQuery('title', 'test_title')
   t.equal(insertQuery, 'INSERT INTO goals (title) VALUES (test_title)')

   t.end();
});

test('selectAll query test', function (t) {
   var goal = new Goal();

   var query = goal.selectAllQuery();
   t.equal(query, 'SELECT * FROM goals')

   t.end();
});

test('selectByKeyQuery query test', function (t) {
   var goal = new Goal();

   var query = goal.selectByKeyQuery('id', 1)
   t.equal(query, 'SELECT * FROM goals where id = 1')

   t.end();
});

test('deleteQuery query test', function (t) {
   var goal = new Goal();

   var query = goal.deleteQuery('id', 1)
   t.equal(query, 'DELETE FROM goals where id = 1')

   t.end();
});

test('updateQuery query test', function (t) {
   var goal = new Goal();

   var query = goal.updateQuery('title', 'id', 1)
   t.equal(query, 'UPDATE goals SET title=:title where id = 1')

   t.end();
});
