// QUEUE (FIFO): linked nodes, so dequeue is O(1). array shift() is O(n) for big queues
class QueueNode {
  constructor(value) { this.value = value; this.next = null; }
}
export class Queue {
  constructor() { this.head = null; this.tail = null; this.length = 0; }
  enqueue(value) {
    const node = new QueueNode(value);
    if (this.tail) this.tail.next = node; else this.head = node;
    this.tail = node;
    this.length++;
  }
  dequeue() {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    // when the last item is removed tail must be cleared too
    if (!this.head) this.tail = null;
    this.length--;
    return value;
  }
  isEmpty() { return this.length === 0; }
}
