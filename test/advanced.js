import assert from "assert";
import chai from "chai";
chai.should();
const ts = require("../util/requireUnique")("../dist/src/ts");

describe("Advanced", () => {
    describe("ts.check()", () => {

        it("should throw an error because NaN is not a number", () => {
            (() => {
                ts.check({Number: NaN});
            }).should.throw("Variable is not a number");
        });

    });
});
