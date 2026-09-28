// all observers are registered in one place
export function registerListeners(events, createNotification) {
  const stats = { submitted: 0, approved: 0 };
  const auditLog = [];
  events.on('applicationSubmitted', application => {
    const email = createNotification('email');
    console.log('  ', email.send(application.email, 'Your application has been received'));
  });
  events.on('applicationSubmitted', () => { stats.submitted++; });
  events.on('applicationSubmitted', application => auditLog.push(`submitted:${application.id}`));
  events.on('applicationApproved', application => {
    const sms = createNotification('sms');
    console.log('  ', sms.send(application.email, 'Congratulations, you are approved'));
    stats.approved++;
    auditLog.push(`approved:${application.id}`);
  });
  return { stats, auditLog };
}
