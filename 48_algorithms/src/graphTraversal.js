// BFS uses a queue and goes level by level, so the first time we reach a node is the shortest path (unweighted graph)
export function shortestPath(graph, start, goal) {
  const queue = [start];
  const parent = new Map([[start, null]]);
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    if (node === goal) {
      const path = [];
      for (let current = goal; current !== null; current = parent.get(current)) path.unshift(current);
      return path;
    }
    for (const next of graph[node] || []) {
      if (!parent.has(next)) { parent.set(next, node); queue.push(next); }
    }
  }
  return null;
}
// BFS by level, e.g. company hierarchy printed level by level
export function levels(graph, start) {
  const result = [];
  const visited = new Set([start]);
  let current = [start];
  while (current.length) {
    result.push(current);
    const next = [];
    for (const node of current) for (const neighbor of graph[node] || []) if (!visited.has(neighbor)) { visited.add(neighbor); next.push(neighbor); }
    current = next;
  }
  return result;
}
// DFS goes deep first. visited set is a must, otherwise cycles cause infinite recursion
export function reachable(graph, start, visited = new Set()) {
  if (visited.has(start)) return visited;
  visited.add(start);
  for (const next of graph[start] || []) reachable(graph, next, visited);
  return visited;
}
