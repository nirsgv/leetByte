class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }


    /**
     *
     * @param {Number} - val - a number value to insert in a sorted manner to the binary search tree.
     * @returns {*}
     */
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) return this.root = newNode;
        let node = this.root;

        return (function deepInsert(val, node) {
            if (val < node.val) {
                return node.left ? deepInsert(val, node.left) : node.left = newNode;
            } else if (val > node.val) {
                return node.right ? deepInsert(val, node.right) : node.right = newNode;
            } else {
                return undefined;
            }
        })(val, node);
    }


    /**
     *
     * @param val - {Number} - a number value to search for in the binary search tree.
     * @returns {*} - returns the found node, or null if not found
     */
    find(val) {
        if (!this.root) return undefined;
        let node = this.root;

        return (function deepFind(val, node) {
            if (node.val === val) return node;
            if (val < node.val) {
                return node.left ? deepFind(val, node.left) : null;
            } else {
                return node.right ? deepFind(val, node.right) : null;
            }
        })(val, node);
    }
}

let bst = new BinarySearchTree();
console.log(bst.insert(100));
console.log(bst.insert(10));
console.log(bst.insert(110));
console.log(bst.insert(11));
console.log(bst.insert(8));
console.log(bst.insert(9));
console.log(bst.insert(7));
console.log(bst.insert(15));
console.log(bst.find(11));
console.log(bst.find(12));
console.log(bst);