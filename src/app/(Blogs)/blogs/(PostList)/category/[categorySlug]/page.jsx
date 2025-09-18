import { getAllPostsApi } from "@/services/postServices";
import Pagination from "@/ui/Pagination";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import PostList from "app/(Blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

export const revalidate = 600;

async function CategoryPage({ params, searchParams }) {
  const categoryQuery = `categorySlug=${params.categorySlug}`;
  const queries = `${queryString.stringify(searchParams)}&${categoryQuery}`;

  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);
  const { posts, totalPages } = await getAllPostsApi(queries, options);

  const { search } = searchParams;

  const searchMessage = search
    ? `${toPersianNumbers(posts.length)} نتیجه برای "${search}" یافت شد.`
    : "";

  return (
    <div>
      {posts.length === 0 ? (
        <p className="mt-8 text-center text-lg font-bold text-secondary-600">
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

          {posts && posts.length > 0 && (
            <div className="mt-8 flex items-center justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default CategoryPage;
