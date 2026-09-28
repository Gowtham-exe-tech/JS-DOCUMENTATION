import http from 'node:http';
import { config } from './config/index.js';
import { createRouter, runChain } from './utils/router.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { createAuthentication } from './middleware/authentication.js';
import { authService } from './modules/auth/authService.js';
import { createNotificationService } from './modules/notifications/notificationService.js';
import { createApplicationRepository } from './modules/applications/repository.js';
import { createApplicationService } from './modules/applications/service.js';
import { createApplicationController } from './modules/applications/controller.js';
import { registerApplicationRoutes } from './modules/applications/routes.js';
import { badRequest, notFound } from './utils/httpError.js';
async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return undefined;
  try { return JSON.parse(Buffer.concat(chunks).toString()); } catch { throw badRequest('Invalid JSON body'); }
}
// composition root: the only place where all the parts are connected
export function createApp() {
  const router = createRouter();
  const notificationService = createNotificationService();
  const repository = createApplicationRepository();
  const service = createApplicationService({ repository, notificationService, config });
  const controller = createApplicationController({ service, config });
  registerApplicationRoutes(router, controller, createAuthentication(authService));
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    req.pathname = url.pathname;
    req.query = Object.fromEntries(url.searchParams);
    res.json = (status, body) => { res.writeHead(status, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(body)); };
    try {
      req.body = await readBody(req);
      const route = router.find(req.method, req.pathname);
      if (!route) throw notFound('Route not found');
      req.params = route.params;
      await runChain([logger, ...route.handlers], req, res);
    } catch (error) { errorHandler(error, req, res); }
  });
  return { server, notificationService };
}
