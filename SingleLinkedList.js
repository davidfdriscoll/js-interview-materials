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
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    let tail = this.head,
      pre = null;
    while (tail !== this.tail) {
      pre = tail;
      tail = tail.next;
    }
    if (pre) {
      pre.next = null;
      this.tail = pre;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return tail;
  }
  shift() {
    if (!this.head) return;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (!this.head) this.tail = null;
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return list;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) currentNode = currentNode.next;
    return currentNode;
  }
  set(val, index) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      const newNode = new Node(val);
      const newPreviousNode = this.get(index - 1);
      newNode.next = newPreviousNode.next;
      newPreviousNode.next = newNode;
    }
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === length - 1) return this.pop(index);
    if (index === 0) return this.shift(index);
    const currentPrevious = this.get(index - 1);
    const current = this.get(index);
    currentPrevious.next = current.next;
    this.length--;
    return current;
  }
  reverse() {
    if (this.length < 2) return;

    let oldPrevious = this.head;
    let current = oldPrevious.next;
    let oldNext = current.next;
    oldPrevious.next = null;

    this.tail = this.head;

    while (oldNext) {
      oldNext = current.next;
      current.next = oldPrevious;
      oldPrevious = current;
      current = oldNext;
    }
    this.head = oldPrevious;
    return this;
  }
}
