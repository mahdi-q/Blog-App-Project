"use client";

import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import { useGetPosts, useGetUserPosts } from "@/hooks/usePosts";
import Fallback from "@/ui/Fallback";
import Pagination from "@/ui/Pagination";

function PostTable({ queries, hasPagination = false }) {
  const { isLoading, posts, totalPages } = useGetPosts(queries);

  if (isLoading) return <Fallback />;

  if (posts.length === 0) return <Empty resourceName="پستی" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>دسته بندی</th>
          <th>نویسنده</th>
          <th>زمان مطالعه</th>
          <th>تاریخ ایجاد</th>
          <th>نوع</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {posts.map((post, index) => (
            <PostRow key={post._id} post={post} index={index} />
          ))}
        </Table.Body>
      </Table>

      {hasPagination && posts && posts.length > 0 && (
        <div className="mt-5 flex w-full items-center justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
export default PostTable;
