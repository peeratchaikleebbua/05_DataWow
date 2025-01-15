import { toast, ToastOptions } from "react-toastify";

// Custom hook to use the toast context
export class ToastAlert {
  static info(message: string, options?: ToastOptions) {
    toast.info(message, options);
  }

  static success(message: string, options?: ToastOptions) {
    toast.success(message, options);
  }

  static error(message: string, options?: ToastOptions) {
    toast.error(message, options);
  }
}
