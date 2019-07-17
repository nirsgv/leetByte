

const howManyDecodableWays = (() => {
    let dat = {
        values: {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'},
        memoization: {}
    };

    const fibonacci = (num) => {
        var a = 1, b = 0, temp;

        while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    };


    const totalCombinationsOriginal = (encodedMessage) => {
        let count = 0;
        let combo = '';
        for (let i = 0; i < encodedMessage.length; i++) {
            if (encodedMessage[i+1]) {
                combo = encodedMessage[i] + encodedMessage[i+1];
                if (dat.values[combo]) {
                    count++
                }
            }
        }
        return fibonacci(count);
    };

    // const getIndexedDecodedValues = (encodedMessage) => {
    //     let indexedValues = {};
    //     let combo = '';
    //     for (let i = 0; i < encodedMessage.length; i++) {
    //         if (encodedMessage[i+1]) {
    //             combo = encodedMessage[i] + encodedMessage[i+1];
    //             if (dat.values[combo]) {
    //                 indexedValues[i] = dat.values[combo];
    //             }
    //         }
    //     }
    //     return indexedValues;
    // };
    //
    // const twoPossible = (str) => {
    //     if (str[0] <= 2) {
    //         if (str[1]) {
    //             const combo = str[0] + str[1];
    //             return dat.values[combo];
    //         }
    //     }
    //     return dat.values[str[0]];
    // };
    //
    // const checkHowMany = ( encodedMessage ) => {
    //     const count = 0;
    //     const answer = [];
    //     return dat.values[26];
    // };

    return totalCombinationsOriginal;
})();

const answer = howManyDecodableWays('222227712');

console.log(answer);