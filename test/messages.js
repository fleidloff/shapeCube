import assert from "assert";
import chai from "chai";
chai.should();
const ts = require("../util/requireUnique")("../dist/src/ts");

describe("Messages", () => {
    describe("ts.check()", () => {

        it("should throw a specific message when message is defined", () => {
            (() => {
                ts.check({String: 1, message: "custom message"});
            }).should.throw("custom message");
        });

    });
});
