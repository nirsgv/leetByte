/**
 *
 * @param arr - A sorted array of numbers
 * @returns {number}
 */
let countUniqueValues = function (arr) {
    if (arr.length === 0) { return 0; }
    let i = 0;
    let j = i + 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return i+1;
};

console.log(countUniqueValues([1,4,55,67,456,654,678,678,678,678,9999]));
//console.log(countUniqueValues([0,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,7,7,8,9]));
//console.log(countUniqueValues([0,1]));
//module.exports = countUniqueValues;