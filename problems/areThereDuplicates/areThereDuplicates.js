/**
 *
 * @param variable number of arguments of type number and string
 * @returns {boolean}
 */
let areThereDuplicates = function (arr) {
    const argArr = Array.prototype.slice.call(arguments);
    const memo = {};

    if (argArr.length === 0) { return false; }

    for ( let i = 0; i < argArr.length; i++ ) {
        if ( memo[argArr[i]] ) { return true; }
        memo[argArr[i]] = argArr[i];
    }

    return false;
};

console.log(areThereDuplicates(1,2,2));

//module.exports = areThereDuplicates;