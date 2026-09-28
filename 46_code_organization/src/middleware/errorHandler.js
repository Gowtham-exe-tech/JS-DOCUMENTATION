import { HttpError } from '../utils/httpError.js';
// one place that converts errors into http responses
export function errorHandler(error, req, res) {
  if (error instanceof HttpError) return res.json(error.status, { message: error.message, details: error.details });
  // unknown error: log the real one, but do not leak internals to the client
  console.error('Unexpected error:', { path: req.pathname, error: error.message });
  return res.json(500, { message: 'Something went wrong' });
}
