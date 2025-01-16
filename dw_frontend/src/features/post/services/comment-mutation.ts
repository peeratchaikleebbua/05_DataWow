import { UnauthenticatedError } from "@/core/errors/auth";
import { InputParseError } from "@/core/errors/common";
import { ICreateComment } from "@/core/models/comment/use-cases/create-comment.use-case";
import { postQueryKeys } from "@/core/models/post/entity/post.query-key";
import { clientSession } from "@/features/_shared/utils/client-session";
import { ToastAlert } from "@/features/_shared/utils/toast-alert";
import { createCommentController } from "@/interface-adapters/controllers/comment/create-comment.controller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (createComment: ICreateComment) => {
      const { config, sessionId } = await clientSession();
      return createCommentController(sessionId, createComment, config());
    },
    onError: (error) => {
      if (error instanceof UnauthenticatedError) {
        signOut();
      }

      if (error instanceof InputParseError) {
        ToastAlert.error(`กรุณาตรวจสอบ ${error.message}`);
      }

      ToastAlert.error(`สร้าง Comment ไม่สำเร็จ`);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: postQueryKeys.post(data.data.postId),
      });
      ToastAlert.success(`สร้าง Comment สำเร็จ`);
    },
  });
};
