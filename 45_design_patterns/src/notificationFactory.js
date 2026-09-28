// FACTORY: caller only says the type, factory decides how to build it
const creators = {
  email: () => ({ channel: 'email', send: (to, message) => `[EMAIL -> ${to}] ${message}` }),
  sms: () => ({ channel: 'sms', send: (to, message) => `[SMS -> ${to}] ${message}` }),
  push: () => ({ channel: 'push', send: (to, message) => `[PUSH -> ${to}] ${message}` })
};
export function createNotification(type) {
  const creator = creators[type];
  if (!creator) throw new Error(`Unsupported notification type: ${type}`);
  return creator();
}
// new channel can be added without touching the callers
export function registerNotification(type, creator) { creators[type] = creator; }
