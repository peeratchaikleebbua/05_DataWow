import { AxiosRequestConfig } from "axios";

export interface RepositoryRequest<T> {
  payload: T;
  config?: AxiosRequestConfig;
}

export interface RepositoryResponse<T> {
  data: T;
  meta: {
    timestamp: string;
    pagination?: {
      perPage: number;
      currentPage: number;
      previousPage: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface IMessage {
  message: string;
}
