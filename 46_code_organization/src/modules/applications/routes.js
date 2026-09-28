import { requireRole } from '../../middleware/authorization.js';
// routes only answer: which url, which method, which middleware, which controller
export function registerApplicationRoutes(router, controller, authenticate) {
  router.post('/applications', authenticate, controller.create);
  router.get('/applications', authenticate, requireRole('admin'), controller.list);
  router.get('/applications/:id', authenticate, requireRole('admin'), controller.getOne);
  router.patch('/applications/:id/approve', authenticate, requireRole('admin'), controller.approve);
  router.patch('/applications/:id/reject', authenticate, requireRole('admin'), controller.reject);
}
