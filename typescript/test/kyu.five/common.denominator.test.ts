import {assert} from "chai";
import {convertFrac} from "../../src/kyu.five/common-denominator";

const tester = (lst: [number, number][]) => {
    const dividers = lst.map(p => p[1])
    const initialDenominator = dividers.reduce((previousValue, currentValue, currentIndex, array) => {
            return previousValue * currentValue
        }, 1)

    let smallestDenominatorFound = false
    let finalDenominator = initialDenominator
    while (!smallestDenominatorFound) {
        smallestDenominatorFound = true
        for (const n of dividers) {
            if(initialDenominator % n === 0) {
                finalDenominator /= n
                smallestDenominatorFound = false
            }
        }
    }
    return finalDenominator
}

describe("Fixed Tests", function() {
    it("Basic tests convertFrac", function() {
        assert.strictEqual(convertFrac([[1, 2], [1, 3], [1, 4]]), "(6,12)(4,12)(3,12)");
        assert.strictEqual(convertFrac([[69, 130], [87, 1310], [3, 4]]), "(18078,34060)(2262,34060)(25545,34060)");
        assert.strictEqual(convertFrac([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]]), "(30,60)(48,60)(45,60)(40,60)(42,60)");
    });
    it('My tester', () => {
        const res = tester([[1, 2], [1, 3], [1, 4]])
        console.log(res)
    })
});
