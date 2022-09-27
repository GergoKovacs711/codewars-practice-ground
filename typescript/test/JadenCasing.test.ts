import {assert} from 'chai';
import '../src/extensions';

const Test = {
    assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("solution", function () {
    it('tests', () => {
        const str: String = "How can mirrors be real if our eyes aren't real";
        Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
});