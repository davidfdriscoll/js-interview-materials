class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      newNode.next = currentFirst;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.first) return null;
    const currentFirst = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = currentFirst.next;
      currentFirst.next = null;
    }
    this.length--;
    return currentFirst.val;
  }
}
