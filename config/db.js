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
            goal.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.goalList.push(goal);
            return 1;           
        },
        /*
         * Retrieve a goal with a given id or return all the goals if the id is undefined.
         */
        find(id) {
            if(id) {
                return this.goalList.find(element => {
                        return element.id === id;
                    }); 
            }else {
                return this.goalList;
            }
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