"use strict";

var fse  = require('fs-extra');

class ConfigFactory {

    constructor () {
        this.env = global.env;
    }

    fetchDbConfig() {
			if(this.env === 'dev') {
				return JSON.parse(fse.readFileSync('config/env.json', 'utf8'))[env]['db'];
			} else {
				// TODO
			}
		}		
}

module.exports = ConfigFactory
