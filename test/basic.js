import assert from "assert";
import chai from "chai";
chai.should();
const ts = require("../dist/src/ts");

describe("Basics", () => {
    describe("ts.check()", () => {

        it("should not throw an error when parameters are valid", () => {
            (() => {
                ts.check({Number: 2}, {String: "1"}, {Any: "1"});
            }).should.not.throw();
        });

        it("should throw an error String is a number", () => {
            (() => {
                ts.check({String: 1});
            }).should.throw("Variable must be String");
        });

        it("should throw an error when variable is not defined", () => {
            (() => {
                ts.check({Any: undefined});
            }).should.throw("Variable must be defined");
        });

    });
});
