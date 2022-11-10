"use strict";
/*
* https://www.codewars.com/kata/54d7660d2daf68c619000d95/typescript
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFrac = void 0;
const convertFrac = (lst) => {
    const nom = lst.map(p => p[1])
        .reduce((x, y) => x * y, 0);
    console.log(nom);
    return '';
};
exports.convertFrac = convertFrac;
convertFrac([[1, 2], [1, 3], [1, 4]]);
//# sourceMappingURL=common-denominator.js.map