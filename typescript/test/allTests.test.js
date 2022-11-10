"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("../src/extensions");
const solutions_1 = require("../src/kata/kyu/six/solutions");
const jaden_case_1 = require("../src/kata/kyu/seven/jaden-case");
const Test = {
    assertEquals: (...args) => chai_1.assert.equal(...args),
};
describe("toJadenCaseTest", function () {
    it('tests', () => {
        const str = "How can mirrors be real if our eyes aren't real";
        Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
});
// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/typescript
describe("Compare Strings by Sum of Chars", function () {
    it("basicTests", function () {
        chai_1.assert.strictEqual((0, jaden_case_1.compare)("AD", "BC"), true);
        chai_1.assert.strictEqual((0, jaden_case_1.compare)("AD", "DD"), false);
        chai_1.assert.strictEqual((0, jaden_case_1.compare)("!!", "7476"), true);
        chai_1.assert.strictEqual((0, jaden_case_1.compare)("zz1", ""), true);
    });
});
function testing(actual, expected) {
    var inrange = Math.abs((actual - expected) / expected) <= 1e-6;
    chai_1.assert.equal(inrange, true, "At (relative) 1e-06: Expected value must be near " + expected.toExponential(6) + ", but got " + actual.toExponential(6));
}
describe("Fixed Tests", function () {
    it("Basic tests lenCurve", function () {
        testing(solutions_1.G964.lenCurve(1), 1.414213562);
        testing(solutions_1.G964.lenCurve(10), 1.478197397);
    });
});
describe('static tests', function () {
    it('should return correct text', function () {
        chai_1.assert.equal((0, solutions_1.likes)([]), 'no one likes this');
        chai_1.assert.equal((0, solutions_1.likes)(['Peter']), 'Peter likes this');
        chai_1.assert.equal((0, solutions_1.likes)(['Jacob', 'Alex']), 'Jacob and Alex like this');
        chai_1.assert.equal((0, solutions_1.likes)(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        chai_1.assert.equal((0, solutions_1.likes)(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});
//# sourceMappingURL=allTests.test.js.map