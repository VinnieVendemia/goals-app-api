"use strict";
var Db = require('./Db');

class Progress extends Db {


    constructor() {
        super('progress');
    }

    findAll(cb) {
        var query = super.selectAllQuery();
        super.performQuery(query, {}, cb);
    }

    save(data, cb) {
        var query = super.insertWithDupQuery ('description, scale, date, goal_id', ':description, :scale, :date, :goal_id', 'scale', ':scale')
        super.performQuery(query, data, cb);
    }

}

module.exports = Progress;
