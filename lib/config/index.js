'use strict';
class Config {

    constructor(envVariable) {
        if (!envVariable) {
            envVariable = Config.DEFAULT_ENV();
        }
        this.env = envVariable;
        this.loadParams();
    }


    static DEFAULT_ENV() {
        return "development";
    }


    loadParams() {
        try {
            this.config = require('./env/' + this.env);
            this.config.name = this.env;
            this.loaded = true;
        } catch (exception) {
            this.loaded = false;
            this.config = require('./env/' + Config.DEFAULT_ENV());
            this.config.name = Config.DEFAULT_ENV();
        }
    }

    getParams() {
        return this.config;
    }
}
;
module.exports = new Config(process.env.NODE_ENV);