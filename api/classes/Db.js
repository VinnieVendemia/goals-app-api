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

    insertWithDupQuery (columns, values, colToUpdate, valToUpdate) {
        return insertQuery(columns, values) + ` ON DUPLICATE KEY update ${colToUpdate}=${valToUpdate}`;
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

    updateQuery (updateKey, searchKey, searchValue) {
        return `UPDATE ${this.table} SET ${updateKey}=:${updateKey} where ${searchKey} = ${searchValue}`
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
