// COMMAND: an admin action is an object with execute and undo
export function createStatusCommand(repository, applicationId, newStatus) {
  let previousStatus = null;
  return {
    name: `set ${applicationId} to ${newStatus}`,
    async execute() {
      const application = await repository.findById(applicationId);
      if (!application) throw new Error('Application not found');
      previousStatus = application.status;
      return repository.updateStatus(applicationId, newStatus);
    },
    async undo() { return repository.updateStatus(applicationId, previousStatus); }
  };
}
// keeps history in a stack so undo always reverts the latest action first
export class CommandHistory {
  constructor() { this.stack = []; }
  async run(command) {
    const result = await command.execute();
    this.stack.push(command);
    return result;
  }
  async undoLast() {
    const command = this.stack.pop();
    if (!command) return null;
    return command.undo();
  }
}
