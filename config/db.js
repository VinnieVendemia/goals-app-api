// TODO: Modify structure of DB code, make more modular 
// TODO: Add wrapper/protection around SQL queries, should not be making raw queries 
// TODO: ADMIN Levels that offer different levels of restriction 
'use strict;'

var logger   = global.logger.addLogger('[DB]');
var fse  = require('fs-extra');
var Client = require('mariasql');
var dbConfig = require('./configFactory')().fetchDbConfig();

var dbClient = new Client({
  host: dbConfig['host'],
  user: dbConfig['user'],
  password: dbConfig['password'],
  db: dbConfig['db']
});

module.exports = function() {
    return {
        /*
         * Save the goal inside the "db".
         */
        save(goal) {
          dbClient.query("INSERT INTO goals (title) VALUES (:title)",
            { title: goal['title'] },
            function(err, rows) {
              if (err)
                throw err;
                console.dir(rows);
            }
          );
          return 1;
        },
        /*
         * Retrieve a goal with a given id 
         */
        find(id, cb) {
            dbClient.query("SELECT * FROM goals where id = :id",
            { id: id },
            function(err, rows) {
                if (err)
                  throw err;
              return cb(rows);
            }
          );
        },

        findAll(cb) {
          dbClient.query("SELECT * FROM goals",
            function(err, rows) {
                if (err)
                  throw err;
              return cb(rows);
            }
          );
        },

        /*
         * Delete a goal with the given id.
         * TODO: Return 0 if ID does match any 
         * goals and 1 if item was deleted
         */
        remove(id) {
          dbClient.query("DELETE FROM goals where id = :id",
            { id: id },
            function(err, rows) {
              if (err)
                throw err;
            }
          );
          return 1;
        },
        /*
         * Update a goal with the given id
         * TODO: Return 0 or 1 depending on 
         * whether or not a goal is updated
         */
        update(id, goal) {
          dbClient.query("UPDATE goals SET title=:title where id=:id",
            { id: id, title: goal['title'] },
            function(err, rows) {
                if (err)
                  throw err;
            }
          );
          return 1;
        }       
    }
};  