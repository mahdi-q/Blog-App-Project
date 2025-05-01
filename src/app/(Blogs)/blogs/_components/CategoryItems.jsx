"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategoryItems({ categories }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-1">
      <li
        className={classNames(
          "block w-full rounded-lg py-3 pr-3 text-secondary-700 transition-all duration-300 ease-in-out hover:bg-secondary-100/80",
          {
            "!bg-primary-100/40 !font-bold !text-primary-900":
              pathname === "/blogs",
          },
        )}
      >
        <Link href="/blogs">همه</Link>
      </li>

      {categories.map((category) => (
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
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CategoryItems;
