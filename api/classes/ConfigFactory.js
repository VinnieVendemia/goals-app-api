"use strict";

var fse  = require('fs-extra');

class ConfigFactory {

    constructor () {
        this.env = global.env;
        this.debug = global.debug;
    }

    fetchDbConfig() {
			if(this.debug === 'true') {
				return JSON.parse(fse.readFileSync('config/env.json', 'utf8'))[env]['db'];
			} else {
				 return {
			      "host": process.env.DB_HOST,
			      "user": process.env.DB_USER,
			      "password": process.env.DB_PASS,
			      "db": process.env.DB
			    }
			}
		}

		fetchSecretKey() {
			if(this.debug === 'true') {
				return JSON.parse(fse.readFileSync('config/env.json', 'utf8'))[env]['jwt_secret_key']
			} else {
				return process.env.JWT_SECRET_KEY
			}
		}
}

module.exports = ConfigFactory
