function fizzBuzz(num) {

    const numArr = [];
    for (var i=1;i<=num;i++){
        numArr.push(i);
    }

    const dividedByWithNoLeftovers = (num, dividedBy) => {
        return num % dividedBy === 0;
    }

    const convertedArr = numArr.map(item => {
        if (dividedByWithNoLeftovers(item,3) && dividedByWithNoLeftovers(item,5)){
            return 'FizzBuzz';
        } else if (dividedByWithNoLeftovers(item,3)){
            return 'Fizz';
        } else if (dividedByWithNoLeftovers(item,5)){
            return 'Buzz';
        }
        return item;
    });


    // code goes here
    return convertedArr.join(' ');

}

module.exports = fizzBuzz;

