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
        `INSERT INTO ${this.table} (${columns}) VALUES (${values})`
    }

    selectByKey (key, value) {
        `SELECT * FROM ${this.table} where ${key} = ${value}`
    }

    selectAllQuery () {
        `SELECT * FROM ${this.table}`
    }

    deleteQuery(key, value)  {
        `DELETE FROM ${this.table} where ${key} = #{value}`
    }

    updateQuery (key, value) {
        `UPDATE ${this.table} SET title=:title where ${key} = ${value}`
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
