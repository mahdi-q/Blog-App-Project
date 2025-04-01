"use client";

import { useAuth } from "@/contexts/AuthContext";
import Avatar from "@/ui/Avatar";
import Link from "next/link";

function ProfileHeader() {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "opacity-70 blur-sm" : "opacity-100 blur-none"}`}
    >
      <div className="flex items-center justify-between px-4 py-5 md:px-6 lg:px-8">
        <span className="text-sm font-bold text-secondary-700 lg:text-base">
          سلام؛ {user?.name}
        </span>

        <Link href="/profile">
          <Avatar src={user?.avatarUrl} size={28} />
        </Link>
      </div>
    </header>
  );
}
export default ProfileHeader;
