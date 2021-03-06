
/**
 *
 * @param sortedIntegers
 * @param targetAverage
 * @returns {boolean}
 */
let averagePair = function (sortedIntegers, targetAverage) {
    if (sortedIntegers.length <= 1) { return false; }

    let i = 0,
        j = sortedIntegers.length - 1,
        pairSum;

    while (i < j) {
        pairSum = sortedIntegers[i] + sortedIntegers[j];
        if ( pairSum / 2 === targetAverage ) { return true; }
        else if ( pairSum / 2 > targetAverage ) { j-- }
        else { i++ }
    }

    return false;
};

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));













// /**
//  *
//  * @param sortedIntegers
//  * @param targetAverage
//  * @returns {boolean}
//  */
// let averagePair = function (sortedIntegers, targetAverage) {
//     if (sortedIntegers.length <= 1) { return false; }
//     let pairSum, newSum;
//     pairSum = sortedIntegers[0] + sortedIntegers[1];
//     if (pairSum / 2 === targetAverage) { return true; }
//
//     for ( let i = 1; i < sortedIntegers.length - 1; i++ ) {
//         newSum = pairSum + sortedIntegers[i + 1] - sortedIntegers[i - 1];
//         if ( newSum / 2 === targetAverage) { return true; }
//         pairSum = newSum;
//     }
//     return false;
// };
//
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));


// /**
//  *
//  * @param sortedIntegers
//  * @param targetAverage
//  * @returns {boolean}
//  */
// let averagePair = function (sortedIntegers, targetAverage) {
//     if (sortedIntegers.length <= 1) { return false; }
//     let pairSum, newSum;
//     pairSum = sortedIntegers[0] + sortedIntegers[1];
//     if (pairSum / 2 === targetAverage) { return true; }
//
//     for ( let i = 1; i < sortedIntegers.length - 1; i++ ) {
//         newSum = pairSum + sortedIntegers[i + 1] - sortedIntegers[i - 1];
//         if ( newSum / 2 === targetAverage) { return true; }
//         pairSum = newSum;
//     }
//     return false;
// };
//
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
// //console.log(averagePair([1,2,3], 2.5));
//
// //module.exports = averagePair;