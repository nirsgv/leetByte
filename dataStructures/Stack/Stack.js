class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let tempNode = this.first;
            newNode.next = tempNode;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let tempNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = tempNode.next;
        this.size--;
        return tempNode.val;
    }
}

// last going in, first going out
let stack = new Stack();
console.log(stack.push('1'));
console.log(stack.push('2'));
console.log(stack.push('3'));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);