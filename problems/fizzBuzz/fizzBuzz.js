const fizzBuzz = (arr) => {
    let itemsMovedDuringThisRound = true;
    while (itemsMovedDuringThisRound) {
        itemsMovedDuringThisRound = false;
        for (var i=0; i<arr.length;i++){
            if (arr[i] > arr[i+1]){
                let big = arr[i];
                let small = arr[i+1];
                arr[i+1]=big;
                arr[i]=small;
                itemsMovedDuringThisRound =true;
            }
        }
    }
    return arr;
};

let arr = [2,1,0,44,125,7,45,67,-67];
console.log(fizzBuzz(arr));

module.exports = fizzBuzz;

