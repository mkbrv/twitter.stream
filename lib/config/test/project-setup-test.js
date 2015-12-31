var assert = require('assert');
var config = require("../../config");
describe('#Mocha', function () {
    it('is set correctly', function () {
        assert(config);
    });
});
