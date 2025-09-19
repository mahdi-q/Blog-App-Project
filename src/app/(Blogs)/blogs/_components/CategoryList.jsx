"use client";

import { usePathname } from "next/navigation";
import CategoryItem from "./CategoryItem";
import Link from "next/link";
import classNames from "classnames";

function CategoryList({ categories }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      <Link href="/blogs">
        <li
          className={classNames(
            "block w-full rounded-lg py-3 pr-3 text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80",
            {
              "!bg-primary-100/50 !font-bold !text-primary-900 dark:!bg-primary-100":
                pathname === "/blogs",
            },
          )}
        >
          همه
        </li>
      </Link>

      {categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </ul>
  );
}
export default CategoryList;
