"use client";

import { useGetUser } from "@/hooks/useUsers";
import UserAvatar from "./UserAvatar";
import UserInfoForm from "./UserInfoForm";
import Fallback from "@/ui/Fallback";

function UserInfoPageContent() {
  const { isLoading, user } = useGetUser();

  if (isLoading) return <Fallback />;

  const initValue = {
    name: user.name,
    email: user.email,
  };

  return (
    <div className="flex flex-col items-center justify-between gap-12 xl:flex-row xl:px-6">
      <div>
        <UserAvatar avatarUrl={user.avatarUrl} />
      </div>

      <div className="w-full flex-1">
        <UserInfoForm initValue={initValue} />
      </div>
    </div>
  );
}

export default UserInfoPageContent;
