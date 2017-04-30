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

test('query test', function (t) {
   var goal = new Goal();

   var insertQuery = goal.insertQuery('title', 'test_title')
   t.equal(insertQuery, 'INSERT INTO goals (title) VALUES (test_title)')

   t.end();
});