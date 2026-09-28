import { Stack } from './structures/stack.js';
import { Queue } from './structures/queue.js';
import { PriorityQueue } from './structures/priorityQueue.js';
import { LruCache } from './structures/lruCache.js';
import { CircularBuffer } from './structures/circularBuffer.js';
import { WorkflowGraph } from './structures/workflowGraph.js';
import { FolderNode, printTree, findPath } from './structures/folderTree.js';
import { ApplicationStore } from './structures/applicationStore.js';
const title = text => console.log(`\n=== ${text} ===`);
title('Array + Map + Set: application store');
const store = new ApplicationStore(['spam@bad.com']);
const sample = [
  { id: 1, name: 'Gowtham', email: 'g@x.com', skills: ['JavaScript', 'Node.js', 'JavaScript'] },
  { id: 2, name: 'Arun', email: 'a@x.com', skills: ['Python', 'Django'] },
  { id: 3, name: 'Meena', email: 'm@x.com', skills: ['JavaScript', 'Vue'] },
  { id: 4, name: 'Spammer', email: 'spam@bad.com', skills: [] },
  { id: 5, name: 'Gowtham again', email: 'g@x.com', skills: [] }
];
sample.forEach(application => console.log(application.name, '->', store.add(application)));
console.log('lookup id 3:', store.getById(3).name, '| JavaScript people:', store.findBySkill('JavaScript').map(item => item.name));
console.log('unique skills:', store.uniqueSkills());
title('Stack: undo history');
const undoStack = new Stack();
['change name', 'change skills', 'change status'].forEach(action => undoStack.push(action));
console.log('undo ->', undoStack.pop(), '| next undo ->', undoStack.peek());
title('Queue: placement drive background jobs (FIFO)');
const jobs = new Queue();
for (let id = 101; id <= 103; id++) jobs.enqueue({ type: 'SEND_EMAIL', applicationId: id });
while (!jobs.isEmpty()) console.log('processing', jobs.dequeue());
title('Priority queue (min heap): workflow tasks');
const tasks = new PriorityQueue();
tasks.enqueue('Generate report', 3);
tasks.enqueue('Send email', 2);
tasks.enqueue('Payment verification', 1);
tasks.enqueue('Send another email', 2);
tasks.enqueue('Audit cleanup', 4);
const order = [];
while (tasks.size) order.push(tasks.dequeue());
console.log(order.join(' > '));
title('Graph: workflow dependencies');
const workflow = new WorkflowGraph();
workflow.addDependency('validate', 'managerApproval');
workflow.addDependency('managerApproval', 'financeApproval');
workflow.addDependency('managerApproval', 'notifyApplicant');
workflow.addDependency('financeApproval', 'complete');
workflow.addDependency('notifyApplicant', 'complete');
console.log('cycle?', workflow.hasCycle(), '| order:', workflow.executionOrder().join(' -> '));
workflow.addDependency('complete', 'validate');
console.log('after adding complete -> validate, cycle?', workflow.hasCycle());
try { workflow.executionOrder(); } catch (error) { console.log('error:', error.message); }
title('Tree: documents folder');
const root = new FolderNode('Documents');
const certificates = root.add(new FolderNode('Certificates'));
certificates.add(new FolderNode('Degree'));
certificates.add(new FolderNode('Course'));
root.add(new FolderNode('Projects')).add(new FolderNode('Workflow Engine'));
console.log(printTree(root).join('\n'));
console.log('path:', findPath(root, 'Workflow Engine').join(' / '));
title('LRU cache (Map + doubly linked list)');
const cache = new LruCache(3);
['a', 'b', 'c'].forEach(key => cache.set(key, key.toUpperCase()));
cache.get('a');
// b is now the least recently used, so it is evicted
cache.set('d', 'D');
console.log('keys (newest first):', cache.keys(), '| b ->', cache.get('b'), '| hits/misses:', cache.hits, cache.misses);
title('Circular buffer: last 5 request counts');
const metrics = new CircularBuffer(5);
[10, 20, 30, 40, 50, 60, 70].forEach(value => metrics.push(value));
console.log(metrics.toArray());
title('Speed check: array scan vs Map lookup (100000 records)');
const many = Array.from({ length: 100000 }, (_, i) => ({ id: i, name: `user${i}` }));
const index = new Map(many.map(item => [item.id, item]));
let start = performance.now();
for (let i = 0; i < 1000; i++) many.find(item => item.id === 99999);
const arrayTime = performance.now() - start;
start = performance.now();
for (let i = 0; i < 1000; i++) index.get(99999);
console.log(`array find x1000: ${arrayTime.toFixed(1)}ms | map get x1000: ${(performance.now() - start).toFixed(2)}ms`);
