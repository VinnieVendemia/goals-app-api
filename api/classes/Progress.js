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

    findAllByGoal(goal_id, cb) {
        var query = super.selectByKeyQuery('goal_id', goal_id);
        super.performQuery(query, {goal_id: goal_id}, cb);
    }

    save(data, cb) {
        var query = super.insertWithDupQuery ('description, scale, date, goal_id', ':description, :scale, :date, :goal_id', 'scale', ':scale')
        super.performQuery(query, data, cb);
    }

    remove(id, cb)  {
        var query = super.deleteQuery('id', id)
        super.performQuery(query, {id: id}, cb);
    }

}

module.exports = Progress;
