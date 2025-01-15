// this is for response interceptor
// handle error response

import { AxiosInstance } from "axios";

// Response Interceptor for error handling
const axiosResponse = (axiosInstance: AxiosInstance) => {
  return axiosInstance.interceptors.response.use(
    (response) => response, // If the request is successful, just return the response
    (error) => {
      // Check if the error has a response from the server
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message || error.message;

        // Handle different status codes
        switch (status) {
          case 400:
            console.error("Bad Request:", message);
            break;
          case 401:
            console.error("Unauthorized - Token expired or not provided");
            // Optionally handle token expiration here, such as redirecting to login
            break;
          case 403:
            console.error("Forbidden - You do not have permission");
            break;
          case 404:
            console.error("Not Found:", message);
            break;
          case 500:
            console.error("Internal Server Error:", message);
            break;
          default:
            console.error("Something went wrong:", message);
        }
      } else if (error.request) {
        // Handle request error (e.g., no response received)
        console.error(
          "Network Error - No response from the server:",
          error.request
        );
      } else {
        // Handle any other errors that occurred during setup
        console.error("Error:", error.message);
      }

      // Reject the promise with the error to be handled in the calling function
      return Promise.reject(error);
    }
  );
};

export default axiosResponse