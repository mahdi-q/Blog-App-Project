"use client";

import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon />,
    href: "/profile",
  },
  {
    id: 2,
    title: "کاربران",
    icon: <UserGroupIcon />,
    href: "/profile/users",
  },
  {
    id: 3,
    title: "پست ها",
    icon: <DocumentTextIcon />,
    href: "/profile/posts",
  },
  {
    id: 4,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon />,
    href: "/profile/comments",
  },
  {
    id: 5,
    title: "دسته‌ بندی ها",
    icon: <Squares2X2Icon />,
    href: "/profile/categories",
  },
];

function SidebarNavs({ onClose }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => (
        <li key={nav.id}>
          <Link
            href={nav.href}
            onClick={onClose}
            className={classNames(
              "flex w-full items-center gap-x-4 rounded-lg py-3 pr-3 text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80 [&>svg]:h-5 [&>svg]:w-5",
              {
                "!bg-primary-100/40 !font-bold !text-primary-900":
                  pathname === nav.href,
              },
            )}
          >
            {nav.icon}
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default SidebarNavs;
