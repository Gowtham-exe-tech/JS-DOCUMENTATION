// LRU CACHE = Map (fast lookup) + doubly linked list (fast reorder)
// head is most recently used, tail is the next one to be evicted
class CacheNode {
  constructor(key, value) { this.key = key; this.value = value; this.previous = null; this.next = null; }
}
export class LruCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.hits = 0;
    this.misses = 0;
  }
  detach(node) {
    if (node.previous) node.previous.next = node.next; else this.head = node.next;
    if (node.next) node.next.previous = node.previous; else this.tail = node.previous;
    node.previous = null;
    node.next = null;
  }
  attachToFront(node) {
    node.next = this.head;
    if (this.head) this.head.previous = node;
    this.head = node;
    if (!this.tail) this.tail = node;
  }
  get(key) {
    const node = this.map.get(key);
    if (!node) { this.misses++; return undefined; }
    this.hits++;
    // moving to the front marks it as recently used
    this.detach(node);
    this.attachToFront(node);
    return node.value;
  }
  set(key, value) {
    if (this.map.has(key)) { this.detach(this.map.get(key)); this.map.delete(key); }
    else if (this.map.size >= this.capacity) { const oldest = this.tail; this.detach(oldest); this.map.delete(oldest.key); }
    const node = new CacheNode(key, value);
    this.map.set(key, node);
    this.attachToFront(node);
  }
  keys() { const result = []; for (let node = this.head; node; node = node.next) result.push(node.key); return result; }
}
