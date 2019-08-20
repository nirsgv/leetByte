class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * adds a new node to the end of the linked list
     * @param val {*} value to add to the linked list
     * @returns {SinglyLinkedList}
     */

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }


    /**
     * removes a node from the end of the linked list
     * @returns {*} node that was removed from the linked list
     */

    pop() {
        if (!this.head) return undefined;
        let frontRunnerPointer = this.head;
        let newtail = frontRunnerPointer;

        while (frontRunnerPointer.next) {
            newtail = frontRunnerPointer;
            frontRunnerPointer = frontRunnerPointer.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length --;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return frontRunnerPointer;
    }


    /**
     * removes a new node from the beginning of the linked list
     * @returns {*} node that was removed from the linked list
     */

    shift() {
        if (!this.head) return undefined;
        let headHolder = this.head;
        this.head = this.head.next;
        this.length --;
        if (this.length === 0) {
            this.tail = null;
        }
        return headHolder;
    }


    /**
     * adds a new node to the beginning of the linked list
     * @param val {*}
     * @returns {SinglyLinkedList}
     */

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }


    /**
     * retrieves a node by it's position in the linked list
     * @param index {Number} - the position on the linked list
     * @returns {Node}
     */

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let i = 0;
        let current = this.head;
        while (current) {
            if (index === i) return current;
            current = current.next;
            i++;
        }
        return null;
    }


    /**
     * changes the value of a node based on it's position on the linked list
     * @param index {number} - the position on the linked list
     * @param val {*} - the value to add to the linked list
     */

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }


    /**
     * adds a node to the linked list at a specific position
     * @param index {number} - the position on the linked list
     * @param val {*} - the value to add to the linked list
     */

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) {
            return !!this.push(val);
        } else if (index === 0) {
            return !!this.unshift(val);
        }
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let placecholderVariable = previousNode.next;
        previousNode.next = newNode;
        newNode.next = placecholderVariable;

        this.length++;
        return true;
    }


    /**
     * removes a node from the linked list at a specific position
     * @param index {Number} - the position on the linked list
     * @returns {*}
     */

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let previousNode = this.get(index - 1);
        let removedNode = this.get(index);
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }


    /**
     *
     * @returns {SinglyLinkedList}
     */

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    /**
     * prints the content of the linked list as an array (which is ordered correctly)
     */
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let list = new SinglyLinkedList();
console.log(list.push('Hello'));
console.log(list.push('Goodbye'));
console.log(list.push('!'));
console.log(list.push('Pop it off'));
console.log(list.pop());
console.log(list.shift());
console.log(list.unshift('Hello (unshifted value) again!'));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.set(1,'Set to something else!'));
console.log(list.get(1));
console.log(list.insert(1,'inserted'));
console.log(list.insert(0,'inserted for first'));
console.log(list.insert(10,'inserted for error'));
console.log(list.remove(1));
console.log(list.print());
list.reverse();
console.log(list.print());
console.log(list);
//list.traverse();