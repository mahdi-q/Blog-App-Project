import { getUserCommentsApi } from "@/services/authServices";
import { getAllCommentsApi } from "@/services/commentServices";
import { useQuery } from "@tanstack/react-query";

export function useGetComments(queries) {
  const { isLoading, data } = useQuery({
    queryKey: ["comments", queries],
    queryFn: () => getAllCommentsApi(queries),
  });

  const { comments, totalPages } = data || {};

  return { isLoading, comments, totalPages };
}

export function useGetUserComments(queries) {
  const { isLoading, data } = useQuery({
    queryKey: ["user-comments", queries],
    queryFn: () => getUserCommentsApi(queries),
  });

  const { comments, totalPages } = data || {};

  return { isLoading, comments, totalPages };
}
