import { editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditPost() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editPost } = useMutation({
    mutationFn: editPostApi,

    onSuccess: (data) => {
      toast.success(data?.message || "پست با موفقیت ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "ویرایش پست با خطا مواجه شد");
    },
  });

  return { isEditing, editPost };
}
