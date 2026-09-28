// PRIORITY QUEUE using a min heap stored in an array
// for index i: parent = (i - 1) >> 1, children = 2i + 1 and 2i + 2
// insertion order is used as a tiebreaker so same priority jobs stay FIFO
export class PriorityQueue {
  constructor() { this.heap = []; this.counter = 0; }
  get size() { return this.heap.length; }
  isHigher(a, b) { return a.priority < b.priority || (a.priority === b.priority && a.order < b.order); }
  swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
  enqueue(value, priority) {
    this.heap.push({ value, priority, order: this.counter++ });
    this.bubbleUp(this.heap.length - 1);
  }
  dequeue() {
    if (!this.heap.length) return undefined;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length) { this.heap[0] = last; this.bubbleDown(0); }
    return top.value;
  }
  bubbleUp(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (!this.isHigher(this.heap[index], this.heap[parent])) break;
      this.swap(index, parent);
      index = parent;
    }
  }
  bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let best = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < length && this.isHigher(this.heap[left], this.heap[best])) best = left;
      if (right < length && this.isHigher(this.heap[right], this.heap[best])) best = right;
      if (best === index) break;
      this.swap(index, best);
      index = best;
    }
  }
}
