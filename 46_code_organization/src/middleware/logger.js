export function logger(req, res, next) {
  const start = Date.now();
  // log after the response is finished so status code is known
  res.on('finish', () => console.log(`${req.method} ${req.pathname} -> ${res.statusCode} (${Date.now() - start}ms)`));
  return next();
}
