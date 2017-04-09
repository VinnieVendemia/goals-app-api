
var env = global.env;
var fse  = require('fs-extra');

module.exports = function() {
	return {
		fetchDbConfig() {
			if(env === 'dev') {
				return JSON.parse(fse.readFileSync('config/env.json', 'utf8'))[env]['db'];
			} else {
				// TODO
			}
		}		
	}
};