class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
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
  pop() {
    if (!this.head) return;
    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
    }
    currentTail.prev = null;
    this.length--;
    return currentTail;
  }
  shift() {
    if (!this.head) return;
    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
    }
    currentHead.next = null;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return list;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode;
    if (index <= this.length / 2) {
      currentNode = this.head;
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
  set(val, index) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = newNode;
    newNode.prev = prev;
    next.prev = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
