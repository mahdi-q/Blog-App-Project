import http from "./httpServices";

export async function getAllPosts(options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list`,
    options,
  );
  const { data } = await res.json();
  const { posts } = data || {};

  // const data = await http
  //   .get("/post/list", { cache: "force-cache" })
  //   .then(({ data }) => data.data);

  // const { posts } = data || {};

  return posts;
}

export async function getPostBySlug(slug, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
    options,
  );
  const { data } = await res.json();
  const { post } = data || {};

  // const data = await http
  //   .get(`/post/slug/${slug}`)
  //   .then(({ data }) => data.data);

  // const { post } = data || {};

  return post;
}
