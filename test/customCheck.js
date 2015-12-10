import assert from "assert";
import chai from "chai";
chai.should();
const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("Custom Check", () => {
    describe("shapecube.check()", () => {

        it("should throw an error when custom check is not fulfilled", () => {
            (() => {
            	const a = -1;
                shapecube.check({Check: (a >=0 && a < 10), message: "custom error"});
            }).should.throw("custom error");
        });

        it("should not throw an error when custom check is fulfilled", () => {
            (() => {
            	const a = 5;
                shapecube.check({Check: (a >=0 && a < 10), message: "custom error"});
            }).should.not.throw();
        });

    });
});
