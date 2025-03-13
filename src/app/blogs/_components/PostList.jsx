async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.map((post) => <div key={post._id}>{post.title}</div>);
}
export default PostList;
