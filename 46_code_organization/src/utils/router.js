// tiny router, only so the project runs with zero dependencies (express does this in real life)
export function createRouter() {
  const routes = [];
  const add = (method, path, handlers) => {
    const keys = [];
    // turns /applications/:id into a regex and remembers the param names
    const source = path.replace(/:(\w+)/g, (_, key) => { keys.push(key); return '([^/]+)'; });
    routes.push({ method, pattern: new RegExp(`^${source}$`), keys, handlers });
  };
  const find = (method, pathname) => {
    for (const route of routes) {
      if (route.method !== method) continue;
      const match = pathname.match(route.pattern);
      if (!match) continue;
      const params = {};
      route.keys.forEach((key, index) => { params[key] = decodeURIComponent(match[index + 1]); });
      return { handlers: route.handlers, params };
    }
    return null;
  };
  return {
    get: (path, ...handlers) => add('GET', path, handlers),
    post: (path, ...handlers) => add('POST', path, handlers),
    patch: (path, ...handlers) => add('PATCH', path, handlers),
    find
  };
}
// runs handlers one by one, next() moves forward, next(error) jumps to the error handler
export async function runChain(handlers, req, res) {
  let index = 0;
  const next = async error => {
    if (error) throw error;
    const handler = handlers[index++];
    if (handler) await handler(req, res, next);
  };
  await next();
}
