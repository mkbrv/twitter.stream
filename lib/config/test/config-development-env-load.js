var environment = "development";

process.env.NODE_ENV = environment;

var assert = require('assert');
var config = require("../../config");

describe('#Config', function () {
    it('can read files from /lib/config/env folder', function () {
        assert(config);
        assert(config.getParams());
        assert.ok(config.loaded);
    });

    it('can read specific config', function () {
        assert.equal(config.getParams().name, environment);
    });
});


