"use client";

import { useAuth } from "@/contexts/AuthContext";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import Drawer from "@/ui/Drawer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";

function ProfileHeader() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "opacity-70 blur-sm" : "opacity-100 blur-none"}`}
    >
      <div className="flex items-center justify-between px-4 py-5 md:px-6 lg:px-8">
        <ButtonIcon
          className="block border-none lg:hidden"
          varient="outline"
          onClick={() => setIsOpenDrawer(true)}
        >
          <Bars3Icon className="!h-5 !w-5" />
        </ButtonIcon>

        <span className="text-sm font-bold text-secondary-700 lg:text-base">
          سلام؛ {user?.name}
        </span>

        <Link href="/profile">
          <Avatar src={user?.avatarUrl} size={28} />
        </Link>

        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <ProfileSidebar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
}
export default ProfileHeader;
