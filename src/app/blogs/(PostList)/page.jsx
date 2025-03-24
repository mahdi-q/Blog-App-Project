import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { getAllPosts } from "@/services/postServices";

async function BlogListPage() {
  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);
  const posts = await getAllPosts(options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg font-bold text-secondary-600">
          پستی برای نشان دادن وجود ندارد.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}
export default BlogListPage;
