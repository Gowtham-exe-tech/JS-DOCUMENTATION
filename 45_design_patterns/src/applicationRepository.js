// REPOSITORY: only place that knows how data is stored (Map here, mongodb in real life)
export class ApplicationRepository {
  constructor() { this.store = new Map(); this.nextId = 101; }
  async create(data) {
    const application = { id: this.nextId++, status: 'Pending', createdAt: new Date().toISOString(), ...data };
    this.store.set(application.id, application);
    return { ...application };
  }
  async findById(id) {
    const found = this.store.get(id);
    return found ? { ...found } : null;
  }
  async findByEmail(email) {
    for (const application of this.store.values()) if (application.email === email) return { ...application };
    return null;
  }
  async findAll() { return [...this.store.values()].map(item => ({ ...item })); }
  async updateStatus(id, status) {
    const found = this.store.get(id);
    if (!found) return null;
    found.status = status;
    return { ...found };
  }
}
