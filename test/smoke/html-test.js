const glob = require("glob-all");
const path = require("path");
console.log('html-test-file entring...')
describe("checking html template files", () => {
    it("should generate html files",  done => {
        
        const files = glob.sync([path.join(__dirname, 'dist/index.html')]);
        console.log('fdfdfdfdf', files)
        if(files.length >= 1) {
            done();
        } else {
            throw new Error("no or enough html files")
        }
    })
})