/**
 *
 * @param num - {Number}
 * @param place - {Number}
 * @returns {Number} - returns the digit in num at the given place value
 */
const getDigit = (num, place = 0) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// getDigit by an alternative approach
// const getDigit = (num, place = 0) => {
//     const strNum = new String(num);
//     return strNum.charAt(strNum.length - 1 - place);
// };


/**
 * Returns the number of digits in num
 * @param num - {Number}
 * @returns {Number}
 */
function digitCount(num) {
    if (arguments.length === 0) return 0;
    return new String(Math.abs(num)).length;
}


/**
 * Given an array of numbers, returns the number of digits in the largest number in the list
 * @param arr - {Array}
 * @returns {Number} - largest number of digits in the list
 */
const mostDigits = (arr) => {
  let mostDigits = 0, current, i;
  for (i = 0; i < arr.length; i++) {
      current = digitCount(arr[i]);
      mostDigits = Math.max(mostDigits, digitCount(arr[i]));
  }
  return mostDigits;
};


/**
 *
 * @param nums - {Array} - an array of numbers
 * @returns {Array} - a sorted array of numbers
 */
const radixSort = (nums) => {
    let levels = mostDigits(nums),
        buckets,
        digit;

    for (let k = 0; k < levels; k++) {
        buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }
        nums = [].concat(...buckets);
    }

    return nums;
};


// console.log(digitCount());
// console.log(getDigit(123153, 2));
// console.log(mostDigits([1,23,456,7889, 2233445566, 7889]));
console.log(radixSort([23,345,5467,12,2345,9852]));
console.log(radixSort([2,1,23,14,227,118]));