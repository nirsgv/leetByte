function oneDecremented(num) {
    let counter = 0,
        stringedNum = num.toString();

    for(var i=0;i<stringedNum.length-1;i++){
        if(Number(stringedNum[i])===Number(stringedNum[i+1])+1){
            counter++;
        }
    }
    return counter;
}

let num = 9876541110;
console.log(oneDecremented(num));

module.exports = oneDecremented;

