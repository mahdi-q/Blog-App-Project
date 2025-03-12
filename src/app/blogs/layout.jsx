export const metadata = {
  title: "بلاگ ها",
};

function BlogsLayout({ children }) {
  return (
    <div>
      <h1 className="mb-12 text-lg font-bold">لیست بلاگ ها</h1>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-4 text-secondary-500 lg:col-span-4 xl:col-span-5">
          Category List
        </div>

        <div className="col-span-12 lg:col-span-8 xl:col-span-7">
          {children}
        </div>
      </div>
    </div>
  );
}
export default BlogsLayout;
