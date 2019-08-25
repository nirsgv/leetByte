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

    /**
     * breadh first search = we want to visit every node on the same level, visit every sibling node before
     * we visit a child
     * @returns {Array}
     */

    bfs() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }


    /**
     * depth first search - preorder
     * persue all nodes down vertically before visiting sibling nodes horizontally
     */
    dfsPreOrder() {
        let visited = [];
        (function preOrder(node) {
            visited.push(node);
            node.left && preOrder(node.left);
            node.right && preOrder(node.right);
        })(this.root);
        return visited;
    }

    /**
     * depth first search - postOrder
     * persue all nodes down vertically before visiting sibling nodes horizontally
     */
    dfsPostOrder() {
        let visited = [];
        (function preOrder(node) {
            node.left && preOrder(node.left);
            node.right && preOrder(node.right);
            visited.push(node);
        })(this.root);
        return visited;
    }

    /**
     * depth first search - postOrder
     * persue all nodes down vertically before visiting sibling nodes horizontally
     * inOrder - if we look at the data we get back, it is in-order, we get all the nodes in the tree
     * in their underlying order
     */
    dfsInOrder() {
        let visited = [];
        (function inOrder(node) {
            node.left && inOrder(node.left);
            visited.push(node);
            node.right && inOrder(node.right);
        })(this.root);
        return visited;
    }
}

let bst = new BinarySearchTree();
console.log(bst.insert(10));
console.log(bst.insert(6));
console.log(bst.insert(15));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.insert(20));
console.log(bst.find(11));
console.log(bst.find(12));
console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());
console.log(bst);