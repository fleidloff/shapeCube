import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Advanced", () => {
    describe("shapeCube.check()", () => {

        it("should throw an error because NaN is not a number", () => {
            (() => {
                shapeCube.check({Number: NaN});
            }).should.throw("Variable is not a number");
        });

    });
});
