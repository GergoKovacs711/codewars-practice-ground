

/*********************************************************************************************************************
 * Parabolic length
 * https://www.codewars.com/kata/562e274ceca15ca6e70000d3/train/typescript                                           *
 *********************************************************************************************************************/
export class G964 {
    private static findYValue = (x: number): number => x * x;
    private static findDistance = (first: G964.Point, second: G964.Point) => {
        return Math.sqrt(pow(first.x - second.x) + pow(first.y - second.y));
    };
    private static asPoint = (xValue: number, yValue: number): G964.Point => ({x: xValue, y: yValue})

    public static lenCurve = (n: number): number => {
        const deltaX = 1 / n;
        const xPoints: number[] = [...Array(n)].map((_, i) => i * deltaX);
        xPoints.push(1);
        const points: G964.Point[] = xPoints.map(x => G964.asPoint(x, G964.findYValue(x)));
        const arcLength = points.reduce((sum, currentPoint, index, array) => {
            if (index === 0 || index == array.length) {
                return sum;
            }
            const distance = G964.findDistance(array[index - 1], currentPoint);
            return sum + distance;
        }, 0);
        return arcLength;
    }
}

namespace G964 {
    export interface Point {
        x: number
        y: number
    }
}

const pow = (value: number, power?: number): number => {
    return value ** (power || 2);
}

/*********************************************************************************************************************
 * Who like it?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript                                       *
 *********************************************************************************************************************/
export const likes = (a: string[]): string => {
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
}

// nice solution
export const otherLikes = (names: string[]): string => {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)] as string
}

const myInterestingFunction = (names: string[]) => {
    return [
        'no one likes this',
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    ][Math.min(4, names.length)]
}


