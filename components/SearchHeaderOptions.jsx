"use client";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q");

  function selectTab(tab) {
    const searchQuery = searchTerm.trim().replace(/\s+/g, "+");
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?q=${searchQuery}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-start pl-52 text-gray-700 dark:text-gray-200">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname ===
          "/search/web" && "!text-blue-600 !border-blue-600"}`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname ===
          "/search/image" && "!text-blue-600 !border-blue-600"}`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
