/**
 *
 * @param number1 - {number}
 * @param number2 - {number}
 * @returns {boolean}
 */
let numericRegex = /[1-9]/;

let sameDigitsFrequency = function (number1, number2) {

    let digitsCount = {};
    number1 = String(number1);
    number2 = String(number2);

    if (number1.length !== number2.length) { return false; }

    for (let digit of number1) {
        if ( numericRegex.test(digit) ) {
            digitsCount[digit] = ( digitsCount[digit] || 0 ) + 1;
        }
    }

    for (let digit of number2) {
        if ( numericRegex.test(digit) ) {
            if (!digitsCount[digit]) {
                return false;
            } else {
                digitsCount[digit] -= 1;
            }
        }
    }

    return true;
};

console.log(sameDigitsFrequency(182, 281));
console.log(sameDigitsFrequency(34, 14));
console.log(sameDigitsFrequency(35489578, 58479385));

//module.exports = sameDigitsFrequency;
