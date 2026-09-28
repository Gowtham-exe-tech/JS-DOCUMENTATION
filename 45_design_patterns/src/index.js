import { config, AppConfig } from './config.js';
import { createNotification } from './notificationFactory.js';
import { EventBus } from './eventBus.js';
import { registerListeners } from './listeners.js';
import { filterApplications } from './filterStrategies.js';
import { adaptExternalApplicant } from './userAdapter.js';
import { withLogging, withRetry } from './decorators.js';
import { createStatusCommand, CommandHistory } from './commands.js';
import { ApplicationRepository } from './applicationRepository.js';
import { ApplicationService } from './applicationService.js';
const title = text => console.log(`\n=== ${text} ===`);
title('Singleton');
console.log('same instance:', new AppConfig() === config, '| timeout:', config.get('requestTimeout'));
// wiring everything together (dependency injection)
const events = new EventBus();
const repository = new ApplicationRepository();
const service = new ApplicationService({ repository, createNotification, events, config });
const { stats, auditLog } = registerListeners(events, createNotification);
title('Adapter + Facade + Observer + Factory');
const externalUsers = [
  { full_name: 'Gowtham', email_address: 'gowtham@example.com', age_years: 21, skill_list: 'JavaScript, Node.js, MongoDB', degrees: [{ title: 'B.E', score: 8.2 }] },
  { full_name: 'Arun', email_address: 'arun@example.com', age_years: 22, skill_list: 'Python, Django', degrees: [{ title: 'B.Sc', score: 7.1 }] },
  { full_name: 'Meena', email_address: 'meena@example.com', age_years: 23, skill_list: 'JavaScript, Vue', degrees: [{ title: 'B.Tech', score: 9.0 }] }
];
// submit is wrapped with logging + retry (decorators)
const submitSafely = withLogging('submitApplication', withRetry(data => service.submit(data), 2));
for (const user of externalUsers) await submitSafely(adaptExternalApplicant(user));
title('Validation and duplicate check');
try { await service.submit(adaptExternalApplicant(externalUsers[0])); } catch (error) { console.log('rejected:', error.message); }
title('Strategy');
const all = await repository.findAll();
console.log('skill JavaScript:', filterApplications(all, 'skill', 'JavaScript').map(item => item.name));
console.log('cgpa >= 8:', filterApplications(all, 'cgpa', 8).map(item => item.name));
title('Command with undo');
const history = new CommandHistory();
await history.run(createStatusCommand(repository, 101, 'Rejected'));
console.log('after reject:', (await repository.findById(101)).status);
await history.undoLast();
console.log('after undo  :', (await repository.findById(101)).status);
title('Approve triggers observers');
await service.approve(101);
console.log('stats:', stats, '| audit:', auditLog);
