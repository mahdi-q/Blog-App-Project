import { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
};

function BlogsLayout({ children }) {
  return (
    <div className="mb-12">
      <h1 className="mb-12 text-lg font-bold">لیست بلاگ ها</h1>

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
