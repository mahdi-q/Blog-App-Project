import { toPersianNumbers } from "@/utils/toPersianNumbers";
import {
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  users: UserGroupIcon,
  comments: ChatBubbleBottomCenterTextIcon,
  posts: DocumentIcon,
};

function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-secondary-200 p-2 shadow-sm">
      <div className="flex items-center gap-2 p-4 text-secondary-600">
        {Icon ? <Icon className="h-5 w-5" /> : null}

        <h3 className="text-sm font-medium">{title}</h3>
      </div>

      <p className="truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Card;
