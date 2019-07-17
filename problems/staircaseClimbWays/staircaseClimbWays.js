
let staircaseClimbWays = function (stairsNum) {
    if ( stairsNum === 0) { return 1; }
    if ( stairsNum < 0) { return 0; }
    return staircaseClimbWays(stairsNum - 1) + staircaseClimbWays(stairsNum - 2);
};

console.log(staircaseClimbWays(5));










//module.exports = anagramValidator;
