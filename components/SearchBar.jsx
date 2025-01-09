"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon, CameraIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() !== "") {
      const searchQuery = query.trim().replace(/\s+/g, "+");
      router.push(`/search/web/?q=${searchQuery}`);
    }
  };

  const randomSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      const data = await response.json();
      const randomQuery = data[0];
      console.log(randomQuery);
      router.push(`/search/web/?q=${randomQuery}`);
    } catch (error) {
      router.push(`/search/web/?q=random`);
    } finally {
      setLoading(false);
    }
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
          {loading ? "Searching..." : "Google Search"}
        </button>
        <button
          type="button"
          onClick={randomSearch}
          className="flex items-center justify-center px-4 py-2 bg-[#f8f9fa] dark:bg-gray-800 text-sm hover:shadow-md rounded text-gray-800 dark:text-gray-200 hover:border-gray-200 dark:hover:border-gray-700 border border-transparent"
        >
          {loading
            ? <span type="button" className="cursor-not-allowed" disabled="">
                <svg
                  className="animate-spin h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
            : "I'm Feeling Lucky"}
        </button>
      </div>
    </form>
  );
}
