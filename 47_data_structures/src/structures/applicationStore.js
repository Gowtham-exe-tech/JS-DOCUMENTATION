// combines Array (ordered list), Map (id index) and Set (unique skills + blocked emails)
export class ApplicationStore {
  constructor(blockedEmails = []) {
    this.list = [];
    this.byId = new Map();
    this.skillIndex = new Map();
    this.blockedEmails = new Set(blockedEmails);
    this.seenEmails = new Set();
  }
  add(application) {
    // Set.has is O(1), scanning arrays for every new record would be O(n) each time
    if (this.blockedEmails.has(application.email)) return { ok: false, reason: 'blocked' };
    if (this.seenEmails.has(application.email)) return { ok: false, reason: 'duplicate' };
    this.seenEmails.add(application.email);
    this.list.push(application);
    this.byId.set(application.id, application);
    for (const skill of new Set(application.skills)) {
      if (!this.skillIndex.has(skill)) this.skillIndex.set(skill, new Set());
      this.skillIndex.get(skill).add(application.id);
    }
    return { ok: true };
  }
  getById(id) { return this.byId.get(id); }
  // skill -> ids index, no need to scan every application
  findBySkill(skill) { return [...(this.skillIndex.get(skill) || [])].map(id => this.byId.get(id)); }
  uniqueSkills() { return [...this.skillIndex.keys()].sort(); }
}
