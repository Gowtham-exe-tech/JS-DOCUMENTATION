// CIRCULAR BUFFER: fixed memory, keeps only the latest N values
export class CircularBuffer {
  constructor(capacity) { this.capacity = capacity; this.data = new Array(capacity); this.writeIndex = 0; this.count = 0; }
  push(value) {
    this.data[this.writeIndex] = value;
    // modulo makes the index wrap to 0 and overwrite the oldest value
    this.writeIndex = (this.writeIndex + 1) % this.capacity;
    if (this.count < this.capacity) this.count++;
  }
  // oldest to newest
  toArray() {
    const start = this.count < this.capacity ? 0 : this.writeIndex;
    return Array.from({ length: this.count }, (_, i) => this.data[(start + i) % this.capacity]);
  }
}
