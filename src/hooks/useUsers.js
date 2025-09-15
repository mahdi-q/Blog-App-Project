import { getAllUsersApi, getUserApi } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers(queries) {
  const { isLoading, data } = useQuery({
    queryKey: ["users", queries],
    queryFn: () => getAllUsersApi(queries),
  });

  const { users, totalPages } = data || {};

  return { isLoading, users, totalPages };
}

export function useGetUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
  });

  const { user } = data || {};

  return { isLoading, user };
}
