"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategoryItems({ categories }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      <Link href="/blogs">
        <li
          className={classNames(
            "block w-full rounded-lg py-3 pr-3 text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80",
            {
              "!bg-primary-100/40 !font-bold !text-primary-900":
                pathname === "/blogs",
            },
          )}
        >
          همه
        </li>
      </Link>

      {categories.map((category) => (
        <Link href={`/blogs/category/${category.slug}`}>
          <li
            key={category._id}
            className={classNames(
              "block w-full rounded-lg py-3 pr-3 text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80",
              {
                "!bg-primary-100/40 !font-bold !text-primary-900":
                  pathname === `/blogs/category/${category.slug}`,
              },
            )}
          >
            {category.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default CategoryItems;
