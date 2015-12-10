import assert from "assert";
import chai from "chai";
chai.should();
const ts = require("../util/requireUnique")("../dist/src/ts");

describe("Custom Check", () => {
    describe("ts.check()", () => {

        it("should throw an error when custom check is not fulfilled", () => {
            (() => {
            	const a = -1;
                ts.check({Check: (a >=0 && a < 10), message: "custom error"});
            }).should.throw("custom error");
        });

        it("should not throw an error when custom check is fulfilled", () => {
            (() => {
            	const a = 5;
                ts.check({Check: (a >=0 && a < 10), message: "custom error"});
            }).should.not.throw();
        });

    });
});
