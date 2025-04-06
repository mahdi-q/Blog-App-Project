"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon
        className="border-none !text-success hover:!text-success lg:!text-inherit"
        varient="outline"
      >
        <PencilSquareIcon />
      </ButtonIcon>
    </Link>
  );
}

export function DeletePost({ id }) {
  return (
    <ButtonIcon
      className="border-none !text-error hover:!text-error lg:!text-inherit"
      varient="outline"
      onClick={() => console.log(id)}
    >
      <TrashIcon />
    </ButtonIcon>
  );
}
