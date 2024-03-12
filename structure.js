
/**
 * Heap Tree Structure Impl in JS 
 * for requirements graph
 */
class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  /**
  * Insert a new value into the heap.
  * @param value - value to push into heap
  */
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  /**
  * Remove and return highest priority value from the heap
  * @return value - highest priority value in heap
  */
  remove() {
    const value = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown(0);
    return value;
  }

  /**
  * Sift values of the heap up to correctly place and order new items
  * @param index - the index at which to start the operation
  */
  siftUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.comparator(this.heap[index], this.heap[parentIndex]) > 0) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.siftUp(parentIndex);
    }
  }

  /**
  * Sift values of the heap down to correctly place and order new items
  * @param index - the index at which to start the operation
  */
  siftDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestChildIndex = index;
    if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[largestChildIndex]) > 0) {
      largestChildIndex = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[largestChildIndex]) > 0) {
      largestChildIndex = rightChildIndex;
    }
    if (largestChildIndex !== index) {
      [this.heap[index], this.heap[largestChildIndex]] = [this.heap[largestChildIndex], this.heap[index]];
      this.siftDown(largestChildIndex);
    }
  }

  /**
  * Returns the parent of the node at given index
  * @param index - index of node that has parent
  * @return index - parent index of given index
  */
  getParent(index) {
    
  }
}
