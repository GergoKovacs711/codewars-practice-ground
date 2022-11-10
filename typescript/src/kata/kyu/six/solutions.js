"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otherLikes = exports.likes = exports.G964 = void 0;
/*********************************************************************************************************************
 * Parabolic length
 * https://www.codewars.com/kata/562e274ceca15ca6e70000d3/train/typescript                                           *
 *********************************************************************************************************************/
class G964 {
}
exports.G964 = G964;
G964.findYValue = (x) => x * x;
G964.findDistance = (first, second) => {
    return Math.sqrt(pow(first.x - second.x) + pow(first.y - second.y));
};
G964.asPoint = (xValue, yValue) => ({ x: xValue, y: yValue });
G964.lenCurve = (n) => {
    const deltaX = 1 / n;
    const xPoints = [...Array(n)].map((_, i) => i * deltaX);
    xPoints.push(1);
    const points = xPoints.map(x => G964.asPoint(x, G964.findYValue(x)));
    const arcLength = points.reduce((sum, currentPoint, index, array) => {
        if (index === 0 || index == array.length) {
            return sum;
        }
        const distance = G964.findDistance(array[index - 1], currentPoint);
        return sum + distance;
    }, 0);
    return arcLength;
};
const pow = (value, power) => {
    return Math.pow(value, (power || 2));
};
/*********************************************************************************************************************
 * Who like it?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript                                       *
 *********************************************************************************************************************/
const likes = (a) => {
    return myInterestingFunction(a);
    // let result: string;
    // switch (a.length) {
    //     case 0:
    //         result = 'no one likes this';
    //         break;
    //     case 1:
    //         result = `${a[0]} likes this`;
    //         break;
    //     case 2:
    //         result = `${a[0]} and ${a[1]} like this`;
    //         break;
    //     case 3:
    //         result = `${a[0]}, ${a[1]} and ${a[2]} like this`;
    //         break;
    //     default:
    //         const restList = a.slice(2);
    //         result = `${a[0]}, ${a[1]} and ${restList.length} others like this`;
    // }
    // return result;
};
exports.likes = likes;
// nice solution
const otherLikes = (names) => {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)];
};
exports.otherLikes = otherLikes;
const myInterestingFunction = (names) => {
    return [
        'no one likes this',
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    ][Math.min(4, names.length)];
};
//# sourceMappingURL=solutions.js.map