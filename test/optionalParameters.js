import assert from "assert";
import chai from "chai";
chai.should();
const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("Optional parameters", () => {
    describe("shapecube.check()", () => {

        it("should not throw an error when parameters are null", () => {
            (() => {
                shapecube.check({NumberOrNull: null}, {StringOrNull: null});
            }).should.not.throw();
        });

        it("should throw an error when parameters are undefined", () => {
            (() => {
                shapecube.check({NumberOrNull: undefined}, {StringOrNull: undefined});
            }).should.throw();
        });

    });
});
