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

	save(data, cb) {
        var query = super.insertQuery('username, password, admin', ':username, :password, :admin')
        super.performQuery(query, data, cb);
    }

    find(id, cb) {
        var query = super.selectByKeyQuery('id', id);
        super.performQuery(query, {id: id}, cb);
    }
}

module.exports = User;
