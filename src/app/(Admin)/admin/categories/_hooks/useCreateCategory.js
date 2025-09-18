import { createCategoryApi } from "@/services/categoryServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: createCategoryApi,

    onSuccess: (data) => {
      toast.success(data?.message || "دسته‌بندی با موفقیت ایجاد شد");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "ایجاد دسته‌بندی با خطا مواجه شد",
      );
    },
  });

  return { isCreating, createCategory };
}
