import { getAllPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";

async function PostTable() {
  const posts = await getAllPosts();

  if (posts.length === 0) return <Empty resourceName="پستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {posts.map((post, index) => (
          <Table.Row></Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
export default PostTable;
