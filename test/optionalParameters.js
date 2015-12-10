import assert from "assert";
import chai from "chai";
chai.should();
const ts = require("../util/requireUnique")("../dist/src/ts");

describe("Optional parameters", () => {
    describe("ts.check()", () => {

        it("should not throw an error when parameters are null", () => {
            (() => {
                ts.check({NumberOrNull: null}, {StringOrNull: null});
            }).should.not.throw();
        });

        it("should throw an error when parameters are undefined", () => {
            (() => {
                ts.check({NumberOrNull: undefined}, {StringOrNull: undefined});
            }).should.throw();
        });

    });
});
