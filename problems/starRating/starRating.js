function starRating(str) {

    const fullsAmount = Math.trunc(Number(str)),
        level = str.split('.')[1] > 0 ? true : false;
    let starStr = '';
    starStr+= 'full '.repeat(fullsAmount);
    starStr+= level !== false ? 'half ' : '';
    starStr+= 'empty '.repeat(5 - fullsAmount - (+(level)));
    return starStr.trim();
}

module.exports = starRating;