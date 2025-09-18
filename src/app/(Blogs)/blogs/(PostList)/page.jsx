import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { getAllPostsApi } from "@/services/postServices";
import queryString from "query-string";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Pagination from "@/ui/Pagination";

export const revalidate = 600;

async function BlogListPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);

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
            : "پستی برای نشان دادن وجود ندارد."}
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
export default BlogListPage;
