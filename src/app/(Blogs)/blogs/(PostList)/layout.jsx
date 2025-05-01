import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";
import SearchBox from "@/ui/SearchBox";

export const metadata = {
  title: "بلاگ ها",
};

function BlogsLayout({ children }) {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-12 grid grid-cols-1 items-center gap-8 text-secondary-700 lg:grid-cols-3">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>

        <SearchBox />
      </div>

      {/* Body */}
      <div className="grid grid-cols-12">
        {/* Category List */}
        <div className="col-span-12 space-y-4 pl-6 text-secondary-500 md:col-span-3 xl:col-span-2">
          <Suspense fallback={<Spinner size="small" />}>
            <CategoryList />
          </Suspense>
        </div>

        {/* Blogs List */}
        <div className="col-span-12 md:col-span-9 lg:pr-4 xl:col-span-10">
          {children}
        </div>
      </div>
    </div>
  );
}
export default BlogsLayout;
