import { updateUserAvatar } from "@/services/authServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdateAvatar() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateAvatar } = useMutation({
    mutationFn: updateUserAvatar,

    onSuccess: (data) => {
      toast.success(data?.message || "عکس پروفایل با موفقیت ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "ویرایش عکس پروفایل با خطا مواجه شد",
      );
    },
  });

  return { isUpdating, updateAvatar };
}
