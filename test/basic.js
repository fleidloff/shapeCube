import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Basics", () => {
    describe("shapeCube.check()", () => {

        it("should not throw an error when parameters are valid", () => {
            (() => {
                shapeCube.check({Number: 2}, {String: "1"}, {Any: "1"});
            }).should.not.throw();
        });

        it("should throw an error String is a number", () => {
            (() => {
                shapeCube.check({String: 1});
            }).should.throw("Variable must be String");
        });

        it("should throw an error when variable is not defined", () => {
            (() => {
                shapeCube.check({Any: undefined});
            }).should.throw("Variable must be defined");
        });

    });
});
