import Image from "next/image";

function Avatar({ src, size = 24 }) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={size}
      height={size}
      className="rounded-full ring-1 ring-secondary-300"
      alt="user avatar"
    />
  );
}
export default Avatar;
