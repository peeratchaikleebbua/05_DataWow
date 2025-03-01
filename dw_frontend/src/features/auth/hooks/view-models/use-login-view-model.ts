import { useForm } from "react-hook-form";
import { useAuthLoginMutation } from "../../services/auth-mutation";
import {
  LoginUser,
  loginUserSchema,
} from "@/core/models/auth/entity/auth.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";

export const useLoginViewModel = () => {
  /**
   * step 1: common state
   */

  const router = useRouter();

  /**
   *  step 2: react query
   */
  const method = useForm<LoginUser>({
    mode: "onChange",
    resolver: zodResolver(loginUserSchema),
  });

  const { mutate, isPending, isError } = useAuthLoginMutation();
  /**
   *  step 3: login form
   */

 

  /**
   *  step 4: action
   */

  const onSubmit = (data: LoginUser) => {
   mutate(data);
  };

  // prefetch the posts page
  // since it will redirect to posts after login
  useEffect(() => {
    router.prefetch("/post", {
      kind: PrefetchKind.FULL,
    });
  }, []);

  return {
    method,
    onSubmit,
    loading: !isError && (isPending || method.formState.isSubmitSuccessful),
  };
};
