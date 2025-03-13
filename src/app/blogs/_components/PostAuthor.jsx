import Avatar from "@/ui/Avatar";
import truncateText from "@/utils/truncateText";

function PostAuthor({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar src={avatarUrl} />

      <span className="text-sm text-secondary-600">
        {truncateText(name, 5)}
      </span>
    </div>
  );
}
export default PostAuthor;
