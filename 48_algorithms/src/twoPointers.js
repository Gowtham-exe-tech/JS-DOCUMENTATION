// TWO POINTERS
// on a sorted array duplicates are always next to each other
export function findDuplicates(sortedIds) {
  const duplicates = new Set();
  let left = 0;
  let right = 1;
  while (right < sortedIds.length) {
    if (sortedIds[left] === sortedIds[right]) duplicates.add(sortedIds[left]);
    left++;
    right++;
  }
  return [...duplicates];
}
// pointers start at both ends and move inwards, O(n) and no extra memory
export function findPairWithSum(sortedScores, target) {
  let left = 0;
  let right = sortedScores.length - 1;
  while (left < right) {
    const sum = sortedScores[left] + sortedScores[right];
    if (sum === target) return [sortedScores[left], sortedScores[right]];
    if (sum < target) left++; else right--;
  }
  return null;
}
