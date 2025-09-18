"use client";

import { useGetCategories } from "@/hooks/useCategories";
import Empty from "@/ui/Empty";
import Fallback from "@/ui/Fallback";
import Table from "@/ui/Table";
import Pagination from "@/ui/Pagination";
import CategoryRow from "./CategoryRow";

function CategoryTable({ queries, hasPagination = false }) {
  const { isLoading, rawCategories, totalPages } = useGetCategories(queries);

  if (isLoading) return <Fallback />;

  if (rawCategories.length === 0) return <Empty resourceName="دسته‌بندی‌ ای" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>عنوان انگلیسی</th>
          <th>توضیحات</th>
          <th>تاریخ ایجاد</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {rawCategories.map((category, index) => (
            <CategoryRow key={category._id} category={category} index={index} />
          ))}
        </Table.Body>
      </Table>

      {hasPagination && rawCategories && rawCategories.length > 0 && (
        <div className="mt-5 flex w-full items-center justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
export default CategoryTable;
