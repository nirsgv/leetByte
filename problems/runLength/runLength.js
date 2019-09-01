function runLength(str, builtPart= '', endStr= '') {

    function encodeBuiltStr(str) {
        return str.length += str.charAt(0);
    }

    if (!str.length) {
        return endStr += encodeBuiltStr(builtPart);
    } else {
        if (builtPart.charAt(0) === str.charAt(0) || builtPart.length === 0) {
            builtPart += str.charAt(0);
        } else {
            endStr += encodeBuiltStr(builtPart);
            builtPart = str.charAt(0);
        }
        return runLength(str.slice(1), builtPart, endStr);
    }
}

// keep this function call here
console.log(runLength('aabccc'));