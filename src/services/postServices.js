import http from "./httpServices";

export async function getAllPosts(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options,
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};

  // const data = await http
  //   .get("/post/list", { cache: "force-cache" })
  //   .then(({ data }) => data.data);

  // const { posts } = data || {};

  return { posts, totalPages };
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

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(postData) {
  return http.post("/post/create", postData).then(({ data }) => data.data);
}
