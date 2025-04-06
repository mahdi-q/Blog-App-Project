"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SidebarNavs from "./SidebarNavs";
import ButtonIcon from "@/ui/ButtonIcon";

function ProfileSidebar({ onClose = () => {} }) {
  return (
    <div className="flex h-screen flex-col overflow-y-auto pt-6">
      {/* Sidebar Header */}
      <div className="mb-4 flex w-full items-center justify-between border-b border-b-secondary-200 pb-2 transition-all duration-300 ease-in-out hover:border-b-primary-200 lg:justify-center">
        <Link
          href="/"
          className="flex items-center justify-center gap-x-4 text-secondary-700 hover:text-primary-900"
        >
          <HomeIcon className="h-6 w-6" />
          <span>نکست بلاگ</span>
        </Link>

        <ButtonIcon
          className="block border-none lg:hidden"
          varient="outline"
          onClick={onClose}
        >
          <XMarkIcon className="!h-5 !w-5" />
        </ButtonIcon>
      </div>

      {/* Sidebar Content */}
      <div className="flex-auto">
        <SidebarNavs onClose={onClose} />

        <div className="flex w-full cursor-pointer items-center gap-x-4 rounded-lg py-3 pr-3 text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80 hover:text-red-400">
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default ProfileSidebar;
