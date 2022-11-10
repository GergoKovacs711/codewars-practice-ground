"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("../src/extensions");
const Test = {
    assertEquals: (...args) => chai_1.assert.equal(...args),
};
describe("solution", function () {
    it('tests', () => {
        const str = "How can mirrors be real if our eyes aren't real";
        Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
});
//# sourceMappingURL=JadenCasing.test.js.map