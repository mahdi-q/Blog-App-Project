import { getAllPosts } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import PostList from "app/(Blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function CategoryPage({ params, searchParams }) {
  const categoryQuery = `categorySlug=${params.categorySlug}`;
  const queries = `${queryString.stringify(searchParams)}&${categoryQuery}`;

  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);
  const {posts} = await getAllPosts(queries, options);

  const { search } = searchParams;

  const searchMessage = search
    ? `${toPersianNumbers(posts.length)} نتیجه برای "${search}" یافت شد.`
    : "";

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg font-bold text-secondary-600">
          {search
            ? `هیچ نتیجه ای برای "${search}" یافت نشد.`
            : "پستی در این دسته بندی یافت نشد."}
        </p>
      ) : (
        <div>
          {searchMessage && (
            <p className="mb-4 text-lg font-bold text-secondary-600">
              {searchMessage}
            </p>
          )}

          <PostList posts={posts} />
        </div>
      )}
    </div>
  );
}
export default CategoryPage;
