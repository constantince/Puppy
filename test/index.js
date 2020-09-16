describe("webpack test runing", () => {
    it("do not touch somebody you do not konw", done => {
        require("./unit/webpack.base.test");
        require("./smoke")
        done();
    })
    
})