import { ToastAlert } from "@/features/_shared/utils/toast-alert";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "../actions/auth-action";

export const useAuthLoginMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: login,
    onError: (error) => {
      ToastAlert.error(
        `${error.message ?? "เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง"}`
      );
    },
    onSuccess: () => {
      router.push("/post");
      ToastAlert.success(`เข้าสู่ระบบสำเร็จ`);
    },
  });
};
