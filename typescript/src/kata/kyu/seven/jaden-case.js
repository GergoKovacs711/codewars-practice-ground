"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
function compare(s1, s2) {
    const checkedS1 = validateInput(s1);
    const checkedS2 = validateInput(s2);
    return calculateASCIIValue(checkedS1) === calculateASCIIValue(checkedS2);
}
exports.compare = compare;
const validateInput = (input) => {
    const safeInput = input == null ? "" : input;
    return /^[A-Z]+$/i.test(safeInput) ? safeInput.toUpperCase() : "";
};
// solution with an extension function
function compareWithExtension(s1, s2) {
    return s1.calculateASCIIValue() === s2.calculateASCIIValue();
}
const calculateASCIIValue = (value) => {
    return value.split('')
        .map(it => it.charCodeAt(0))
        .reduce((sum, v) => sum + v, 0);
};
// "nice", (hacky shit) solution from the site:
/*export function compare(x: any, y: any): boolean {
    return (x = [x, y].map(a => (/[^A-Za-z]/g.test(a) ? '' : a || '')
            .toUpperCase()
            .split('')
            .reduce((s: number, e: string) => s + e.charCodeAt(0), 0)))[0] === x[1];
}*/ 
//# sourceMappingURL=jaden-case.js.map