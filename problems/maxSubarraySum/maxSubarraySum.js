/**
 *
 * @param arr - An array of numbers
 * @returns {number}
 */
let maxSubarraySum = function (arr, num) {
    if (arr.length < num) {return null;}
    let maxSum = 0,
        tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

console.log(maxSubarraySum([22,3,5,2,22,3,22,4], 2)); // 10
//console.log(maxSubarraySum([4,2,1,6], 1)); // 6
//module.exports = countUniqueValues;