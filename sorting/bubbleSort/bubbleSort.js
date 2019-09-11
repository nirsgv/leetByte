/**
 *
 * @param arr
 * @returns {*}
 */
const bubbleSort = (arr) => {
    let hasSwapped;
    const swap = (array, current, next) => {
        [array[current], array[next]] = [array[next], array[current]];
    };
    for (let i = arr.length; i >= 0; i--) {
        hasSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                hasSwapped = true;
            }
        }
        if (!hasSwapped) return arr;
    }

    return arr;
};

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));
console.log(bubbleSort([13,45,5,2,7,6456,12,23,63,61]));

// const swap = (array, current, next) => {
//     let tmpPointer = array[current];
//     array[current] = array[next];
//     array[next] = tmpPointer;
// };