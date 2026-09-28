// GRAPH (directed) using an adjacency list, used for workflow step dependencies
export class WorkflowGraph {
  constructor() { this.edges = new Map(); }
  addStep(step) { if (!this.edges.has(step)) this.edges.set(step, new Set()); }
  // "from" must finish before "to"
  addDependency(from, to) { this.addStep(from); this.addStep(to); this.edges.get(from).add(to); }
  // DFS with 3 colours: white = new, grey = in current path, black = done
  // reaching a grey node again means there is a cycle
  hasCycle() {
    const state = new Map();
    const visit = step => {
      state.set(step, 'grey');
      for (const next of this.edges.get(step)) {
        if (state.get(next) === 'grey') return true;
        if (!state.has(next) && visit(next)) return true;
      }
      state.set(step, 'black');
      return false;
    };
    for (const step of this.edges.keys()) if (!state.has(step) && visit(step)) return true;
    return false;
  }
  // Kahn's algorithm: repeatedly run steps that have zero pending dependencies
  executionOrder() {
    if (this.hasCycle()) throw new Error('Workflow has a cycle, it can never finish');
    const pending = new Map([...this.edges.keys()].map(step => [step, 0]));
    for (const targets of this.edges.values()) for (const target of targets) pending.set(target, pending.get(target) + 1);
    const ready = [...pending].filter(([, count]) => count === 0).map(([step]) => step);
    const order = [];
    while (ready.length) {
      const step = ready.shift();
      order.push(step);
      for (const next of this.edges.get(step)) {
        pending.set(next, pending.get(next) - 1);
        if (pending.get(next) === 0) ready.push(next);
      }
    }
    return order;
  }
}
