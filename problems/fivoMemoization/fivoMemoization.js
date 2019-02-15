
const fivo = (function(n){
    if(!n){n = 0}
    let dat = {
        memoization: {},
        sum: 0
    };
    const breakUntilOne = ( n ) => {
        if (n < 1){
            return 1
        }
        else if(dat.memoization.hasOwnProperty(n)){
            return dat.memoization[n]
        }
        else{
            dat.sum = ( breakUntilOne( n - 1 ) + breakUntilOne( n - 2 ) );
            dat.memoization[n] = dat.sum;
            return dat.sum;
        }
    };
    return breakUntilOne;
})();

console.time();
console.log(fivo(4));
console.timeEnd();

module.exports = fivo;
