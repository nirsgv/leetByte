
function letterCount(str) {

    let wordsArr = str.split(' '),
        longestReturning = 0,
        longestWord;

    let wordsLetterCountMapped = wordsArr.map((word) => {
        let wordLetterCount = {};
            for (let i = 0; i < word.length; i++) {
                if (wordLetterCount[word.charAt(i)]) {
                    wordLetterCount[word.charAt(i)] = wordLetterCount[word.charAt(i)] + 1;
                } else {
                    wordLetterCount[word.charAt(i)] = 1;
                }
            }
        return wordLetterCount;
    });

    for (let i = wordsLetterCountMapped.length - 1, val = 0; i >= 0; i--) {
        for (let char in wordsLetterCountMapped[i]) {
            val = wordsLetterCountMapped[i][char];
            if (longestReturning <= val) {
                longestReturning = val;
                longestWord = wordsArr[i];
            }
        }
    }
    return longestReturning > 1 ? longestWord : -1;
}

console.log(letterCount("aaaaaaxxxxx bbbbyyyy ccczzz"));  // 'aaaaaaxxxxx'
console.log(letterCount("No words"));  // -1
console.log(letterCount("no words abba here"));  // 'abba'
console.log(letterCount("I lied before"));  // 'before'
console.log(letterCount("red nonne yellllow"));  // 'none'
console.log(letterCount("a b c d ee"));  // 'ee'