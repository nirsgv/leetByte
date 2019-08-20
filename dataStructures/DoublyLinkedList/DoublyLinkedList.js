class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
console.log(list.push('Hello'));
console.log(list.push('Goodbye'));