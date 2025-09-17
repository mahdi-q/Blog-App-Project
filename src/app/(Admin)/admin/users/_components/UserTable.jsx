"use client";

import { useGetUsers } from "@/hooks/useUsers";
import Empty from "@/ui/Empty";
import Fallback from "@/ui/Fallback";
import Table from "@/ui/Table";
import UserRow from "./UserRow";
import Pagination from "@/ui/Pagination";

function UserTable({ queries, hasPagination = false }) {
  const { isLoading, users, totalPages } = useGetUsers(queries);

  if (isLoading) return <Fallback />;

  if (users.length === 0) return <Empty resourceName="کاربری" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام و نام‌خانوادگی</th>
          <th>ایمیل</th>
          <th>تاریخ ایجاد</th>
          <th>وضعیت</th>
        </Table.Header>

        <Table.Body>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} />
          ))}
        </Table.Body>
      </Table>

      {hasPagination && users && users.length > 0 && (
        <div className="mt-5 flex w-full items-center justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}

export default UserTable;
