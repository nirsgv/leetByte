function binarySearch(sortedArr, searchTarget){

    let startPointer = 0;
    let endPointer = sortedArr.length -1;
    let middlePointer = Math.floor((endPointer + startPointer) / 2);
    let middleValue;
    while (sortedArr[middlePointer] !== searchTarget && startPointer <= endPointer) {
        middlePointer = Math.floor((endPointer + startPointer) / 2);
        middleValue = sortedArr[middlePointer];
        if (middleValue === searchTarget) {
            return middlePointer
        }
        else if (searchTarget < middleValue) {
            endPointer = middlePointer - 1;
        } else {
            startPointer = middlePointer + 1;
        }
    }

    if (sortedArr[middlePointer] === searchTarget) {
        return middlePointer;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4], 11));
