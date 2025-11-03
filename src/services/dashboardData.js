import { cookies } from "next/headers";
import {
  getAllUsersApi,
  getUserApi,
  getUserCommentsApi,
  getUserPostsApi,
} from "./authServices";
import { getAllCommentsApi } from "./commentServices";
import { getAllPostsApi } from "./postServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";

export async function fetchAdminCardsData() {
  const cookiesStore = await cookies();
  const options = setCookiesOnReq(cookiesStore);

  try {
    const data = await Promise.all([
      getAllUsersApi("", options),
      getAllCommentsApi("", options),
      getAllPostsApi("", options),
    ]);

    const numberOfUsers = Number(data[0].totalUsers ?? "0");
    const numberOfComments = Number(data[1].totalComments ?? "0");
    const numberOfPosts = Number(data[2].totalPosts ?? "0");

    return {
      numberOfUsers,
      numberOfComments,
      numberOfPosts,
    };
  } catch (error) {
    console.log(error?.response?.data?.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}

export async function fetchUserCardsData() {
  const cookiesStore = await cookies();
  const options = setCookiesOnReq(cookiesStore);

  try {
    const data = await Promise.all([
      getUserApi(options),
      getUserCommentsApi("", options),
      getUserPostsApi("", options),
    ]);

    const numberOfBookmarks = Number(
      data[0].user.bookmarkedPosts.length ?? "0",
    );
    const numberOfComments = Number(data[1].totalComments ?? "0");
    const numberOfPosts = Number(data[2].totalPosts ?? "0");

    return {
      numberOfBookmarks,
      numberOfComments,
      numberOfPosts,
    };
  } catch (error) {
    console.log(error?.response?.data?.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
