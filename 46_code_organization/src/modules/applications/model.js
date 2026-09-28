// model: shape of an application + allowed status values
export const STATUS = Object.freeze({ PENDING: 'Pending', APPROVED: 'Approved', REJECTED: 'Rejected' });
// pure function: builds a clean object from raw input
export function buildApplication(input) {
  return {
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    age: Number(input.age),
    skills: [...new Set((input.skills || []).map(skill => skill.trim()))],
    status: STATUS.PENDING
  };
}
