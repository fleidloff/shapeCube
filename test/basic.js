import assert from "assert";
import chai from "chai";
chai.should();
const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("Basics", () => {
    describe("shapecube.check()", () => {

        it("should not throw an error when parameters are valid", () => {
            (() => {
                shapecube.check({Number: 2}, {String: "1"}, {Any: "1"});
            }).should.not.throw();
        });

        it("should throw an error String is a number", () => {
            (() => {
                shapecube.check({String: 1});
            }).should.throw("Variable must be String");
        });

        it("should throw an error when type is unknown", () => {
            (() => {
                shapecube.check({UNKNOWN: 1});
            }).should.throw("type UNKNOWN is not defined");
        });

        it("should throw an error when variable is not defined", () => {
            (() => {
                shapecube.check({Any: undefined});
            }).should.throw("Variable must be defined");
        });

    });
});
