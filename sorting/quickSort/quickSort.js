


/**
 *
 * @param arr
 * @param startIdx
 * @param endIdx
 * @returns {*}
 */
const pivotHelper = (arr, startIdx, endIdx) => {
    const swap = (array, a, b) => {
        [array[a], array[b]] = [array[b], array[a]];
    };

    let swapIdx = startIdx;
    for (let i = startIdx + 1; i < arr.length; i++) {
        if (arr[startIdx] > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, startIdx, swapIdx);
    return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    console.log(arr);

    if (left < right) {
        let pivotIdx = pivotHelper(arr, left, right);


        // left
        quickSort(arr, left, pivotIdx - 1);

        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;

};

const arr = [4,8,2,1,5,7,6,3];
console.log(quickSort(arr));