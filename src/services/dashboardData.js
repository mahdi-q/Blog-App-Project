import { cookies } from "next/headers";
import { getAllUsersApi, getUserApi } from "./authServices";
import { getAllCommentsApi } from "./commentServices";
import { getAllPosts } from "./postServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";

export async function fetchAdminCardsData() {
  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);

  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllCommentsApi(options),
      getAllPosts(),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");
    const numberOfPosts = Number(data[2].posts.length ?? "0");

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
  const cookiesStore = cookies();
  const options = setCookiesOnReq(cookiesStore);

  try {
    const data = await Promise.all([
      getUserApi(options),
      getAllCommentsApi(options),
      getAllPosts(),
    ]);

    console.log(data[2]);

    const numberOfBookmarks = Number(
      data[0].user.bookmarkedPosts.length ?? "0",
    );

    const numberOfComments = Number(
      data[1].comments.filter(
        (comment) => comment.user._id === data[0].user._id,
      ).length ?? "0",
    );

    const numberOfPosts = Number(
      data[2].posts.filter((post) => post.author._id === data[0].user._id)
        .length ?? "0",
    );

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
