import { Suspense } from "react";
import PostTable from "./_components/PostTable";
import Fallback from "@/ui/Fallback";
import SearchBox from "@/ui/SearchBox";
import { CreatePost } from "./_components/Buttons";
import queryString from "query-string";

function PostsPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  return (
    <div>
      <div className="mb-12 grid grid-cols-2 items-center gap-8 lg:grid-cols-3">
        <h1 className="text-xl font-bold text-secondary-800">لیست پست ها</h1>

        <div className="col-span-2 col-start-1 lg:col-span-1 lg:col-start-2">
          <SearchBox />
        </div>

        <div className="col-start-2 row-start-1 lg:col-start-3">
          <CreatePost />
        </div>
      </div>

      <Suspense fallback={<Fallback />}>
        <PostTable queries={queries} key={queries} />
      </Suspense>
    </div>
  );
}
export default PostsPage;
