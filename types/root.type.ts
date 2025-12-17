export interface Root<T> {
    status: boolean;
    path: string;
    statusCode: number;
    message: string;
    data: T;
    timestamp: string;
  }
  
  export interface RootResWithPagination<T> {
    status: boolean;
    path: string;
    statusCode: number;
    message: string;
    data: Data<T>;
    timestamp: string;
  }
  export interface RootResWithPaginationItems<T> {
    status: boolean;
    path: string;
    statusCode: number;
    message: string;
    data: DataItems<T>;
    timestamp: string;
  }
  
  export interface DataItems<T> {
    items: T;
    pagination: Pagination;
  }
  export interface Data<T> {
    data: T;
    pagination: Pagination;
  }
  export interface Pagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    nextPage: number;
    prevPage: number;
    offset: number;
  }
  
  export interface UpdateResponse<T> {
    status: boolean;
    path: string;
    statusCode: number;
    message: string;
    data: T;
    timestamp: string;
  }
  
  