import Image from "next/image";
import PostAuthor from "../_components/PostAuthor";
import PostReadingTime from "../_components/PostReadingTime";
import PostInteraction from "../_components/PostInteraction";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/services/postServices";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import RelatedPosts from "../_components/RelatedPosts";
import PostComments from "../_components/Comments/PostComments";

export const dynamicParams = false;

export async function generateStaticParams() {
  const {posts} = await getAllPosts();

  return posts.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);

  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost({ params }) {
  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);
  const post = await getPostBySlug(params.postSlug, options);

  if (!post) notFound();

  return (
    <div className="mx-auto mb-10 max-w-screen-md space-y-6">
      <h1 className="text-2xl font-bold text-secondary-700">{post.title}</h1>

      {/* Post Navbar */}
      <div className="flex w-full items-center justify-between border-b border-secondary-300 pb-1">
        <PostAuthor {...post.author} />

        <div className="flex items-center gap-x-6">
          <PostReadingTime time={post.readingTime} />

          <PostInteraction post={post} />
        </div>
      </div>

      {/* Post Image */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          className="object-cover object-center transition-all duration-300 ease-out hover:scale-110"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>

      {/* Post Text */}
      <div className="space-y-6 text-secondary-600">
        <p>{post.briefText}</p>

        <p>{post.text}</p>
      </div>

      {/* Related Posts */}
      {post.related.length > 0 && <RelatedPosts posts={post.related} />}

      {/* Post Comments */}
      <PostComments comments={post.comments} postId={post._id} />
    </div>
  );
}
export default SinglePost;
