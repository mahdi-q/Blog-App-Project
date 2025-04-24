import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreatePost() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createPost } = useMutation({
    mutationFn: createPostApi,

    onSuccess: (data) => {
      toast.success(data?.message || "پست با موفقیت ایجاد شد");
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "ایجاد پست با خطا مواجه شد");
    },
  });

  return { isCreating, createPost };
}
