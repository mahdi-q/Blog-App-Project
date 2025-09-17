"use client";

import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import Drawer from "@/ui/Drawer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import PanelSidebar from "./PanelSidebar";
import { useGetUser } from "@/hooks/useUsers";

function PanelHeader({ sidebarNavs }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useGetUser();

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

        <Link href={sidebarNavs[0].href}>
          <Avatar src={user?.avatarUrl} size={28} />
        </Link>

        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <PanelSidebar
            onClose={() => setIsOpenDrawer(false)}
            sidebarNavs={sidebarNavs}
          />
        </Drawer>
      </div>
    </header>
  );
}
export default PanelHeader;
