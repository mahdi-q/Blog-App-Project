import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

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
