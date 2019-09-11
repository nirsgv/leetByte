function ArithGeoII(arr) {

    const arithmeticRatio = arr[1] - arr[0],
        geometricRatio = arr[1] / arr[0];

    let isArithmetic = true,
        isGeometric = true,
        index = 0;

    while ((isArithmetic || isGeometric) && (index < (arr.length - 2))) {
        if (arr[index + 1] - arr[index] !== arithmeticRatio) {isArithmetic = false}
        if (arr[index + 1] / arr[index] !== geometricRatio) {isGeometric = false}
        index++;
    }

    if (isArithmetic) {return "Arithmetic"}
    if (isGeometric) {return "Geometric"}
    return -1;
}


console.log(ArithGeoII([5,10,15])); // "Arithmetic"
console.log(ArithGeoII([2,4,8,16])); // "Geometric"
console.log(ArithGeoII([2,5,12,26])); // -1
