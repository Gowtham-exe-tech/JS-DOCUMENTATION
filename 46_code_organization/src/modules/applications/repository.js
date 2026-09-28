// repository: only file that talks to the database (Map now, mongoose later)
export function createApplicationRepository() {
  const store = new Map();
  // second index so email duplicate check is O(1) and not a full scan
  const emailIndex = new Map();
  let nextId = 1;
  return {
    async create(data) {
      const application = { id: nextId++, createdAt: new Date().toISOString(), ...data };
      store.set(application.id, application);
      emailIndex.set(application.email, application.id);
      return { ...application };
    },
    async findById(id) { const found = store.get(id); return found ? { ...found } : null; },
    async findByEmail(email) { const id = emailIndex.get(email); return id ? { ...store.get(id) } : null; },
    async findMany({ status, skill }) {
      let items = [...store.values()];
      if (status) items = items.filter(item => item.status === status);
      if (skill) items = items.filter(item => item.skills.includes(skill));
      // newest first, in a real db this would be ORDER BY createdAt DESC
      return items.sort((a, b) => b.id - a.id).map(item => ({ ...item }));
    },
    async updateStatus(id, status) { const found = store.get(id); found.status = status; return { ...found }; }
  };
}
