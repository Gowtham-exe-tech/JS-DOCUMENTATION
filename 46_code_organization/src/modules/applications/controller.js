import { parsePagination, paginate } from '../../utils/pagination.js';
// controller handles http things only: params, body, status codes. no business rules here
export function createApplicationController({ service, config }) {
  return {
    async create(req, res) { res.json(201, await service.create(req.body)); },
    async getOne(req, res) { res.json(200, await service.getById(Number(req.params.id))); },
    async list(req, res) {
      const { status, skill } = req.query;
      const { page, limit } = parsePagination(req.query, config);
      const items = await service.list({ status, skill });
      res.json(200, paginate(items, page, limit));
    },
    async approve(req, res) { res.json(200, await service.approve(Number(req.params.id))); },
    async reject(req, res) { res.json(200, await service.reject(Number(req.params.id))); }
  };
}
