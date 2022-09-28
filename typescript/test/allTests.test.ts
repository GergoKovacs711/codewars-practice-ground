import {assert} from 'chai';
import '../src/extensions';
import {G964, likes} from "../src/kata/kyu/six/solutions";
import {compare} from "../src/kata/kyu/seven/jaden-case";

const Test = {
    assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("toJadenCaseTest", function () {
    it('tests', () => {
        const str: String = "How can mirrors be real if our eyes aren't real";
        Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
});

// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/typescript
describe("Compare Strings by Sum of Chars", function(){
    it("basicTests", function(){
        assert.strictEqual(compare("AD", "BC"), true);
        assert.strictEqual(compare("AD", "DD"), false);
        assert.strictEqual(compare("!!", "7476"), true);
        assert.strictEqual(compare("zz1", ""), true);
    });
});

function testing(actual: number, expected: number){
    var inrange = Math.abs((actual - expected) / expected) <= 1e-6;
    assert.equal(inrange, true, "At (relative) 1e-06: Expected value must be near " + expected.toExponential(6) +", but got " + actual.toExponential(6));
}

describe("Fixed Tests", function() {
    it("Basic tests lenCurve", function() {
        testing(G964.lenCurve(1), 1.414213562);
        testing(G964.lenCurve(10), 1.478197397);
    });
});

describe('static tests', function() {
    it('should return correct text', function() {
        assert.equal(likes([]), 'no one likes this');
        assert.equal(likes(['Peter']), 'Peter likes this');
        assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});