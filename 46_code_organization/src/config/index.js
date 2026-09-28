// all environment values are read here only, nothing hardcoded in the other files
export const config = Object.freeze({
  port: Number(process.env.PORT ?? 4000),
  defaultPageSize: Number(process.env.DEFAULT_PAGE_SIZE ?? 5),
  maxPageSize: Number(process.env.MAX_PAGE_SIZE ?? 50),
  minAge: 18,
  maxAge: 100
});
