import PostCard from "@/components/PostCard";

async function PostList({ posts }) {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
export default PostList;
