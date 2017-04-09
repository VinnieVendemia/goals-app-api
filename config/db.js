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
        goalList : [],
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
         */
        remove(id) {
            var found = 0;
            this.goalList = this.goalList.filter(element => {
                    if(element.id === id) {
                        found = 1;
                    }else {
                        return element.id !== id;
                    }
                });
            return found;           
        },
        /*
         * Update a goal with the given id
         */
        update(id, goal) {
            var goalIndex = this.goalList.findIndex(element => {
                return element.id === id;
            });
            if(goalIndex !== -1) {
                this.goalList[goalIndex].title = goal.title;
                return 1;
            }else {
                return 0;
            }
        }       
    }
};  