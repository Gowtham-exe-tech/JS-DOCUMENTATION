// HASHING (Set / Map) turns O(n * m) checks into O(n + m)
export function rejectBlocked(applications, blockedEmails) {
  const blocked = new Set(blockedEmails);
  return applications.filter(application => !blocked.has(application.email));
}
// same nested loop version, only kept to compare speed in the benchmark
export function rejectBlockedSlow(applications, blockedEmails) {
  return applications.filter(application => !blockedEmails.some(email => email === application.email));
}
// two sum on unsorted data with a Map: remember what we have seen
export function findPairWithSumUnsorted(numbers, target) {
  const seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const needed = target - numbers[i];
    if (seen.has(needed)) return [seen.get(needed), i];
    seen.set(numbers[i], i);
  }
  return null;
}
