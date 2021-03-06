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

    save(data, cb) {
        var query = super.insertQuery('title, description', ':title, :description')
        super.performQuery(query, data, cb);
    }

    remove(id, cb)  {
        var query = super.deleteQuery('id', id)
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
}

module.exports = Goal;
