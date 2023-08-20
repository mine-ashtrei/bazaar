import { Pagination } from "./models";

export const get_pagination_offset = (pagination: Pagination): number => {
  return (pagination.page - 1) * pagination.limit;
};

export const get_pagination = (query: any): Pagination => {
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 10;
  return {
    page,
    limit,
  };
};
