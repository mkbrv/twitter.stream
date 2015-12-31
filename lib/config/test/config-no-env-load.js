var environment = "wrong";
process.env.NODE_ENV = environment;
//grunt env will be different

var assert = require('assert');
describe('#Config', function () {

    it('gracious failure in case of wrong environment', function () {
        var config = require("../../config");
        assert(config.getParams());
    });
});


