import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Custom Type", () => {
    describe("shapeCube.check()", () => {

        var newType = shapeCube.createType("newType", {a: shapeCube.types.Number, b: shapeCube.types.Number}, "newType consisshapeCube of only numbers");

        it("should throw an error when custom type is not matched", () => {
            (() => {
                const a = {a: 1, b: "2"};
                shapeCube.check({newType: a});
            }).should.throw("newType consisshapeCube of only numbers");
        });

        it("should not throw an error when custom type is matched", () => {
            (() => {
                const a = {a: 1, b: 2};
                shapeCube.check({newType: a});
            }).should.not.throw();
        });

        it("should throw an error when custom type is named message", () => {
            (() => {
                shapeCube.createType("message", {a: shapeCube.types.Number, b: shapeCube.types.Number}, "message is reserved");
                const a = {a: 1, b: 2};
                shapeCube.check({newType: a});
            }).should.throw(`type "message" cannot be created because the name is reserved.`);
        });

        it("should throw an error when custom type is named type", () => {
            (() => {
                shapeCube.createType("type", {a: shapeCube.types.Number, b: shapeCube.types.Number}, "type is reserved");
                const a = {a: 1, b: 2};
                shapeCube.check({newType: a});
            }).should.throw(`type "type" cannot be created because the name is reserved.`);
        });

    });
});
