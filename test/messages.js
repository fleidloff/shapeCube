import assert from "assert";
import chai from "chai";
chai.should();
const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("Messages", () => {
    describe("shapecube.check()", () => {

        it("should throw a specific message when message is defined", () => {
            (() => {
                shapecube.check({String: 1, message: "custom message"});
            }).should.throw("custom message");
        });

    });
});
