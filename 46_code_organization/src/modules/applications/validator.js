import { badRequest } from '../../utils/httpError.js';
// collects every error first so the client sees all problems in one response
export function validateApplication(data, config) {
  const errors = [];
  if (!data || typeof data.name !== 'string' || !data.name.trim()) errors.push('name is required');
  if (!data || typeof data.email !== 'string' || !/^\S+@\S+\.\S+$/.test(data.email)) errors.push('email is invalid');
  if (!data || !Number.isInteger(data.age) || data.age < config.minAge || data.age > config.maxAge) errors.push(`age must be between ${config.minAge} and ${config.maxAge}`);
  if (data && data.skills !== undefined && !Array.isArray(data.skills)) errors.push('skills must be an array');
  if (errors.length) throw badRequest('Validation failed', errors);
}
