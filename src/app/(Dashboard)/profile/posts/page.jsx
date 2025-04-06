import PostTable from "./_components/PostTable";

function PostsPage() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-secondary-800">لیست پست ها</h2>

      <PostTable />
    </div>
  );
}
export default PostsPage;
