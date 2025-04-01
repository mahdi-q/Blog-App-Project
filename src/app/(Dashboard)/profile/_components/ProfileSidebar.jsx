import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SidebarNavs from "./SidebarNavs";

function ProfileSidebar() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto pt-10 lg:pt-2">
      {/* Sidebar Header */}
      <Link
        href="/"
        className="mb-4 flex items-center justify-center gap-x-4 border-b border-b-secondary-200 pb-2 text-secondary-700 transition-all duration-300 ease-in-out hover:border-b-primary-200 hover:text-primary-900"
      >
        <HomeIcon className="h-6 w-6" />
        <span>نکست بلاگ</span>
      </Link>

      {/* Sidebar Content */}
      <div className="flex-auto">
        <SidebarNavs />

        <div className="flex w-full cursor-pointer items-center gap-x-4 rounded-lg py-3 pr-3 font-medium text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80 hover:text-red-400">
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default ProfileSidebar;
