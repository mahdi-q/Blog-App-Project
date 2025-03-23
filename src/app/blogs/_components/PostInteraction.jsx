"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as BookmarkIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PostInteraction({ post }) {
  console.log(post);

  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <ButtonIcon varient="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianNumbers(post.commentsCount)}</span>
      </ButtonIcon>

      <ButtonIcon varient="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <HeartIconSolid /> : <HeartIcon />}
        <span>{toPersianNumbers(post.likesCount)}</span>
      </ButtonIcon>

      <ButtonIcon varient="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <BookmarkIconSolid /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}
export default PostInteraction;
