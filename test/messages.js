import assert from "assert";
import chai from "chai";
chai.should();
const shapeCube = require("../util/requireUnique")("../dist/shapeCube");

describe("Messages", () => {
    describe("shapeCube.check()", () => {

        it("should throw a specific message when message is defined", () => {
            (() => {
                shapeCube.check({String: 1, message: "custom message"});
            }).should.throw("custom message");
        });

    });
});
