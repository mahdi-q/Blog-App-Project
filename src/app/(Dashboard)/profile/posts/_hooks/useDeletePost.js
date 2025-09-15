import { deletePostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeletePost() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,

    onSuccess: (data) => {
      toast.success(data?.message || "پست با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["user-posts"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "حذف پست با خطا مواجه شد");
    },
  });

  return { isDeleting, deletePost };
}
