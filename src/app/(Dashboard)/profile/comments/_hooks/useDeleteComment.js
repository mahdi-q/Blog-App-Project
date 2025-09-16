import { deleteCommentApi } from "@/services/commentServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteComment } = useMutation({
    mutationFn: deleteCommentApi,

    onSuccess: (data) => {
      toast.success(data?.message || "نظر با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["user-comments"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "حذف نظر با خطا مواجه شد");
    },
  });

  return { isDeleting, deleteComment };
}
