"use client";

import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

function SortButton() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [sortValue, setSortValue] = useState("desc");

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSetDesc = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("order", "desc");

    setSortValue("desc");
    setOpen(false);

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  const handleSetAsc = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("order", "asc");

    setSortValue("asc");
    setOpen(false);

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((is) => !is)}
        className="btn flex items-center gap-x-2 border border-secondary-300 px-4 py-3 text-sm font-normal text-secondary-600 hover:border-primary-900 hover:text-primary-900"
      >
        {sortValue === "desc" ? (
          <BarsArrowDownIcon className="h-5 w-5" />
        ) : (
          <BarsArrowUpIcon className="h-5 w-5"/>
        )}

        <span className="hidden leading-5 md:block">
          {sortValue === "desc" ? "جدیدترین" : "قدیمی‌ترین"}
        </span>
      </button>

      <div
        className={`${open ? "flex" : "hidden"} absolute left-0 mt-1 w-full min-w-[100px] flex-col items-center justify-center gap-y-1 rounded-md border border-secondary-300 bg-secondary-0 p-1`}
      >
        <button
          onClick={handleSetDesc}
          className="w-full rounded-md bg-secondary-200/50 py-2 text-secondary-900 transition-all duration-200 hover:text-primary-900"
        >
          جدیدترین
        </button>

        <button
          onClick={handleSetAsc}
          className="w-full rounded-md bg-secondary-200/50 py-2 text-secondary-900 transition-all duration-200 hover:text-primary-900"
        >
          قدیمی‌ترین
        </button>
      </div>
    </div>
  );
}

export default SortButton;