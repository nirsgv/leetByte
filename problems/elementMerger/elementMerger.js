function elementMerger(arr) {

    while (arr.length > 1){
        for (var i=0, tmpArr=[];i<arr.length-1;i++){
            tmpArr.push(Math.abs(arr[i] - arr[i+1]));
        }
        arr = tmpArr;
        tmpArr = [];
    }
    return arr[0];
}

let arr = [5, 7, 16, 1, 2];
console.log(elementMerger(arr));

module.exports = elementMerger;

