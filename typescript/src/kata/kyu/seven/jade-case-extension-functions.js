"use strict";
String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(' ');
};
String.prototype.calculateASCIIValue = function () {
    return this.split('')
        .map(it => it.charCodeAt(0))
        .reduce((sum, currentValue) => sum += currentValue, 0);
};
Number.prototype.pow = function (power) {
    return Math.pow(this.valueOf(), power || 2);
};
//# sourceMappingURL=jade-case-extension-functions.js.map