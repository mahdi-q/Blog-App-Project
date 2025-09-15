import Breadcrumbs from "@/ui/Breadcrumbs";
import { getPostByIdApi } from "@/services/postServices";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_components/CreatePostForm";

async function EditPostPage({ params: { postId } }) {
  const { post } = await getPostByIdApi(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="mb-12">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />

      <h1 className="mb-4 text-xl font-bold text-secondary-800">ویرایش پست</h1>

      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPostPage;
