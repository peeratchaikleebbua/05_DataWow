import { AxiosRequestConfig } from "axios";
import axiosInstance from "./request-interceptor";
import { AxiosError } from "axios";

export interface AxiosApiResponse<T> {
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

interface AxiosErrorResponseData {
  message?: string;
  [key: string]: unknown; // To handle additional fields in the response
}

const handleError = (
  error: AxiosError<AxiosErrorResponseData> | Error,
  errorFrom: string
) => {
  let message = "An unknown error occurred";

  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError<AxiosErrorResponseData>;
    const data = axiosError.response?.data;

    if (data && typeof data.message === "string") {
      message = data.message; // Access message safely
    } else {
      message = axiosError.message || message;
    }

    if (process.env.NODE_ENV !== "production") {
      console.error(`Axios Error ${errorFrom}: ${message}`, axiosError);
    }
  } else {
    // Handle generic errors
    message = error.message;

    if (process.env.NODE_ENV !== "production") {
      console.error(`Error ${errorFrom}: ${message}`, error);
    }
  }

  throw new Error(message);
};

// Generic create function
export const postResource = async <T>(
  endpoint: string,
  data: object,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.post(
      endpoint,
      data,
      config ? config : {}
    );
    return response.data as T;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error) {
      handleError(error, `creating resource at ${endpoint}`);
    }
    throw new Error("An unknown error occurred");
  }
};

// Generic read function
export const getResource = async <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.get(endpoint, config ? config : {});
    return response.data as T;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error) {
      handleError(error, `getting resource at ${endpoint}`);
    }
    throw new Error("An unknown error occurred");
  }
};

// Generic update function
export const updateResource = async <T>(
  endpoint: string,
  data: object,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.put(
      endpoint,
      data,
      config ? config : {}
    );
    return response.data as T;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error) {
      handleError(error, `updating resource at ${endpoint}`);
    }
    throw new Error("An unknown error occurred");
  }
};

// Generic patch function
export const patchResource = async <T>(
  endpoint: string,
  data: object,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.patch(
      endpoint,
      data,
      config ? config : {}
    );
    return response.data as T;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error) {
      handleError(error, `patching resource at ${endpoint}`);
    }
    throw new Error("An unknown error occurred");
  }
};

// Generic delete function
export const deleteResource = async <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.delete(endpoint, config ? config : {});
    return response.data as T;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error) {
      handleError(error, `deleting resource at ${endpoint}`);
    }
    throw new Error("An unknown error occurred");
  }
};
