import Spinner from "@/ui/Spinner";

function BlogsLoading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold">در حال بارگذاری پست ها</p>

      <Spinner />
    </div>
  );
}
export default BlogsLoading;
