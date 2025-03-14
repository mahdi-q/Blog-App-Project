import CoverImage from "./CoverImage";
import Link from "next/link";
import PostAuthor from "./PostAuthor";
import PostInteraction from "./PostInteraction";
import PostReadingTime from "./PostReadingTime";

async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 space-y-2 rounded-md border border-secondary-300 p-2 sm:col-span-6 lg:col-span-4"
        >
          {/* Post Image */}
          <CoverImage {...post} />

          {/* Post Content */}
          <div className="space-y-4 p-2">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="font-bold text-secondary-700">{post.title}</h2>
            </Link>

            <div className="flex items-center justify-between">
              {/* Post Author */}
              <PostAuthor {...post.author} isTruncate />

              {/* Post Reading Time */}
              <PostReadingTime time={post.readingTime} />
            </div>

            {/* Post Interactions */}
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default PostList;
