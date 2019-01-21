const threeSum = (arr) => {
    const sumTarget = arr[0],
          restArr = arr.slice(1);
    for ( var i=1; i<=arr.length; i++ ){
        for ( var j=1; j<=arr.length; j++ ){
            if(i===j){continue;}
            const firstTwoNumsAdded = arr[i] + arr[j],
                lookForRemainder = sumTarget - firstTwoNumsAdded;
            if (restArr.indexOf(lookForRemainder) !== -1){
                return true;
            }
        }
    }
    return false;
};

let arr = [100, 3, 33, 44, 55, 12];
console.log(threeSum(arr));

module.exports = threeSum;

