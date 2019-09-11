function binaryConverter(str) {
    let convertedValue = 0,
        multiplier;

    for (let i = str.length - 1; i >= 0; i--) {
        multiplier = str.length - i - 1;
        if (str[i] === '1') {
            convertedValue += 2 ** multiplier
        }
    }
    return convertedValue;
}


console.log(binaryConverter("100101")); // 37
console.log(binaryConverter("011")); // 3
console.log(binaryConverter("1111")); // 15
console.log(binaryConverter("0000000000001")); // 1