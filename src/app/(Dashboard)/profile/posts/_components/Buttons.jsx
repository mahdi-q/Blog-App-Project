"use client";

import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import useDeletePost from "../_hooks/useDeletePost";
import { useRouter } from "next/navigation";

export function CreatePost() {
  return (
    <Link className="inline-block" href="/profile/posts/create">
      <Button
        varient="primary"
        className="flex items-center gap-x-2 justify-self-end py-2 lg:px-6 lg:py-3"
      >
        <PlusCircleIcon className="h-6 w-6" />

        <span>ایجاد پست</span>
      </Button>
    </Link>
  );
}

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

export function DeletePost({ post: { _id, title } }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { isDeleting, deletePost } = useDeletePost();

  return (
    <>
      <ButtonIcon
        className="border-none !text-error hover:!text-error lg:!text-inherit"
        varient="outline"
        onClick={() => setOpen(true)}
      >
        <TrashIcon />
      </ButtonIcon>

      <Modal
        title={`حذف پست ${title}`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ConfirmDelete
          resourceName={`پست ${title}`}
          onClose={() => setOpen(false)}
          disabled={isDeleting}
          onConfirm={(e) => {
            e.preventDefault();

            deletePost(_id, {
              onSuccess: () => {
                router.refresh("/profile/posts");
                setOpen(false);
              },
            });
          }}
        />
      </Modal>
    </>
  );
}
