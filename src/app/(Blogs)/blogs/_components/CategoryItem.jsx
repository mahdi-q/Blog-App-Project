import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategoryItem({ category }) {
  const pathname = usePathname();

  return (
    <Link href={`/blogs/category/${category.slug}`}>
      <li
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
  );
}
export default CategoryItem;
