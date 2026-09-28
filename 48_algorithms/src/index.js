import assert from 'node:assert/strict';
import { linearSearch, binarySearch, lowerBound } from './searching.js';
import { bubbleSort, insertionSort, mergeSort, quickSort, rankApplicants } from './sorting.js';
import { countSteps, maxDepth, flattenSteps } from './recursion.js';
import { findDuplicates, findPairWithSum } from './twoPointers.js';
import { maxWindowSum, createRateLimiter } from './slidingWindow.js';
import { rejectBlocked, rejectBlockedSlow, findPairWithSumUnsorted } from './hashing.js';
import { shortestPath, levels, reachable } from './graphTraversal.js';
import { scheduleInterviews, greedyCoins } from './greedy.js';
import { fibonacci, minCoins, pickTasks } from './dynamic.js';
import { allValidOrders } from './backtracking.js';
const title = text => console.log(`\n=== ${text} ===`);
const time = (label, fn) => { const start = performance.now(); const result = fn(); console.log(`  ${label}: ${(performance.now() - start).toFixed(1)}ms`); return result; };
const applicants = [
  { name: 'Gowtham', cgpa: 8.2, internships: 1 },
  { name: 'Arun', cgpa: 7.1, internships: 0 },
  { name: 'Meena', cgpa: 9.0, internships: 2 },
  { name: 'Divya', cgpa: 8.2, internships: 2 },
  { name: 'Karthik', cgpa: 6.5, internships: 0 }
];
title('Sorting: rank applicants (cgpa, internships, name)');
const ranked = mergeSort(applicants, rankApplicants);
console.log(ranked.map(item => item.name).join(' > '));
// all four sorts must give the same answer
for (const sortFn of [bubbleSort, insertionSort, quickSort]) assert.deepEqual(sortFn(applicants, rankApplicants), ranked);
title('Searching: linear vs binary');
console.log('linear (name Arun) index:', linearSearch(applicants, item => item.name === 'Arun'));
// binary search needs data sorted by the key, so sort by cgpa ascending first
const byCgpa = mergeSort(applicants, (a, b) => a.cgpa - b.cgpa);
console.log('binary (cgpa 9.0) index:', binarySearch(byCgpa, 9.0, item => item.cgpa));
const firstIndex = lowerBound(byCgpa, 8, item => item.cgpa);
console.log('cgpa >= 8:', byCgpa.slice(firstIndex).map(item => item.name));
title('Recursion: nested workflow');
const workflow = { name: 'Expense', children: [{ name: 'Manager', children: [{ name: 'Finance', children: [{ name: 'MD', children: [] }] }] }, { name: 'Notify', children: [] }] };
console.log('steps:', countSteps(workflow), '| depth:', maxDepth(workflow));
console.log(flattenSteps(workflow).map(step => `${'  '.repeat(step.depth)}${step.name}`).join('\n'));
title('Two pointers');
console.log('duplicate ids:', findDuplicates([101, 103, 103, 107, 110, 110]), '| pair sum 16:', findPairWithSum([2, 4, 7, 9, 12], 16));
title('Sliding window');
console.log('max 3-minute load:', maxWindowSum([20, 25, 30, 80, 90, 100, 120, 110, 50], 3));
const allow = createRateLimiter(3, 1000);
console.log('rate limiter (3 per second):', [0, 100, 200, 300, 1150].map(time => allow('user1', time)));
title('Hashing: blocked emails');
const emails = Array.from({ length: 5000 }, (_, i) => ({ email: `user${i}@x.com` }));
const blocked = Array.from({ length: 5000 }, (_, i) => `user${i * 2}@x.com`);
const slow = time('nested scan  ', () => rejectBlockedSlow(emails, blocked));
const fast = time('set lookup   ', () => rejectBlocked(emails, blocked));
assert.deepEqual(slow, fast);
console.log('two sum with map:', findPairWithSumUnsorted([8, 3, 11, 5], 16));
title('BFS and DFS');
const org = { ceo: ['engManager', 'hrManager'], engManager: ['devA', 'devB'], hrManager: ['hrExec'], devA: [], devB: [], hrExec: [] };
console.log('shortest path:', shortestPath(org, 'ceo', 'devB').join(' -> '));
console.log('levels:', levels(org, 'ceo'));
console.log('reachable from hrManager:', [...reachable(org, 'hrManager')]);
title('Greedy');
const interviews = [{ id: 'A', start: 540, end: 600 }, { id: 'B', start: 570, end: 600 }, { id: 'C', start: 600, end: 660 }, { id: 'D', start: 660, end: 690 }, { id: 'E', start: 590, end: 700 }];
console.log('max interviews:', scheduleInterviews(interviews).map(item => item.id));
console.log('greedy coins [1,3,4] for 6:', greedyCoins([1, 3, 4], 6), '(not optimal)');
title('Dynamic programming');
console.log('dp coins [1,3,4] for 6:', minCoins([1, 3, 4], 6), '| fibonacci(50):', fibonacci(50));
console.log(pickTasks([{ name: 'review resumes', minutes: 30, value: 60 }, { name: 'call shortlisted', minutes: 20, value: 50 }, { name: 'update dashboard', minutes: 10, value: 20 }, { name: 'audit logs', minutes: 40, value: 30 }], 60));
title('Backtracking: every valid workflow order');
const orders = allValidOrders({ validate: [], manager: ['validate'], finance: ['manager'], notify: ['validate'], complete: ['finance', 'notify'] });
console.log(`${orders.length} valid orders`);
orders.forEach(order => console.log(' ', order.join(' -> ')));
title('Big O in practice: 10000 numbers');
const numbers = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1e6));
const compare = (a, b) => a - b;
time('bubble sort  O(n^2)   ', () => bubbleSort(numbers, compare));
time('merge sort   O(n log n)', () => mergeSort(numbers, compare));
time('quick sort   O(n log n)', () => quickSort(numbers, compare));
time('built-in sort          ', () => [...numbers].sort(compare));
console.log('\nAll checks passed');
