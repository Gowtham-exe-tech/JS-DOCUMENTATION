// all sorts take a comparator like array.sort: negative = a first, positive = b first
// bubble sort O(n^2), only for learning. the swapped flag stops early on sorted input
export function bubbleSort(items, compare) {
  const result = [...items];
  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < result.length - i - 1; j++) {
      if (compare(result[j], result[j + 1]) > 0) { [result[j], result[j + 1]] = [result[j + 1], result[j]]; swapped = true; }
    }
    if (!swapped) break;
  }
  return result;
}
// insertion sort O(n^2) worst case but fast for nearly sorted data
export function insertionSort(items, compare) {
  const result = [...items];
  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;
    while (j >= 0 && compare(result[j], current) > 0) { result[j + 1] = result[j]; j--; }
    result[j + 1] = current;
  }
  return result;
}
// merge sort O(n log n), stable, needs extra memory
export function mergeSort(items, compare) {
  if (items.length <= 1) return items;
  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle), compare);
  const right = mergeSort(items.slice(middle), compare);
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    // <= 0 keeps equal items in original order (this is what makes it stable)
    if (compare(left[i], right[j]) <= 0) merged.push(left[i++]); else merged.push(right[j++]);
  }
  return merged.concat(left.slice(i), right.slice(j));
}
// quick sort average O(n log n), worst O(n^2) with a bad pivot. middle element as pivot avoids the sorted-input worst case
export function quickSort(items, compare) {
  if (items.length <= 1) return items;
  const pivot = items[Math.floor(items.length / 2)];
  const smaller = [];
  const equal = [];
  const larger = [];
  for (const item of items) {
    const result = compare(item, pivot);
    if (result < 0) smaller.push(item); else if (result > 0) larger.push(item); else equal.push(item);
  }
  return [...quickSort(smaller, compare), ...equal, ...quickSort(larger, compare)];
}
// real life comparator: highest cgpa first, then more internships, then name
export const rankApplicants = (a, b) => b.cgpa - a.cgpa || b.internships - a.internships || a.name.localeCompare(b.name);
