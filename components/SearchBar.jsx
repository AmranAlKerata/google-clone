"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon, CameraIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    console.log(query);
    router.push(`/search/web/?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex items-center w-[584px] border dark:border-gray-700 rounded-full hover:shadow-md focus-within:shadow-md px-5 py-3 space-x-4 bg-white dark:bg-gray-800">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          name="query"
          className="flex-grow focus:outline-none bg-transparent dark:text-white"
          placeholder="Search Google or type a URL"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="flex space-x-3">
          <MicrophoneIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
          <CameraIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
        <button
          type="submit"
          className="px-4 py-2 bg-[#f8f9fa] dark:bg-gray-800 text-sm hover:shadow-md rounded text-gray-800 dark:text-gray-200 hover:border-gray-200 dark:hover:border-gray-700 border border-transparent"
        >
          Google Search
        </button>
        <button className="px-4 py-2 bg-[#f8f9fa] dark:bg-gray-800 text-sm hover:shadow-md rounded text-gray-800 dark:text-gray-200 hover:border-gray-200 dark:hover:border-gray-700 border border-transparent">
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
}
