import assert from "assert";
import chai from "chai";
chai.should();
const spies = require("chai-spies");

chai.use(spies);
const ts = require("../dist/src/ts");

describe("ErrorHandler", () => {
    describe("ts.check()", () => {

        it("error handler should be called with error", () => {
            const errorHandler = function errorHandler(e) {
                assert.equal(e.message, "Variable must be Number");
            }

            const spy = chai.spy(errorHandler);

            ts.config({
                errorHandler: spy
            });

            (() => {
                ts.check({Number: "1"});
                chai.expect(spy).to.have.been.called();

            }).should.not.throw();

        });

        it("error handler should not be called with valid params", () => {
            const errorHandler = function errorHandler(e) {
                assert.equal(e.message, "Variable must be Number");
            }

            const spy = chai.spy(errorHandler);

            ts.config({
                errorHandler: spy
            });

            ts.check({Number: 1});

            chai.expect(spy).to.not.have.been.called();

        });

        // reset error handler
        // todo: make new instances of modules for each test
        ts.config({
            errorHandler: error => {
                throw error;
            }
        });
    });
});
