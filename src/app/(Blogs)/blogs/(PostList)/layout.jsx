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
      <div className="mb-12 grid grid-cols-1 items-center gap-8 text-secondary-700 lg:grid-cols-3">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>

        <SearchBox />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-4 text-secondary-500 md:col-span-3">
          <Suspense fallback={<Spinner size="small" />}>
            <CategoryList />
          </Suspense>
        </div>

        <div className="col-span-12 md:col-span-9">{children}</div>
      </div>
    </div>
  );
}
export default BlogsLayout;
