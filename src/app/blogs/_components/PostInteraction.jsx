import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function PostInteraction({ post }) {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon varient="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianNumbers(post.commentsCount)}</span>
      </ButtonIcon>

      <ButtonIcon varient="red">
        <HeartIcon />
      </ButtonIcon>

      <ButtonIcon varient="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}
export default PostInteraction;
