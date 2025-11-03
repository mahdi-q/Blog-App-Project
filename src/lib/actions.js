"use server";

import { createCommentApi } from "@/services/commentServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookiesStore = await cookies();
  const options = setCookiesOnReq(cookiesStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[postSlug]", "page");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    
    return {
      error,
    };
  }
}
