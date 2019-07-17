




let staircaseClimbWaysWithStepsizes = function (stairsNum, stepSizes) {

    const memo = {

    };

    const getLargest = (threshold, arr) => {
        const possibleSteps = arr.filter(item => item >= threshold);
        return Math.max(...possibleSteps);
    };

    const getSmallest = (threshold, arr) => {
        const possibleSteps = arr.filter(item => item >= threshold);
        return Math.min(...possibleSteps);
    };


    function recurTrySteps(remainingStairs, remainingSteps) {
        let largestStep = getLargest(remainingStairs, remainingSteps);
        if (remainingStairs <= 0) {
            return remainingStairs;
        }
        remainingStairs -= largestStep;
        return recurTrySteps(remainingStairs, remainingSteps);
    }

    return recurTrySteps(stairsNum, stepSizes);


};

console.log(staircaseClimbWaysWithStepsizes(10, [5,3,1]));










//module.exports = anagramValidator;
