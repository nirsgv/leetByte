/**
 *
 * @param arrA - {Array} a sorted array
 * @param arrB - {Array} a sorted array
 * @returns {Array} a sorted array
 */
const mergeSortedArrays = (arrA, arrB) => {
    if (!arrA.length) return arrB;
    if (!arrB.length) return arrA;
    const result = [];
    let i = 0,
        j = 0;

    while (i < arrA.length || j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            result.push(arrA[i]); i++;
            if (i === arrA.length) {
                for (let jj = j; jj < arrB.length; jj++) {
                    result.push(arrB[jj]); j++;
                }
            }
        } else {
            result.push(arrB[j]); j++;
            if (j === arrB.length) {
                for (let ii = i; ii < arrA.length; ii++) {
                    result.push(arrA[ii]); i++;
                }
            }
        }
    }

    return result;
};
//console.log(mergeSortedArrays([1,2,3,4,5,50,60,304,400,500,600,700,800], [12,23]));


/**
 *
 * @param arr
 * @returns {*}
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, midPoint)),
        right = mergeSort(arr.slice(midPoint));

    return mergeSortedArrays(left, right);
};

console.log(mergeSort([2,3,900,4,800,5,400,6,500,7,8,9,1]));