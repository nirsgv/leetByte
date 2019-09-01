

const greatestCommonFactor = (num1,num2) => {
    let lowerNum = Math.min(num1, num2);
    while (lowerNum > 1) {
        if (num1 % lowerNum === 0 && num2 % lowerNum === 0) return lowerNum;
        lowerNum--;
    }
    return lowerNum;
}

const splitNumsFromStr = (str) => {
    let splittedStr = str.split(' ');
    let num1 = Number(splittedStr[0]);
    let num2 = Number(splittedStr[splittedStr.length - 1]);
    return [num1, num2];
}

console.log(splitNumsFromStr('7 & num2 = 3'));
console.log(greatestCommonFactor(...splitNumsFromStr('7 & num2 = 3')));
console.log(greatestCommonFactor(...splitNumsFromStr('36 & num2 = 54')));
