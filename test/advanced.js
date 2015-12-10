import assert from "assert";
import chai from "chai";
chai.should();
const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("Advanced", () => {
    describe("shapecube.check()", () => {

        it("should throw an error because NaN is not a number", () => {
            (() => {
                shapecube.check({Number: NaN});
            }).should.throw("Variable is not a number");
        });

    });
});
