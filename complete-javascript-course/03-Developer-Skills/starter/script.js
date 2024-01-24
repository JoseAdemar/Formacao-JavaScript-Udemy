// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = "23";

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991));

*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -10, -1, 'error', 9, 13, 37, 15, 14, 9, 5];
/*
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    }

    console.log("Max tem aplitude " + max);
    console.log("Min tem aplitude " + min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

const calcTempAmplitudeNew = function (t1, t2) {
    let t3 = t1.concat(t2);
    let max = t3[0];
    let min = t3[0];

    for (let i = 0; i < t3.length; i++) {
        const curTemp = t3[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    }

    console.log("Max tem aplitude " + max);
    console.log("Min tem aplitude " + min);
    console.log(t3);
    return max - min;
};

const amplitude = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitude);
