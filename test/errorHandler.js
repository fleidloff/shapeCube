import assert from "assert";
import chai from "chai";
chai.should();
const spies = require("chai-spies");

chai.use(spies);

const shapecube = require("../util/requireUnique")("../dist/shapecube");

describe("ErrorHandler", () => {
    describe("shapecube.check()", () => {

        it("error handler should be called with error", () => {
            const errorHandler = function errorHandler(e) {
                assert.equal(e.message, "Variable must be Number");
            }

            const spy = chai.spy(errorHandler);

            shapecube.config({
                errorHandler: spy
            });

            (() => {
                shapecube.check({Number: "1"});
                chai.expect(spy).to.have.been.called();

            }).should.not.throw();

        });

        it("error handler should not be called with valid params", () => {
            const errorHandler = function errorHandler(e) {
                assert.equal(e.message, "Variable must be Number");
            }

            const spy = chai.spy(errorHandler);

            shapecube.config({
                errorHandler: spy
            });

            shapecube.check({Number: 1});

            chai.expect(spy).to.not.have.been.called();

        });
    });
});
