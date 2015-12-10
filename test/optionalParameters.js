import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Optional parameters", () => {
    describe("shapeCube.check()", () => {

        it("should not throw an error when parameters are null", () => {
            (() => {
                shapeCube.check({NumberOrNull: null}, {StringOrNull: null});
            }).should.not.throw();
        });

        it("should throw an error when parameters are undefined", () => {
            (() => {
                shapeCube.check({NumberOrNull: undefined}, {StringOrNull: undefined});
            }).should.throw();
        });

    });
});
