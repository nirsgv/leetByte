

const largestSumOfNonAdjacentNumbers = (numsArr) => {

    const arrOne = [];
    const arrTwo = [];

    const aBTest = (a, b) => {
        return Math.max(a,b);
    };

    for ( let i = 0; i < numsArr.length; i++ ) {
        i % 2 === 0 ? arrOne.push(numsArr[i]) : arrTwo.push(numsArr[i]);
    }

    return aBTest(numsArr[0],numsArr[1]);
};

const answer = largestSumOfNonAdjacentNumbers([2, 4, 6, 2, 5]);

console.log(answer);