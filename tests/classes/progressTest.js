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