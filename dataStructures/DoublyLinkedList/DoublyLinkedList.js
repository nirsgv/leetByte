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

    /**
     * adds a node at the end of the linked list
     * @param val
     * @returns {DoublyLinkedList}
     */
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * removes a node from the end of the linked list
     * @returns {*}
     */
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    /**
     * removes a node from the beginning of the linked list
     * @returns {*}
     */
    shift() {
        if (!this.head) return undefined;
        let shiftedNode = this.head;
        let nextNode = this.head.next;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nextNode;
            nextNode.prev = null;
            shiftedNode. next = null;
        }
        this.length--;
        return shiftedNode;
    }

    /**
     * adds a node to the beginning of the doubly linked list
     * @param val
     * @returns {DoublyLinkedList}
     */

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) this.push(newNode);
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    /**
     * accessing a node in a doubly linked list by it's position
     * @param index {Number} - the position on the linked list
     * @returns {*}
     */

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let i, current;

        if (index <= (this.length / 2)) {
            current = this.head;
            i = 0;
            while (i !== index) {
                current = current.next;
                i++;
            }
        } else {
            current = this.tail;
            i = this.length -1;
            while (i !== index) {
                current = current.prev;
                i--;
            }
        }
        return current;
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
     *
     * @param index {number} - the position on the linked list
     * @param val {*} - the value to add to the linked list
     * @returns {*}
     */
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let beforeNode = this.get(index - 1),
            newNode = new Node(val),
            afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.next = afterNode;
        newNode.prev = beforeNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    /**
     *
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index),
            beforeNode = removedNode.prev,
            afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
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
}

let list = new DoublyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push('Hello'));
console.log(list.push('Goodbye'));
console.log(list.pop());
console.log(list.shift());
console.log(list.unshift('00000'));
console.log(list.length);
console.log(list.get(0));
console.log(list.get(3));
console.log(list.insert(0, 'kjsdnbvoinwvoijvwijmcwdjkkdwkkk 12'));
console.log(list.print());
console.log(list.remove(4));
console.log(list.print());
