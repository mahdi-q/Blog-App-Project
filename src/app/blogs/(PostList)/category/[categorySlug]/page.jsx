import { getAllPosts } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";

async function Category({ params }) {
  const searchQuery = `categorySlug=${params.categorySlug}`;

  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);
  const posts = await getAllPosts(searchQuery, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg font-bold text-secondary-600">
          پستی در این دسته بندی یافت نشد.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}
export default Category;
