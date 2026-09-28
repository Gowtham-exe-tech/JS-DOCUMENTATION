// TREE: parent -> children, used for the documents folder of an applicant
export class FolderNode {
  constructor(name) { this.name = name; this.children = []; }
  add(child) { this.children.push(child); return child; }
}
// DFS recursion, depth is used to indent the output
export function printTree(node, depth = 0, lines = []) {
  lines.push(`${'  '.repeat(depth)}${node.name}`);
  for (const child of node.children) printTree(child, depth + 1, lines);
  return lines;
}
export function findPath(node, target, path = []) {
  const current = [...path, node.name];
  if (node.name === target) return current;
  for (const child of node.children) { const found = findPath(child, target, current); if (found) return found; }
  return null;
}
