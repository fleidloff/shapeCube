import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Custom Check", () => {
    describe("shapeCube.check()", () => {

        it("should throw an error when custom check is not fulfilled", () => {
            (() => {
            	const a = -1;
                shapeCube.check({Check: (a >=0 && a < 10), message: "custom error"});
            }).should.throw("custom error");
        });

        it("should not throw an error when custom check is fulfilled", () => {
            (() => {
            	const a = 5;
                shapeCube.check({Check: (a >=0 && a < 10), message: "custom error"});
            }).should.not.throw();
        });

    });
});
