interface String {
    toJadenCase(): string
    calculateASCIIValue(): number
}

String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(' ');
}

String.prototype.calculateASCIIValue = function () : number {
    return this.split('')
        .map(it => it.charCodeAt(0))
        .reduce((sum, currentValue) => sum += currentValue, 0)
}

interface Number {
    pow(power?: number) : number
}

Number.prototype.pow = function (power?: number) : number {
    return Math.pow(this.valueOf(), power || 2);
}