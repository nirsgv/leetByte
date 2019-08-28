class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }


    /**
     * accepts a key and a value,
     * hashes the key,
     * stores the key-value pair in the hash table array via separate chaining
     */
    set(key, value) {
        const hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
    }

    /**
     * accepts a key,
     * hashes the key
     * retreives the key-value pair in the hash table,
     * if the key isn't found, returns undefined
     */
    get(key) {
        const hashedKey = this._hash(key);
        if (this.keyMap[hashedKey]) {
            for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
                if (this.keyMap[hashedKey][i][0] === key) {
                    return this.keyMap[hashedKey][i][1];
                }
            }
        }
        return undefined;
    }

    /**
     * loops through the hash table array and returns an array of keys in the table
     */
    keys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }

    /**
     * loops through the hash table array and returns an array of values in the table
     */
    values() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
}

let hashTable = new HashTable(17);
console.log(hashTable.set('hello world','goodbye!!'));
console.log(hashTable.set('dogs','are cool'));
console.log(hashTable.set('cats','are fine'));
console.log(hashTable.set('cats','are fine'));
console.log(hashTable.set('i love','pizza'));
console.log(hashTable.get('i love'));
console.log(hashTable.get('cats'));
console.log(hashTable.get('dogs'));
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.keys().forEach((key) => console.log(hashTable.get(key))));
console.log(hashTable);