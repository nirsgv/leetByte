function caesarCipher(str,num) {
    let builtStr = '';

    const isLetter = (str) => {
        return str.match(/[a-z]/i);
    };

    const shiftByNum = (char, num) => {
        let charCode = char.charCodeAt(0);
        return String.fromCharCode(restartAbcWhenNeeded(charCode, num) + num);
    };

    const restartAbcWhenNeeded = (charCode, num) => {
        return (
            (charCode >= 65 && charCode <= 90 && charCode + num > 90)  ||
            (charCode >= 97 && charCode <= 122 && charCode + num > 122)
        ) ? charCode - 26 : charCode;
    };

    for (let i = 0; i < str.length; i++) {
        builtStr += isLetter(str[i]) ? shiftByNum(str[i], num) : str[i];
    }
    return builtStr;
}

console.log(caesarCipher("Caesar Cipher", 2)); // "Ecguct Ekrjgt"
console.log(caesarCipher("coderBYTE", 2)); // "eqfgtDAVG"
console.log(caesarCipher("xyz", 2)); // "zab"
console.log(caesarCipher("dogs", 8)); // "lwoa"