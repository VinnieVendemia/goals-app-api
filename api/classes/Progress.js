"use strict";
var Db = require('./Db');

class Progress extends Db {


    constructor() {
        super('progress');
    }
}

module.exports = Progress;
