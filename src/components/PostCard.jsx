import Link from "next/link";
import CoverImage from "./CoverImage";
import PostAuthor from "./PostAuthor";
import PostReadingTime from "./PostReadingTime";
import PostInteraction from "./PostInteraction";

function PostCard({ post, hasInteractions = true }) {
  return (
    <div className="col-span-12 space-y-2 rounded-md border border-secondary-300 p-2 sm:col-span-6 lg:col-span-4">
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

        {/* Post Interactions */}
        {hasInteractions && <PostInteraction post={post} />}
      </div>
    </div>
  );
}

export default PostCard;
