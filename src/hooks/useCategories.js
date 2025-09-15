import { getAllCategoriesApi } from "@/services/categoryServices";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories(queries) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories", queries],
    queryFn: () => getAllCategoriesApi(queries),
  });

  // {_id, title, englishTitle, ...}
  const { categories: rawCategories = [], totalPages } = data || {};

  // {value: _id, label: title}
  const categories = rawCategories.map((category) => ({
    label: category.title,
    value: category._id,
  }));

  // {value: englishTitle, label: title}
  const transformedCategories = rawCategories.map((category) => ({
    label: category.title,
    value: category.englishTitle,
  }));

  return {
    isLoading,
    rawCategories,
    categories,
    transformedCategories,
    totalPages,
  };
}
