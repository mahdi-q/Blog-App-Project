import { Suspense } from "react";
import PostTable from "./_components/PostTable";
import Fallback from "@/ui/Fallback";
import SearchBox from "@/ui/SearchBox";
import { CreatePost } from "./_components/Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import { getAllPosts } from "@/services/postServices";
import SortButton from "@/ui/SortButton";

async function PostsPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  const { totalPages } = await getAllPosts(queries);

  return (
    <div>
      <div className="mb-12 grid grid-cols-2 items-center gap-x-8 gap-y-4 lg:grid-cols-4">
        <h1 className="text-xl font-bold text-secondary-800">لیست پست ها</h1>

        <div className="col-span-2 col-start-1 flex items-center gap-4 lg:col-span-2 lg:col-start-2">
          <div className="flex-1">
            <SearchBox />
          </div>

          <SortButton />
        </div>

        <div className="col-start-2 row-start-1 justify-self-end lg:col-start-4">
          <CreatePost />
        </div>
      </div>

      <Suspense fallback={<Fallback />}>
        <PostTable queries={queries} key={queries} />
      </Suspense>

      <div className="mt-5 flex w-full items-center justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
export default PostsPage;
