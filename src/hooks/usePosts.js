import { getUserPostsApi } from "@/services/authServices";
import { getAllPostsApi, getPostByIdApi } from "@/services/postServices";
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

export function useGetPostById(postId) {
  const { isLoading, data } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostByIdApi(postId),
  });

  const { post } = data || {};

  return { isLoading, post };
}
