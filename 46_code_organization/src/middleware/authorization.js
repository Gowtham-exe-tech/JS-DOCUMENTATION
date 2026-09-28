import { forbidden } from '../utils/httpError.js';
// middleware factory, usage: requireRole('admin')
export function requireRole(role) {
  return function authorize(req, res, next) {
    if (req.user?.role !== role) return next(forbidden(`${role} access required`));
    return next();
  };
}
