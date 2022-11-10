"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const common_denominator_1 = require("../../src/kata/kyu/six/common-denominator");
const tester = (lst) => {
    const dividers = lst.map(p => p[1]);
    const initialDenominator = dividers.reduce((previousValue, currentValue, currentIndex, array) => {
        return previousValue * currentValue;
    }, 1);
    let smallestDenominatorFound = false;
    let finalDenominator = initialDenominator;
    while (!smallestDenominatorFound) {
        smallestDenominatorFound = true;
        for (const n of dividers) {
            if (initialDenominator % n === 0) {
                finalDenominator /= n;
                smallestDenominatorFound = false;
            }
        }
    }
    return finalDenominator;
};
describe("Fixed Tests", function () {
    it("Basic tests convertFrac", function () {
        chai_1.assert.strictEqual((0, common_denominator_1.convertFrac)([[1, 2], [1, 3], [1, 4]]), "(6,12)(4,12)(3,12)");
        chai_1.assert.strictEqual((0, common_denominator_1.convertFrac)([[69, 130], [87, 1310], [3, 4]]), "(18078,34060)(2262,34060)(25545,34060)");
        chai_1.assert.strictEqual((0, common_denominator_1.convertFrac)([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]]), "(30,60)(48,60)(45,60)(40,60)(42,60)");
    });
    it('My tester', () => {
        const res = tester([[1, 2], [1, 3], [1, 4]]);
        console.log(res);
    });
});
//# sourceMappingURL=common.denominator.test.js.map