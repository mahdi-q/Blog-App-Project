import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "./_components/CreatePostForm";

function CreatePostPage() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />

      <h1 className="text-xl font-bold text-secondary-800 mb-4">ایجاد پست جدید</h1>

      <CreatePostForm />
    </div>
  );
}
export default CreatePostPage;
