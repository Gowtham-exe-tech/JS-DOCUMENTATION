// OBSERVER: one event, many listeners
export class EventBus {
  constructor() { this.listeners = new Map(); }
  on(event, callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
    // return unsubscribe function so listeners can be removed later
    return () => this.off(event, callback);
  }
  off(event, callback) {
    const list = this.listeners.get(event) || [];
    this.listeners.set(event, list.filter(item => item !== callback));
  }
  emit(event, data) {
    const list = this.listeners.get(event) || [];
    for (const callback of list) {
      // try/catch so one broken listener does not stop the others
      try { callback(data); } catch (error) { console.error(`Listener failed for ${event}:`, error.message); }
    }
  }
}
// in-memory only, with many servers we would need a message broker (redis, rabbitmq)
export const events = new EventBus();
