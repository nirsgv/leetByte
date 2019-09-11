function simpleMode(arr) {

    const numCount = {},
          numsInOrder = [];

    for (let i = 0; i < arr.length; i++) {
        if (!numsInOrder.includes(arr[i])) numsInOrder.push(arr[i]);
        if (numCount[arr[i]]) numCount[arr[i]] = numCount[arr[i]] + 1;
        else numCount[arr[i]] = 1;
    }

    let maxAmt = 0,
        answer;

    for (let i = 0; i < numsInOrder.length; i++) {
        if (numCount[numsInOrder[i]] > maxAmt) {
            maxAmt = numCount[numsInOrder[i]];
            answer = numsInOrder[i];
        }
    }

    return maxAmt > 1 ? answer : -1;
}

console.log(simpleMode([5,5,2,2,1,6,7,8,9,5,2])); // 5
console.log(simpleMode([3,4,1,6,10])); // -1