"use strict";
var Db = require('./Db');

class User extends Db {

    constructor() {
        super('users');
    }

    findAll(cb) {
        var query = super.selectAllQuery();
        super.performQuery(query, {}, cb);
    }
}

module.exports = User;
