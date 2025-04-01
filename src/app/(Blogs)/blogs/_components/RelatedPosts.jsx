import Link from "next/link";
import CoverImage from "./CoverImage";
import PostAuthor from "./PostAuthor";
import PostReadingTime from "./PostReadingTime";

function RelatedPosts({ posts }) {
  return (
    <div className="border-t border-dashed border-secondary-400 py-4">
      <h2 className="mb-4 text-xl font-bold text-secondary-700">پست های مرتبط</h2>

      <div className="grid grid-cols-12 gap-4">
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
                <h2 className="font-bold text-secondary-700 hover:text-primary-900">
                  {post.title}
                </h2>
              </Link>

              <div className="flex items-center justify-between">
                {/* Post Author */}
                <PostAuthor {...post.author} isTruncate />

                {/* Post Reading Time */}
                <PostReadingTime time={post.readingTime} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RelatedPosts;
