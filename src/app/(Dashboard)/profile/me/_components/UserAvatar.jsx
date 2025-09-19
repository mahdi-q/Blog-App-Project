import Avatar from "@/ui/Avatar";
import { PencilIcon } from "@heroicons/react/24/outline";
import useUpdateAvatar from "../_hooks/useUpdateAvatar";

function UserAvatar({ avatarUrl }) {
  const { isUpdating, updateAvatar } = useUpdateAvatar();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    updateAvatar(formData);

    event.target.value = null;
  };

  return (
    <div className="relative">
      <Avatar src={avatarUrl} size={360} />

      <label
        htmlFor="avatar"
        className={`absolute bottom-3 right-14 inline-block cursor-pointer rounded-full border border-secondary-700 bg-secondary-300 p-3 text-secondary-700 transition-all duration-200 hover:border-primary-900 hover:text-primary-900 ${
          isUpdating ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <span>
          <PencilIcon className="h-5 w-5" />
        </span>

        <input
          id="avatar"
          type="file"
          className="sr-only"
          name="avatar"
          disabled={isUpdating}
          onChange={handleAvatarChange}
        />
      </label>
    </div>
  );
}

export default UserAvatar;
