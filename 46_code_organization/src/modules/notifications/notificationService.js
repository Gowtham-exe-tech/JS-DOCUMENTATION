// side effects (sending mails) are kept away from the business rules
export function createNotificationService() {
  const sent = [];
  return {
    sent,
    async sendConfirmation(application) { sent.push({ to: application.email, type: 'confirmation' }); },
    async sendDecision(application) { sent.push({ to: application.email, type: application.status }); }
  };
}
