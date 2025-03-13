import Image from "next/image";
import CoverImage from "./CoverImage";

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
          className="col-span-12 rounded-md border border-secondary-300 p-2 sm:col-span-6 lg:col-span-4"
        >
          <CoverImage {...post} />
        </div>
      ))}
    </div>
  ) : null;
}
export default PostList;
