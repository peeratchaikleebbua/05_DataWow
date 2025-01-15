import axios from "axios";
import axiosResponse from "./response-interceptor";
import qs from "qs";
import { auth } from "@/auth";
// Create an Axios instance
const axiosInstance = axios.create({
  // Make sure to define the base URL in .env
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // handle serialize params into query parameters
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      arrayFormat: "repeat",
      skipNulls: true,
      encode: false, // set to true if it is production
    });
  },
  withCredentials: true,
});

// Intercept requests to add the Authorization header
axiosInstance.interceptors.request.use(
  async (config) => {
    let Authorization = null;

    // client send accessToken
    if (config.headers.Authorization) {
      Authorization = `Bearer ${config.headers.Authorization}`;
    } else {
      // server send accessToken
      const session = await auth();
      const token = session?.accessToken;
      Authorization = `Bearer ${token}`;
    }

    if (Authorization) {
      config.headers["Authorization"] = Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosResponse(axiosInstance);

export default axiosInstance;
