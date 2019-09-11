const stringScramble = (str1,str2) => {
    let str1count = {};
    for (let i = 0; i < str1.length; i++) {
        if (str1count[str1[i]]) str1count[str1[i]] = ++str1count[str1[i]];
        else str1count[str1[i]] = 1;
    }
    for (let j = 0; j < str2.length; j++) {
        if (!str1count[str2[j]] || str1count[str2[j]] === 0) return 'false';
        else str1count[str2[j]] = str1count[str2[j]] - 1;
    }

    return 'true';
}

console.log(stringScramble('world','world'));