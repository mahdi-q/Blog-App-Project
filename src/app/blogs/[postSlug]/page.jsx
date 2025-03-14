async function SinglePost({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.postSlug}`,
  );
  const {
    data: { post },
  } = await res.json();

  return <div>{post.title}</div>;
}
export default SinglePost;
