function camelCase(str) {
    let wordsArr = str.split(/\W+/);
    let camelizedStr = '';

    function camelizeStr(str){
        return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
    }

    for (var i=0;i<wordsArr.length;i++){

        let item = wordsArr[i];
        if(i===0){
            camelizedStr+=item.toLowerCase();
        } else {
            camelizedStr+=camelizeStr(item);
        }
    }
    console.log(camelizedStr);
    return camelizedStr;
}

let str = "cats AND*Dogs-are Awesome";
console.log(camelCase(str));

module.exports = camelCase;

