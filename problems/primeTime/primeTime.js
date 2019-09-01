/**
 * checks if a given number is a prime-number
 * @param num
 * @returns {boolean}
 */
function primeTime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isPrime = false;
    }
    return isPrime;
}


/**
 * returns the numth prime number. counting from 1.
 * @param primeTh
 * @param primesArray
 * @param index
 * @returns {*}
 * @constructor
 */
function primeMover(primeTh, primesArray = [], index = 2) {
    if (primeTime(index)) primesArray.push(index);
    if (primesArray.length === primeTh) return primesArray[primesArray.length - 1];
    else {
        return primeMover(primeTh, primesArray, ++index);
    }
}


// keep this function call here
console.log(primeTime(19));
console.log(primeTime(8));
console.log(primeMover(16));