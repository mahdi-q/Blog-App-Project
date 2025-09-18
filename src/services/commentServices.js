import http from "./httpServices";

export async function createCommentApi(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllCommentsApi(queries, options) {
  return http
    .get(`/comment/list?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function deleteCommentApi(commentId) {
  return http
    .delete(`/comment/remove/${commentId}`)
    .then(({ data }) => data.data);
}

export async function changeStatusCommentApi({ commentId, data }) {
  return http
    .patch(`/comment/update/${commentId}`, data)
    .then(({ data }) => data.data);
}
