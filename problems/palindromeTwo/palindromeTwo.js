
function isLetter(str) {
    return str.match(/[a-z1-9]/i);
}


function palindromeTwo(str) {

    let noPunctuationStr = str.toLowerCase().split('').filter((item,index,arr) => {
        return isLetter(item);
    });
    // code goes here  
    return palindromeConfirm(noPunctuationStr);

}


const palindromeConfirm = (str) => {
    let start = 0;
    let end = str.length - 1;
    let isPalindrome = true;

    while (start <= end) {
        if (str[start] !== str[end]) isPalindrome = false; break;
        start++;
        end--;
    }
    return isPalindrome;
}

// keep this function call here 
console.log(palindromeTwo('Noel - sees Leon')); // true
console.log(palindromeTwo('A war at Tarawa!')); // true
console.log(palindromeTwo('Ab!a')); // true
console.log(palindromeTwo('abc')); // false
