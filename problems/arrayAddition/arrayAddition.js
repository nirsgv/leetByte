function ArrayAddition(arr) {

    const result = Math.max(...arr);
    const resultIdx = arr.indexOf(result);
    const isNotMaxValue = (item, index, arr) => index !== resultIdx;
    const arrWithNoRes = arr.filter(isNotMaxValue, resultIdx);




    // code goes here
    return arrWithNoRes;

}

console.log(ArrayAddition([5,7,16,1,2]));
console.log(ArrayAddition([arrWithNoRes3,5,-1,8,12]));