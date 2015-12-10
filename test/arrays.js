import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Arrays", () => {
    describe("shapeCube.check()", () => {

        it("should not throw an error when parameter is array", () => {
            (() => {
                shapeCube.check({Array: [1, 2]}, {Array: ["1", 2, 3]}, {Array: []});
            }).should.not.throw();
        });

        it("should throw an error String is not an Array", () => {
            (() => {
                shapeCube.check({Array: "1, 2, 3", message: "error"});
            }).should.throw("error");
        });

        it("should throw an error when variable is not defined", () => {
            (() => {
                shapeCube.check({Array: undefined});
            }).should.throw("Variable must be Array");
        });

        it("should not throw an error when parameters in array are of the correct type", () => {
            (() => {
                shapeCube.check({TypedArray: [1, 2, 3], type: shapeCube.types.Number});
            }).should.not.throw();
        });

        // todo: fix TypedArray
        it("should throw an error when parameters in array are not of the correct type", () => {
            (() => {
                shapeCube.check({TypedArray: [1, "2", 3], type: shapeCube.types.Number, message: "error"});
            }).should.throw("error");
        });

    });
});
