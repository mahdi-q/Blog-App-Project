"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;

    const newParams = new URLSearchParams(searchParams.toString());

    newParams.set("page", 1);

    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="textField__input bg-secondary-0 py-3 text-xs"
      />

      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center justify-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-secondary-400 hover:text-primary-900" />
      </button>
    </form>
  );
}
export default SearchBox;
