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

    update(id, data, cb) {
        var keyToUpdate = Object.keys(data)[0];
        if (typeof keyToUpdate != 'undefined') {
            var query = super.updateQuery(keyToUpdate, 'id', id)
            super.performQuery(query, data, cb)
        } else {
            cb();
        }
    }

    remove(id, cb)  {
        var query = super.deleteQuery('id', id)
        super.performQuery(query, {id: id}, cb);
    }

    validate(data, cb) {
        var query = super.selectByMultipleKeysQuery('username, password', ':username, :password')
        super.performQuery(query, data, cb);
    }
}

module.exports = User;
