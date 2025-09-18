import { editCategoryApi } from "@/services/categoryServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditCategory() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editCategory } = useMutation({
    mutationFn: editCategoryApi,

    onSuccess: (data) => {
      toast.success(data?.message || "دسته‌بندی با موفقیت ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "ویرایش دسته‌بندی با خطا مواجه شد");
    },
  });

  return { isEditing, editCategory };
}
