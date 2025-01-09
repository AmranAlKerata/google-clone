"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

export default function SearchHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    if (searchTerm.trim() !== "") {
      const searchQuery = searchTerm.trim().replace(/\s+/g, "+");
      router.push(`/search/web/?q=${searchQuery}`);
    }
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-[#202124]">
      <div className="flex w-full p-6 items-center justify-between">
        <div className="flex items-center flex-1">
          <Link href="/">
            <Image
              width="120"
              height="40"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
              className="hidden dark:hidden sm:block"
            />
            <Image
              width="120"
              height="40"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
              className="hidden dark:sm:block"
            />
          </Link>
          <form
            onSubmit={handleSearch}
            className="flex border border-gray-200 dark:border-gray-700 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
          >
            <input
              type="text"
              className="w-full focus:outline-none dark:bg-[#202124] dark:text-white"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search Google or type a URL"
            />
            <button type="submit" className="text-blue-500 hover:text-blue-600">
              <AiOutlineSearch className="text-md w-6 h-6" />
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            {mounted &&
              (currentTheme === "dark"
                ? <SunIcon className="h-6 w-6 text-gray-200" />
                : <MoonIcon className="h-6 w-6 text-gray-600" />)}
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <RiSettings3Line className="text-2xl text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <TbGridDots className="text-2xl text-gray-600 dark:text-gray-300" />
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105">
            Sign in
          </button>
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
