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
}

module.exports = Progress;
