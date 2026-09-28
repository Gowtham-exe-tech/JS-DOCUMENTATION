// SLIDING WINDOW
// biggest total of any `size` consecutive minutes. reuse the last sum instead of adding again
export function maxWindowSum(numbers, size) {
  if (numbers.length < size) return null;
  let windowSum = 0;
  for (let i = 0; i < size; i++) windowSum += numbers[i];
  let best = windowSum;
  for (let i = size; i < numbers.length; i++) {
    windowSum += numbers[i] - numbers[i - size];
    best = Math.max(best, windowSum);
  }
  return best;
}
// real use: rate limiter, allows only `limit` requests in the last `windowMs`
// now is a parameter so it can be tested without waiting
export function createRateLimiter(limit, windowMs) {
  const hits = new Map();
  return function isAllowed(userId, now = Date.now()) {
    const window = hits.get(userId) || { times: [], start: 0 };
    // drop timestamps that slid out of the window
    while (window.start < window.times.length && window.times[window.start] <= now - windowMs) window.start++;
    hits.set(userId, window);
    if (window.times.length - window.start >= limit) return false;
    window.times.push(now);
    return true;
  };
}
