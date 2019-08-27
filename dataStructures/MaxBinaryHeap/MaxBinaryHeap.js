
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }


    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }


    /**
     *
     * @param index
     * @returns {number}
     */
    calcParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }


    /**
     *
     * @param index
     * @returns {Array}
     */
    calcChildIndex(index, list) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        return [leftChild <= list.length ? leftChild : null, rightChild <= list.length ? rightChild : null];
    }


    bubbleUp(){
        let parentIndex, tempHolder, that = this;
        (function recurSwap(list, index) {
            parentIndex = that.calcParentIndex(index);
            if (list[index] > list[parentIndex]) {
                //swap those two values
                tempHolder = list[index];
                list[index] = list[parentIndex];
                list[parentIndex] = tempHolder;
                return recurSwap(list, parentIndex);
            } else {
                return list;
            }

        })(this.values, this.values.length - 1);
    }





    isChildIndexInBound(childIndex, len) {
        return childIndex <= len;
    }

    getGreaterChildIndex(list, leftChildIndex, rightChildIndex) {
        return list[leftChildIndex] > list[rightChildIndex] ? leftChildIndex : rightChildIndex;
    }


    /**
     *
     * @returns {Node}
     */
    extractMax() {
        const max = this.values[0];
        // the last node is popped and is to replace to head node
        const end = this.values.pop();
        if (this.values.length > 0) {
            // replace the head node with the last value on the heap
            this.values[0] = end;
            // trickle down the head node which now contains the last added node
            this.sinkDown();
        }
        // return the previous head node which is now only pointed by the max variable
        return max;
    }


    /**
     *
     * @param headIndex
     * @returns {*}
     */
    sinkDown(headIndex = 0) {
        const length = this.values.length;
        const headElement = this.values[headIndex];
        const leftChildIdx = 2 * headIndex + 1;
        const rightChildIdx = 2 * headIndex + 2;
        const isLeftChildBiggerThanHead = this.values[leftChildIdx] > this.values[headIndex] && leftChildIdx < length;
        const isRightChildBiggerThanHead = this.values[rightChildIdx] > this.values[headIndex] && rightChildIdx < length;
        const isLeftChildBiggerThanRightChild = (this.values[leftChildIdx] ? this.values[leftChildIdx] : 0) >
                                                (this.values[rightChildIdx] ? this.values[rightChildIdx] : 0);
        let childElement;

        if (isLeftChildBiggerThanRightChild) {
            if (isLeftChildBiggerThanHead) {
                // swap the parent with the left child
                childElement = this.values[leftChildIdx];
                this.values[headIndex] = childElement;
                this.values[leftChildIdx] = headElement;
                return this.sinkDown(leftChildIdx);
            } else {
                return this;
            }
        } else {
            if (isRightChildBiggerThanHead) {
                // swap the parent with the right child
                childElement = this.values[rightChildIdx];
                this.values[headIndex] = childElement;
                this.values[rightChildIdx] = headElement;
                return this.sinkDown(rightChildIdx);
            } else {
                return this;
            }
        }
    }

}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(12);
maxHeap.insert(41);
maxHeap.insert(18);
maxHeap.insert(39);
maxHeap.insert(27);
maxHeap.insert(33);
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(1);
maxHeap.insert(13);
maxHeap.insert(16);
maxHeap.insert(20);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
maxHeap.insert(5);
maxHeap.insert(55);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
maxHeap.insert(555);
maxHeap.insert(5555);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap);