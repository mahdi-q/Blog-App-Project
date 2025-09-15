import http from "./httpServices";

export async function signupApi(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signinApi(data) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

// User Api

export async function getUserApi(options) {
  return http.get("/user/profile", options).then(({ data }) => data.data);
}

export async function getAllUsersApi(queries, options) {
  return http
    .get(`/user/list?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function getUserPostsApi(queries, options) {
  return http
    .get(`/user/user-posts?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function getUserCommentsApi(queries, options) {
  return http
    .get(`/user/user-comments?${queries}`, options)
    .then(({ data }) => data.data);
}
