import { getUserPostsApi } from "@/services/authServices";
import { getAllPostsApi } from "@/services/postServices";
import { useQuery } from "@tanstack/react-query";

export function useGetPosts(queries) {
  const { isLoading, data } = useQuery({
    queryKey: ["posts", queries],
    queryFn: () => getAllPostsApi(queries),
  });

  const { posts, totalPages } = data || {};

  return { isLoading, posts, totalPages };
}

export function useGetUserPosts(queries) {
  const { isLoading, data } = useQuery({
    queryKey: ["user-posts", queries],
    queryFn: () => getUserPostsApi(queries),
  });

  const { posts, totalPages } = data || {};

  return { isLoading, posts, totalPages };
}
