import { updateUserProfile } from "@/services/authServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateProfile } = useMutation({
    mutationFn: updateUserProfile,

    onSuccess: (data) => {
      toast.success(data?.message || "اطلاعات با موفقیت ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "ویرایش اطلاعات با خطا مواجه شد",
      );
    },
  });

  return { isUpdating, updateProfile };
}
