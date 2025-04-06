import { Suspense } from "react";
import PostTable from "./_components/PostTable";
import Fallback from "@/ui/Fallback";

function PostsPage() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-secondary-800">لیست پست ها</h1>

      <Suspense fallback={<Fallback />}>
        <PostTable />
      </Suspense>
    </div>
  );
}
export default PostsPage;
