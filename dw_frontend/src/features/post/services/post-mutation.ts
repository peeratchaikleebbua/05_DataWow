import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import { ICreatePost } from "@/core/models/post/use-cases/create-post.use-case";
import { clientSession } from "@/features/_shared/utils/client-session";
import { ToastAlert } from "@/features/_shared/utils/toast-alert";
import { createPostController } from "@/interface-adapters/controllers/post/create-post.controller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export const useCreatePostMutaiton = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (createPost: ICreatePost) => {
      const { config, sessionId } = await clientSession();
      return createPostController(sessionId, createPost, config());
    },
    onError: (error) => {
      if (error instanceof UnauthenticatedError) {
        signOut();
      }

      if (error instanceof InputParseError) {
        ToastAlert.error(`กรุณาตรวจสอบ ${error.message}`);
      }

      ToastAlert.error(`สร้าง Post ไม่สำเร็จ`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      ToastAlert.success(`สร้าง Post สำเร็จ`);
    },
  });
};
