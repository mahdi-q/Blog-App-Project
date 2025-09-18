import { changeStatusCommentApi } from "@/services/commentServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useChangeStatusComment() {
  const queryClient = useQueryClient();

  const { isPending: isChanging, mutate: changeStatus } = useMutation({
    mutationFn: changeStatusCommentApi,

    onSuccess: (data) => {
      toast.success(data?.message || "وضعیت نظر با موفقیت آپدیت شد");

      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "تغییر وضعیت نظر با خطا مواجه شد",
      );
    },
  });

  return { isChanging, changeStatus };
}
