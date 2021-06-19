class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class Heap {
  // default max heap
  constructor(comparator = (a, b) => b?.priority - a?.priority) {
    this.comparator = comparator;
    this.vals = [];
  }

  parentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }
  leftChild(idx) {
    return 2 * idx + 1;
  }
  rightChild(idx) {
    return 2 * idx + 2;
  }
  swap(i1, i2) {
    [this.vals[i1], this.vals[i2]] = [this.vals[i2], this.vals[i1]];
  }
  enqueue(val, priority) {
    this.vals.push(new Node(val, priority));
    this.bubbleUp(this.vals.length - 1);
  }

  bubbleUp(idx) {
    let parentIdx = this.parentIndex(idx);
    while (this.comparator(this.vals[idx], this.vals[parentIdx]) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.parentIndex(idx);
    }
  }

  dequeue() {
    if (this.vals.length < 2) return this.vals.pop();
    this.swap(0, this.vals.length - 1);
    const extr = this.vals.pop();
    this.bubbleDown(0);
    return extr;
  }

  maxPriorityChild(idx) {
    const left = this.leftChild(idx);
    const right = this.rightChild(idx);
    if (
      !this.vals[right] ||
      this.comparator(this.vals[left], this.vals[right]) < 0
    ) {
      return left;
    } else {
      return right;
    }
  }

  bubbleDown(idx) {
    let maxChild = this.maxPriorityChild(idx);

    while (this.comparator(this.vals[idx], this.vals[maxChild]) > 0) {
      this.swap(idx, maxChild);
      idx = maxChild;
      maxChild = this.maxPriorityChild(idx);
    }
  }
}
