"use strict";
var Db = require('./Db');

class Goal extends Db {

    constructor() {
        super('goals');
    }

    findAll(cb) {
        var query = super.selectAllQuery();
        super.performQuery(query, {}, cb);
    }

    find(id, cb) {
        var query = super.selectByKeyQuery('id', id);
        super.performQuery(query, {id: id}, cb);
    }

}

module.exports = Goal;
