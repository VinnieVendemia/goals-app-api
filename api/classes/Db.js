"use strict";

var ConfigFactory = require('./ConfigFactory');
var Client = require('mariasql');

class Db {

    constructor (table) {
        this.table = table;

        var dbConfig = new ConfigFactory().fetchDbConfig();
        this.dbClient = new Client({
          host: dbConfig['host'],
          user: dbConfig['user'],
          password: dbConfig['password'],
          db: dbConfig['db']
        });
    }

    insertQuery (columns, values) {
        return `INSERT INTO ${this.table} (${columns}) VALUES (${values})`
    }

    selectByKeyQuery (key, value) {
        return `SELECT * FROM ${this.table} where ${key} = ${value}`
    }

    selectAllQuery () {
        return `SELECT * FROM ${this.table}`
    }

    deleteQuery(key, value)  {
        return `DELETE FROM ${this.table} where ${key} = ${value}`
    }

    // TODO: Fix 
    updateQuery (key, value) {
        return `UPDATE ${this.table} SET title=:title where ${key} = ${value}`
    }

    // TODO: Loop through array of values and format as: 
    // [ :username, :password, :admin ]
    generateValuesForQuery (values) {   
    }

    performQuery (query, values, cb) {
        this.dbClient.query(query,
            values,
            function(err, rows) {
              if (err)
                throw err;
                cb(rows);
            }
        );
    }

    toString () {
        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
    }
}

module.exports = Db
