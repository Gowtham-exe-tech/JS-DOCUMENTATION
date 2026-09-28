import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';
import { canTransition } from '../src/modules/applications/service.js';
import { STATUS } from '../src/modules/applications/model.js';
const { server, notificationService } = createApp();
await new Promise(resolve => server.listen(0, resolve));
const base = `http://localhost:${server.address().port}`;
const call = async (method, path, token, body) => {
  const res = await fetch(base + path, { method, headers: { 'Content-Type': 'application/json', ...(token && { Authorization: `Bearer ${token}` }) }, body: body && JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
};
const check = (name, fn) => fn().then(() => console.log(`  pass - ${name}`));
const valid = { name: 'Gowtham', email: 'Gowtham@Example.com', age: 21, skills: ['JavaScript', 'Node.js', 'JavaScript'] };
console.log('Running tests');
await check('pure rule: rejected cannot be approved', async () => assert.equal(canTransition(STATUS.REJECTED, STATUS.APPROVED), false));
await check('401 without token', async () => assert.equal((await call('GET', '/applications')).status, 401));
await check('400 with all validation errors', async () => {
  const res = await call('POST', '/applications', 'user-token', { name: '', email: 'bad', age: 5 });
  assert.equal(res.status, 400);
  assert.equal(res.body.details.length, 3);
});
await check('201 create + email normalised + skills unique', async () => {
  const res = await call('POST', '/applications', 'user-token', valid);
  assert.equal(res.status, 201);
  assert.equal(res.body.email, 'gowtham@example.com');
  assert.deepEqual(res.body.skills, ['JavaScript', 'Node.js']);
});
await check('409 duplicate email', async () => assert.equal((await call('POST', '/applications', 'user-token', valid)).status, 409));
await check('403 normal user cannot list', async () => assert.equal((await call('GET', '/applications', 'user-token')).status, 403));
await check('404 unknown application', async () => assert.equal((await call('GET', '/applications/999', 'admin-token')).status, 404));
await check('approve works once, second time is 409', async () => {
  assert.equal((await call('PATCH', '/applications/1/approve', 'admin-token')).body.status, 'Approved');
  assert.equal((await call('PATCH', '/applications/1/approve', 'admin-token')).status, 409);
});
await check('pagination + filter', async () => {
  for (let i = 0; i < 6; i++) await call('POST', '/applications', 'user-token', { name: `User ${i}`, email: `u${i}@x.com`, age: 20 + i, skills: ['Vue'] });
  const res = await call('GET', '/applications?page=2&limit=3&skill=Vue', 'admin-token');
  assert.equal(res.body.total, 6);
  assert.equal(res.body.data.length, 3);
  assert.equal(res.body.totalPages, 2);
});
await check('notifications sent through the service layer', async () => assert.ok(notificationService.sent.length >= 8));
await check('invalid json gives 400 not a crash', async () => {
  const res = await fetch(base + '/applications', { method: 'POST', headers: { Authorization: 'Bearer user-token' }, body: '{bad' });
  assert.equal(res.status, 400);
});
server.close();
console.log('All tests passed');
