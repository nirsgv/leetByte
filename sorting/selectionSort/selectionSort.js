/**
 *
 * @param arr - {Array}
 * @returns {Array}
 */
const selectionSort = (arr) => {
    const swap = (array, a, b) => {
        [array[a], array[b]] = [array[b], array[a]];
    };

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            swap(arr, i, lowest);
        }
    }

    return arr;
};



console.log(selectionSort([2,3,4,5,6,7,8,9,1]));
console.log(selectionSort([9,8,7,6,5,4,3,2,1]));
console.log(selectionSort([13,45,5,2,7,6456,12,23,63,61]));