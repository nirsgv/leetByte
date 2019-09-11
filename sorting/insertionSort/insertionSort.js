/**
 *
 * @param arr
 * @returns {*}
 */
const insertionSort = (arr) => {
    const swap = (array, a, b) => {
        [array[a], array[b]] = [array[b], array[a]];
    };

    let sortedLimitIdx = 0;

    while (sortedLimitIdx <= arr.length - 1) {
        for (let i = sortedLimitIdx; i >= 0; i--) {
            if (arr[i + 1] < arr[i]) {
                swap(arr, i + 1, i);
            }
        }
        sortedLimitIdx++;
    }
    return arr;
};

console.log(insertionSort([4,3,2,1]));
console.log(insertionSort([9,8,7,6,5,4,3,2,1]));
console.log(insertionSort([13,45,5,2,7,6456,12,23,63,61]));
console.time();
console.log(insertionSort([13,45,5,2,7,6456,12,23,63,61,1,444,555,622,1,33,24,14]));
console.timeEnd();