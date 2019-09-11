const formattedDivision = (num1, num2) => {
    let res = String(num1 / num2);
    if (!res.includes('.')) return res + '.0000';

    let num = res.split('.')[0],
        decimal = res.split('.')[1].slice(0, 4),
        newNum = '';

    for (let i = 0; i < 4; i++) {
        if (!decimal.charAt(i)) decimal += '0';
    }

    for (let i = 0; i < num.length ; i++) {
        newNum += num[i];
        if ((num.length - 1 - i) % 3 === 0  && i !== num.length - 1) {
            newNum += ',';
        }
    }

    return (newNum.length >= 1 ? newNum : '0') + '.' + decimal ;
};

console.log(formattedDivision(9112, 2));