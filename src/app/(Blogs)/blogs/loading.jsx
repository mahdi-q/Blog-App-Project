import Spinner from "@/ui/Spinner";

function BlogsLoading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-secondary-800">در حال بارگذاری اطلاعات ...</p>

      <Spinner />
    </div>
  );
}
export default BlogsLoading;
