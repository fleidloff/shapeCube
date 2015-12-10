import assert from "assert";
import chai from "chai";
chai.should();
const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("Arrays", () => {
    describe("shapecube.check()", () => {

        it("should not throw an error when parameter is array", () => {
            (() => {
                shapecube.check({Array: [1, 2]}, {Array: ["1", 2, 3]}, {Array: []});
            }).should.not.throw();
        });

        it("should throw an error String is not an Array", () => {
            (() => {
                shapecube.check({Array: "1, 2, 3", message: "error"});
            }).should.throw("error");
        });

        it("should throw an error when variable is not defined", () => {
            (() => {
                shapecube.check({Array: undefined});
            }).should.throw("Variable must be Array");
        });

        it("should not throw an error when parameters in array are of the correct type", () => {
            (() => {
                shapecube.check({TypedArray: [1, 2, 3], type: shapecube.types.Number});
            }).should.not.throw();
        });

        // todo: fix TypedArray
        it("should throw an error when parameters in array are not of the correct type", () => {
            (() => {
                shapecube.check({TypedArray: [1, "2", 3], type: shapecube.types.Number, message: "error"});
            }).should.throw("error");
        });

    });
});
