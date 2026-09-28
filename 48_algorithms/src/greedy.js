// GREEDY: pick the meeting that ends earliest, then continue with meetings that start after it
// this is proven to be optimal for interval scheduling (it is NOT optimal for every problem)
// times are in minutes from midnight
export function scheduleInterviews(interviews) {
  const sorted = [...interviews].sort((a, b) => a.end - b.end);
  const chosen = [];
  let lastEnd = -Infinity;
  for (const interview of sorted) {
    if (interview.start >= lastEnd) { chosen.push(interview); lastEnd = interview.end; }
  }
  return chosen;
}
// greedy coin change: always take the biggest coin. works for normal money, fails for odd coin sets
export function greedyCoins(coins, amount) {
  const sorted = [...coins].sort((a, b) => b - a);
  const used = [];
  for (const coin of sorted) while (amount >= coin) { amount -= coin; used.push(coin); }
  return amount === 0 ? used : null;
}
