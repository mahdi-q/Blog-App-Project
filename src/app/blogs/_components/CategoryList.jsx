import Link from "next/link";

const listStyles =
  "rounded p-2 pr-6 transition-colors duration-300 hover:bg-secondary-100 lg:ml-6";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-2">
      <li className={listStyles}>
        <Link href="/blogs">همه</Link>
      </li>

      {categories.map((category) => (
        <li key={category._id} className={listStyles}>
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CategoryList;
