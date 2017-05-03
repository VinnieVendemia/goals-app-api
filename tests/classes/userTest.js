var test = require('tape');
global.env = 'dev'
var User = require('../../api/classes/User');


test('init test', function (t) {
   var user = new User();

   t.ok(user, 'user should be OK');
   t.end();
});

test('insert query test', function (t) {
   var user = new User();

   var insertQuery = user.insertQuery('username, password, admin', 'test user, test password, test admin')
   t.equal(insertQuery, 'INSERT INTO users (username, password, admin) VALUES (test user, test password, test admin)')

   t.end();
});

test('selectAll query test', function (t) {
   var user = new User();

   var query = user.selectAllQuery();
   t.equal(query, 'SELECT * FROM users')

   t.end();
});

test('selectByKeyQuery query test', function (t) {
   var user = new User();

   var query = user.selectByKeyQuery('id', 1)
   t.equal(query, 'SELECT * FROM users where id = 1')

   t.end();
});

test('deleteQuery query test', function (t) {
   var user = new User();

   var query = user.deleteQuery('id', 1)
   t.equal(query, 'DELETE FROM users where id = 1')

   t.end();
});

test('updateQuery query test', function (t) {
   var user = new User();

   var query = user.updateQuery('username', 'id', 1)
   t.equal(query, 'UPDATE users SET username=:username where id = 1')

   t.end();
});