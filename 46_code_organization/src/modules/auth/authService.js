// fake token store for the demo, real app would use jwt + user collection
const users = new Map([
  ['admin-token', { id: 1, name: 'Admin', role: 'admin' }],
  ['user-token', { id: 2, name: 'Gowtham', role: 'user' }]
]);
export const authService = { verifyToken: token => users.get(token) || null };
