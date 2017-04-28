var test = require('tape');
global.env = 'dev'
var Goal = require('../../api/classes/Goal');


test('init test', function (t) {
   var goal = new Goal();

   t.ok(goal, 'goal should be OK');
   t.end();
});