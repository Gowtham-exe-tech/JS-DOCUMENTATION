import { buildApplication, STATUS } from './model.js';
import { validateApplication } from './validator.js';
import { conflict, notFound } from '../../utils/httpError.js';
// pure business rule: which status changes are allowed
export function canTransition(from, to) {
  return from === STATUS.PENDING && (to === STATUS.APPROVED || to === STATUS.REJECTED);
}
// dependencies come from outside (dependency injection), so tests can send fakes
export function createApplicationService({ repository, notificationService, config }) {
  async function getById(id) {
    const application = await repository.findById(id);
    if (!application) throw notFound(`Application ${id} not found`);
    return application;
  }
  async function decide(id, status) {
    const application = await getById(id);
    if (!canTransition(application.status, status)) throw conflict(`Cannot change ${application.status} application to ${status}`);
    const updated = await repository.updateStatus(id, status);
    await notificationService.sendDecision(updated);
    return updated;
  }
  return {
    getById,
    async create(input) {
      validateApplication(input, config);
      const data = buildApplication(input);
      if (await repository.findByEmail(data.email)) throw conflict('Application already exists for this email');
      const application = await repository.create(data);
      await notificationService.sendConfirmation(application);
      return application;
    },
    list: filters => repository.findMany(filters),
    approve: id => decide(id, STATUS.APPROVED),
    reject: id => decide(id, STATUS.REJECTED)
  };
}
