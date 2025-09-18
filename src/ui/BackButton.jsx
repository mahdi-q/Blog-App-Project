"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 text-sm text-secondary-800 transition-all duration-200 hover:text-primary-900"
    >
      <ChevronRightIcon className="h-4 w-4" />

      <span>بازگشت</span>
    </button>
  );
}
export default BackButton;
