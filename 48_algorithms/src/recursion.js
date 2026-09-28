// RECURSION on a nested workflow, we do not know how deep it goes
// base case: a step with no children
export function countSteps(step) {
  return 1 + step.children.reduce((total, child) => total + countSteps(child), 0);
}
export function maxDepth(step) {
  if (step.children.length === 0) return 1;
  return 1 + Math.max(...step.children.map(maxDepth));
}
// flatten to a list with the depth, useful for showing indented steps in the ui
export function flattenSteps(step, depth = 0, result = []) {
  result.push({ name: step.name, depth });
  for (const child of step.children) flattenSteps(child, depth + 1, result);
  return result;
}
