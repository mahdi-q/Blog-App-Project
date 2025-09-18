import { deleteCategoryApi } from "@/services/categoryServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCategory } = useMutation({
    mutationFn: deleteCategoryApi,

    onSuccess: (data) => {
      toast.success(data?.message || "دسته‌بندی با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "حذف دسته‌بندی با خطا مواجه شد");
    },
  });

  return { isDeleting, deleteCategory };
}
