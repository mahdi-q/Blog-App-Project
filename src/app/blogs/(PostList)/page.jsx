import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import PostList from "../_components/PostList";

async function BlogListPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}
export default BlogListPage;
