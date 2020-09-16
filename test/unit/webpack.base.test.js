const chai = require('chai');
var expect = chai.expect;

describe("test for webpack.base.config.js", () => {
    it("entry should be a string", done => {
        const files = require('../../lib/webpack.base');
        const result = expect(files.mode).to.be.a('undefined');
        if(result) {
            done();
        } else {
            throw new Error("bar error")
        }
    })
})