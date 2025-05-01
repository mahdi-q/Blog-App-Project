import http from "./httpServices";

export async function getAllCategoriesApi(options) {
  // ! Handle With Fetch
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  // const {
  //   data: { categories },
  // } = await res.json();
  // return categories;

  // ! Handle With Axios
  return http.get("/category/list", options).then(({ data }) => data.data);
}
