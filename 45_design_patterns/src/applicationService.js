// SERVICE + FACADE: controller calls submit() and this hides all the steps
// DEPENDENCY INJECTION: everything comes through the constructor so tests can pass fakes
export class ApplicationService {
  constructor({ repository, createNotification, events, config }) {
    this.repository = repository;
    this.createNotification = createNotification;
    this.events = events;
    this.config = config;
  }
  validate(data) {
    if (!data.name) throw new Error('Name is required');
    if (!data.email || !data.email.includes('@')) throw new Error('Valid email is required');
    if (data.age < this.config.get('minAge') || data.age > this.config.get('maxAge')) throw new Error('Age is out of range');
  }
  async submit(data) {
    this.validate(data);
    const exists = await this.repository.findByEmail(data.email);
    if (exists) throw new Error('Application already exists');
    const application = await this.repository.create(data);
    // service does not send mails itself, it just announces the event
    this.events.emit('applicationSubmitted', application);
    return application;
  }
  async approve(id) {
    const application = await this.repository.findById(id);
    if (!application) throw new Error('Application not found');
    if (application.status !== 'Pending') throw new Error('Only pending applications can be approved');
    const updated = await this.repository.updateStatus(id, 'Approved');
    this.events.emit('applicationApproved', updated);
    return updated;
  }
}
