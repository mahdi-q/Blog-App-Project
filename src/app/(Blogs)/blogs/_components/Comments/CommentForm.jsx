"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  message: "",
  error: "",
};

function CommentForm({ postId, parentId, onClose }) {
  const [text, setText] = useState("");

  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="mx-4">
      <form
        action={async (formData) => {
          await formAction({ formData, postId, parentId });
        }}
        className="w-full space-y-2"
      >
        <TextArea
          name="text"
          label="متن نظر"
          value={text}
          onChange={(e) => setText(e.target.value)}
          isRequired
        />

        <SubmitButton className="w-full py-3 text-center text-secondary-0">
          {parentId ? "ثبت پاسخ" : "ثبت نظر"}
        </SubmitButton>
      </form>
    </div>
  );
}
export default CommentForm;
