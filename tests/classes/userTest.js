var test = require('tape');
global.env = 'dev'
var User = require('../../api/classes/User');


test('init test', function (t) {
   var user = new User();

   t.ok(user, 'user should be OK');
   t.end();
});