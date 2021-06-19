class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return;
    const oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    return oldFirst.val;
  }
}
