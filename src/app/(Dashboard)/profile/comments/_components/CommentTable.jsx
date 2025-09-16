"use client";

import { useGetUserComments } from "@/hooks/useComments";
import Empty from "@/ui/Empty";
import Fallback from "@/ui/Fallback";
import Pagination from "@/ui/Pagination";
import Table from "@/ui/Table";
import CommentRow from "./CommentRow";

function CommentTable({ queries, hasPagination = false }) {
  const { isLoading, comments, totalPages } = useGetUserComments(queries);

  console.log(comments);

  if (isLoading) return <Fallback />;

  if (comments.length === 0) return <Empty resourceName="نظری" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>متن نظر</th>
          <th>پست</th>
          <th>تعداد پاسخ</th>
          <th>تاریخ ایجاد</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {comments.map((comment, index) => (
            <CommentRow key={comment._id} comment={comment} index={index} />
          ))}
        </Table.Body>
      </Table>

      {hasPagination && comments && comments.length > 0 && (
        <div className="mt-5 flex w-full items-center justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
export default CommentTable;
