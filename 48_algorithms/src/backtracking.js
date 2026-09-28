// BACKTRACKING: choose -> explore -> undo
// finds every valid order to run workflow steps when some steps need others first
export function allValidOrders(prerequisites) {
  const steps = Object.keys(prerequisites);
  const results = [];
  const path = [];
  const used = new Set();
  function explore() {
    if (path.length === steps.length) { results.push([...path]); return; }
    for (const step of steps) {
      if (used.has(step)) continue;
      // prune early: skip if any prerequisite has not run yet
      if (!prerequisites[step].every(required => used.has(required))) continue;
      // choose
      used.add(step);
      path.push(step);
      explore();
      // undo
      path.pop();
      used.delete(step);
    }
  }
  explore();
  return results;
}
