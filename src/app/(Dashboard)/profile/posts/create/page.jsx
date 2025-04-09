import Breadcrumbs from "@/ui/Breadcrumbs";

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
      
      Create Post Page
    </div>
  );
}
export default CreatePostPage;
