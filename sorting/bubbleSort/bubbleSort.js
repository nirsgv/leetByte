const bubbleSort = (arr) => {
    // const swap = (array, current, next) => {
    //     let tmpPointer = array[current];
    //     array[current] = array[next];
    //     array[next] = tmpPointer;
    // };
    let movements;
    const swap = (array, current, next) => {
        [array[current], array[next]] = [array[next], array[current]];
    };
    for (let i = arr.length; i >= 0; i--) {
        movements = 0;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                movements++;
            }
        }
        if (movements === 0) return arr;
    }

    return arr;
};

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));
console.log(bubbleSort([13,45,5,2,7,6456,12,23,63,61]));