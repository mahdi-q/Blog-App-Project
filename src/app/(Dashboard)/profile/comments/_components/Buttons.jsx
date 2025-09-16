"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useDeleteComment from "../_hooks/useDeleteComment";

export function DeleteComment({
  comment: {
    _id,
    post: { title },
  },
}) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { isDeleting, deleteComment } = useDeleteComment();

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
        title={`حذف نظر از پست ${title}`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ConfirmDelete
          resourceName={`نظر خود`}
          onClose={() => setOpen(false)}
          disabled={isDeleting}
          onConfirm={(e) => {
            e.preventDefault();

            deleteComment(_id, {
              onSuccess: () => {
                router.refresh("/profile/comments");
                setOpen(false);
              },
            });
          }}
        />
      </Modal>
    </>
  );
}
