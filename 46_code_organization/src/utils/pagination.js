// pure functions, easy to test
export function parsePagination(query, config) {
  const page = Math.max(1, Number(query.page) || 1);
  // limit is capped so nobody can ask for a million rows
  const limit = Math.min(config.maxPageSize, Math.max(1, Number(query.limit) || config.defaultPageSize));
  return { page, limit };
}
export function paginate(items, page, limit) {
  const start = (page - 1) * limit;
  return { data: items.slice(start, start + limit), page, limit, total: items.length, totalPages: Math.ceil(items.length / limit) };
}
