/**
 *
 * @param inputArr
 */
function flatten(inputArr, flatArr = []) {
    inputArr.forEach(item => {
        if (Array.isArray(item)) {
            flatArr.push(...flatten(item));
        } else {
            flatArr.push(item);
        }
    });
    return flatArr;
}

console.log(flatten([1,1,1,[2,2,2,2,2],[3],[[4,5],[6,7,[8,8,8,[9]]]]]));
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]


/**
 *
 * @param stringsArr {Array} - array of strings
 * @param capitalizedStringsArr {Array} - starting point array to add capitalized strings to
 * @returns {Array}
 */
const capitalizeFirst = (stringsArr, capitalizedStringsArr = []) => {

    if (stringsArr.length === 0) return capitalizedStringsArr;
    capitalizedStringsArr.push(stringsArr[0].charAt(0).toUpperCase() + stringsArr[0].slice(1));

    return capitalizeFirst(stringsArr.slice(1), capitalizedStringsArr);
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


function nestedEvenSum (nestedObj, localSum = 0) {
    const isObject = obj => obj && obj.constructor && obj.constructor === Object;

    // go through all keys of object and collect their 'even' values
    let innerObjCount = 0;
    for (let key in nestedObj) {
        if (nestedObj[key] % 2 === 0) {
            localSum += nestedObj[key];
        }
    }
    for (let key in nestedObj) {
        if (isObject(nestedObj[key])) {
            // if a key has an object for a value, go inside it and start same process
            innerObjCount += 1;
            return localSum += nestedEvenSum(nestedObj[key]);
        }
    }
    if (!innerObjCount) {
        return localSum;
    }
    // if there are no objects contained in this object, return inner sum
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    x: {c: 2},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

var obj3 = {
    a: 2,
    b: 2,
    c: {
        cc: 2,
        ccc: 2,
        cccc: {
            d: 2,
            dd: 2,
            ddd: 1
        }
    }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
console.log(nestedEvenSum(obj3)); // 12


const capitalizeWords = (arr, capitalizedWordsArr = []) => {
    if (arr.length === 0) return capitalizedWordsArr;
    capitalizedWordsArr.push(arr[0].toUpperCase());
    return capitalizeWords(arr.slice(1), capitalizedWordsArr);
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


/**
 *
 * @param nestedObj {object}
 */
const stringifyNumbers = (nestedObj, builtObj = {}) => {
    const isObject = obj => obj && obj.constructor && obj.constructor === Object;

    for (let key in nestedObj) {
        if (typeof nestedObj[key] === 'number') {
            builtObj[key] = String(nestedObj[key]);
        } else if (isObject(nestedObj[key])) {
            builtObj[key] = stringifyNumbers(nestedObj[key]);
        } else {
            builtObj[key] = nestedObj[key];
        }
    }

    return builtObj;
};

let object = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};
console.log(stringifyNumbers(object));


const collectStrings = (nestedObj, collectedOutput = []) => {
    const isObject = obj => obj && obj.constructor && obj.constructor === Object;

    for (let key in nestedObj) {
        if ( typeof nestedObj[key] === 'string' ) {
            collectedOutput.push(nestedObj[key]);
        }
    }
    for (let key in nestedObj) {
        if ( isObject(nestedObj[key]) ) {
            return collectStrings(nestedObj[key], collectedOutput);
        }
    }
    return collectedOutput;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    },
    lastOne: "lastOne"
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])