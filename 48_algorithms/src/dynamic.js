// DYNAMIC PROGRAMMING = overlapping subproblems + storing their answers
// generic memoize helper, cache key is the json of the arguments
export function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  };
}
// without memo this is O(2^n), with memo O(n)
export const fibonacci = memoize((n) =>
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2),
);
// state: best[a] = fewest coins to make amount a. transition: best[a] = 1 + best[a - coin]
export function minCoins(coins, amount) {
  const best = new Array(amount + 1).fill(Infinity);
  const choice = new Array(amount + 1).fill(0);
  // base case: amount 0 needs 0 coins
  best[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a && best[a - coin] + 1 < best[a]) {
        best[a] = best[a - coin] + 1;
        choice[a] = coin;
      }
    }
  }
  if (best[amount] === Infinity) return null;
  const used = [];
  for (let a = amount; a > 0; a -= choice[a]) used.push(choice[a]);
  return used;
}
// 0/1 knapsack: HR has limited minutes, pick review tasks with the highest total value
// table[i][t] = best value using the first i tasks with t minutes
export function pickTasks(tasks, capacity) {
  const table = Array.from({ length: tasks.length + 1 }, () =>
    new Array(capacity + 1).fill(0),
  );
  for (let i = 1; i <= tasks.length; i++) {
    const { minutes, value } = tasks[i - 1];
    for (let t = 0; t <= capacity; t++) {
      table[i][t] = table[i - 1][t];
      if (minutes <= t)
        table[i][t] = Math.max(table[i][t], table[i - 1][t - minutes] + value);
    }
  }
  // walk back through the table to find which tasks were picked
  const picked = [];
  let t = capacity;
  for (let i = tasks.length; i > 0; i--)
    if (table[i][t] !== table[i - 1][t]) {
      picked.push(tasks[i - 1].name);
      t -= tasks[i - 1].minutes;
    }
  return {
    totalValue: table[tasks.length][capacity],
    picked: picked.reverse(),
  };
}
