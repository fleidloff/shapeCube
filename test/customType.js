import assert from "assert";
import chai from "chai";
chai.should();
const ts = require("../util/requireUnique")("../dist/src/ts");

describe("Custom Type", () => {
    describe("ts.check()", () => {

        var newType = ts.createType("newType", {a: ts.types.Number, b: ts.types.Number}, "newType consists of only numbers");

        it("should throw an error when custom type is not matched", () => {
            (() => {
                const a = {a: 1, b: "2"};
                ts.check({newType: a});
            }).should.throw("newType consists of only numbers");
        });

        it("should not throw an error when custom type is matched", () => {
            (() => {
                const a = {a: 1, b: 2};
                ts.check({newType: a});
            }).should.not.throw();
        });

        it("should throw an error when custom type is named message", () => {
            (() => {
                ts.createType("message", {a: ts.types.Number, b: ts.types.Number}, "message is reserved");
                const a = {a: 1, b: 2};
                ts.check({newType: a});
            }).should.throw(`type "message" cannot be created because the name is reserved.`);
        });

        it("should throw an error when custom type is named type", () => {
            (() => {
                ts.createType("type", {a: ts.types.Number, b: ts.types.Number}, "type is reserved");
                const a = {a: 1, b: 2};
                ts.check({newType: a});
            }).should.throw(`type "type" cannot be created because the name is reserved.`);
        });

    });
});
