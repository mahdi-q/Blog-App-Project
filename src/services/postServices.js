import http from "./httpServices";

export async function getAllPostsApi(queries, options) {
  const data = await http
    .get(`/post/list?${queries}`, options)
    .then(({ data }) => data.data);

  const { posts, totalPages, totalPosts } = data || {};

  return { posts, totalPages, totalPosts };
}

export async function getPostBySlugApi(slug, options) {
  const data = await http
    .get(`/post/slug/${slug}`, options)
    .then(({ data }) => data.data);

  const { post } = data || {};

  return post;
}

export async function getPostByIdApi(postId, options) {
  return http.get(`/post/${postId}`, options).then(({ data }) => data.data);
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

export async function editPostApi({ id, postData }) {
  return http
    .patch(`/post/update/${id}`, postData)
    .then(({ data }) => data.data);
}

export async function deletePostApi(postId) {
  return http.delete(`/post/remove/${postId}`).then(({ data }) => data.data);
}
