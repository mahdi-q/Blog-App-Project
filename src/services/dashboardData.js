import { cookies } from "next/headers";
import { getAllUsersApi } from "./authServices";
import { getAllCommentsApi } from "./commentServices";
import { getAllPosts } from "./postServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";

export async function fetchCardsData() {
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
    const numberOfPosts = Number(data[2].length ?? "0");

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
