import CategoryItems from "./CategoryItems";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <div>
      <CategoryItems categories={categories} />
    </div>
  );
}
export default CategoryList;
