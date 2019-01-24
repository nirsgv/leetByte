function palindromeSwapper(str) {

    function isPalindrome(str){
        return str === str.split('').reverse().join('');
    }
    if(isPalindrome(str)){
        return str;
    }

    let lettersArr = str.split('');
    for (var i=0;i<lettersArr.length-1;i++){
        let tmpCurrentLetter = lettersArr[i];
        let tmpNextLetter = lettersArr[i+1];
        lettersArr[i+1] = tmpCurrentLetter;
        lettersArr[i] = tmpNextLetter;
        let tmpStr = lettersArr.join('');
        if(isPalindrome(tmpStr)){
            return tmpStr;
        } else {
            lettersArr[i] = tmpCurrentLetter;
            lettersArr[i+1] = tmpNextLetter;
        }
    }
    return '-1';
}

module.exports = palindromeSwapper;