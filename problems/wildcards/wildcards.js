const Wildcards = (str) => {
    const rulesArr = str.split(' ')[0].split(''),
          outputArr = str.split(' ')[1].split(''),
          changeArrByRemovingItems = (arr,n) => {arr.splice(0,n)},
          isAbcLetter = (str) => {return /[a-z]/i.test(str)},
          isNum = (str) => {return /[0-9]/.test(str)};

    for (var i=0;i<rulesArr.length;i++){
        if (rulesArr[i]==='+'){
            if (isAbcLetter(outputArr[0])){
                changeArrByRemovingItems(outputArr,1);
            } else {return false;}

        } else if (rulesArr[i]==='$'){
            if (isNum(outputArr[0])){
                changeArrByRemovingItems(outputArr,1);
            } else {return false;}

        } else if (rulesArr[i]==='*'){
            if (rulesArr[i+1] !== '{'){
                if (isAbcLetter(outputArr[0]) &&
                    outputArr[0] === outputArr[1] &&
                    outputArr[1] === outputArr[2]){
                    changeArrByRemovingItems(outputArr,3);
                } else {return false;}
            } else {
                const tmpRulesArr = rulesArr.join('');
                const endDupIndex = tmpRulesArr.indexOf('}',i);
                const numOfDup = +(tmpRulesArr.slice(i+2,endDupIndex));
                const tmpOutputStr = outputArr.join('');
                const tmpOutputArrSlice = tmpOutputStr.slice(0,numOfDup).split('');
                if(tmpOutputArrSlice.every((item)=>{return item===tmpOutputArrSlice[0]})){
                    changeArrByRemovingItems(outputArr,numOfDup);
                    i = endDupIndex;
                } else {return false;}
            }
        }
    }
    if (outputArr.length !== 0 ){
        return false;
    }
    return true;
};
console.log(Wildcards('*{2}$*{12}+ aa7ssssssssssssr'));

module.exports = Wildcards;