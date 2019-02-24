
const arrangeLetters = (function(){
    let dat = {
        memoization: {},
    };
    const arrange = ( word ) => {
        if ( word.length < 2 ){
            dat.memoization[word] = [word];
            return [word]
        }
        var curLetter;
        var restOfWord;
        var newEntry='';
        var allAnswers = [];
        var index = 0;
        var anagrams = [];
        var i, j;
        for ( i = 0; i < word.length; i++ ){
            curLetter = word[i];
            restOfWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
           var shortwordArray = dat.memoization[restOfWord] || arrange(restOfWord);

            for ( j = 0; j < shortwordArray.length; j++) {
                newEntry = curLetter + shortwordArray[j];
                anagrams[index++] = newEntry;
                dat.memoization[curLetter + restOfWord] = anagrams;
                    allAnswers.push(newEntry);
                }
            }
        return allAnswers;
    };
    return arrange;
})();






console.time();
console.log(arrangeLetters('abefghi'));
console.timeEnd();

module.exports = arrangeLetters;


//
// var arrangeLetters = (function() {
//     // Substrings seen already which we can cache. Try and avoid stack overflow as much as possible
//     var memoization = {};
//
//     function arrangeLetters(word) {
//         var length = word.length;
//         if (length < 2) {
//             memoization[word] = word;
//             return [word];
//         }
//         var anagrams = [];
//
//         // Stuff we'll need along the way
//         var before, currentLetter, after;
//         var shortWord, shortenedRepeatedly, reformedStr;
//         var idx = 0, i, j, jlen;
//
//         for (i = 0; i < length; i++) {
//             // every letter of string
//             before = word.slice(0, i);
//             currentLetter = word[i];
//             after = word.slice(i + 1, word.length + 1);
//             shortWord = before + after;
//             //slice string by one char, pass through function again
//
//             shortenedRepeatedly = memoization[shortWord] || arrangeLetters(shortWord);
//             for (j = 0, jlen = shortenedRepeatedly.length; j < jlen; j++) {
//                 reformedStr = currentLetter + shortenedRepeatedly[j];
//
//                 anagrams[idx++] = reformedStr;
//             }
//         }
//         memoization[word] = anagrams;
//         return anagrams;
//     }
//
//     return function anagrams(word) {
//         var computed = arrangeLetters(word);
//         // clear cache
//         console.log(memoization);
//         memoization = {};
//         return computed;
//     };
// })();

// console.log(arrangeLetters('asdf'));