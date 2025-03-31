import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { useState } from "react";

function CommentForm() {
  const [text, setText] = useState("");

  return (
    <div className="mx-4">
      <form className="w-full space-y-2">
        <TextArea
          name="text"
          label="متن نظر"
          value={text}
          onChange={(e) => setText(e.target.value)}
          isRequired
        />

        <Button className="px-8 py-2">تایید</Button>
      </form>
    </div>
  );
}
export default CommentForm;
