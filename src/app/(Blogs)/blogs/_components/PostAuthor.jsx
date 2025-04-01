import Avatar from "@/ui/Avatar";
import truncateText from "@/utils/truncateText";

function PostAuthor({ name, avatarUrl, isTruncate = false }) {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar src={avatarUrl} />

      <span className="text-sm text-secondary-600">
        {isTruncate ? truncateText(name, 5) : name}
      </span>
    </div>
  );
}
export default PostAuthor;
