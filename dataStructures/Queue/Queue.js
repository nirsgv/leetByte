class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        let tempNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }

        this.first = this.first.next;
        tempNode.next = null;
        this.size--;
        return tempNode.val;
    }
}

// first going in, first going out
let queue = new Queue();
console.log(queue.enqueue('1'));
console.log(queue.enqueue('2'));
console.log(queue.enqueue('3'));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.enqueue('1'));
console.log(queue.dequeue());
console.log(queue);