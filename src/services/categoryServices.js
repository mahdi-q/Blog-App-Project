import http from "./httpServices";

export async function getAllCategoriesApi(queries, options) {
  return http
    .get(`/category/list?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function deleteCategoryApi(categoryId) {
  return http
    .delete(`/category/remove/${categoryId}`)
    .then(({ data }) => data.data);
}
