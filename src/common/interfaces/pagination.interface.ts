export interface PaginationRes<T> {
  items: T[];
  pageInfo: {
    page: number;
    // hasNext: boolean;
    limit: number;
    totalCount: number;
    // totalPages: number;
  };
}
