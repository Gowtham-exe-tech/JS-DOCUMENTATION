// O(n), fine for small lists and works on unsorted data
export function linearSearch(items, predicate) {
  for (let i = 0; i < items.length; i++) if (predicate(items[i])) return i;
  return -1;
}
// O(log n), but the array MUST be sorted by the same key
export function binarySearch(sorted, target, getKey = value => value) {
  let left = 0;
  let right = sorted.length - 1;
  while (left <= right) {
    // this form avoids overflow in other languages, harmless in js
    const middle = left + Math.floor((right - left) / 2);
    const key = getKey(sorted[middle]);
    if (key === target) return middle;
    if (key < target) left = middle + 1; else right = middle - 1;
  }
  return -1;
}
// first index whose key is >= target, used for range queries like "cgpa >= 8"
export function lowerBound(sorted, target, getKey = value => value) {
  let left = 0;
  let right = sorted.length;
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (getKey(sorted[middle]) < target) left = middle + 1; else right = middle;
  }
  return left;
}
