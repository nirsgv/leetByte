let alphaNumericRegex = /[a-z]/;

let anagramValidator = function (word1, word2) {

    let letterCount = {};

    if (word1.length !== word2.length) { return false; }

    for (let letter of word1) {
        if (alphaNumericRegex.test(letter)) {
            letterCount[letter] = ( letterCount[letter] || 0 ) + 1;
        }
    }

    for (let letter of word2) {
        if (alphaNumericRegex.test(letter)) {
            if (!letterCount[letter]) {
                return false;
            } else {
                letterCount[letter] -= 1;
            }
        }
    }

    return true;
};

console.log(anagramValidator('iceman','cinema'));

//module.exports = anagramValidator;
