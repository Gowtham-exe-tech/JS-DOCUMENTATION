import { unauthorized } from '../utils/httpError.js';
// authService is injected so this file does not know how tokens are checked
export function createAuthentication(authService) {
  return function authenticate(req, res, next) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    const user = token ? authService.verifyToken(token) : null;
    if (!user) return next(unauthorized('Authentication required'));
    // later handlers read the user from req
    req.user = user;
    return next();
  };
}
