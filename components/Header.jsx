"use client";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures component is mounted on the client
  }, []);

  return (
    <header className="flex justify-end items-center p-5 space-x-4 text-sm dark:bg-primary">
      <Link
        href="https://mail.google.com"
        className="hover:underline text-gray-700 dark:text-gray-200"
      >
        Gmail
      </Link>
      <Link
        href="https://images.google.com"
        className="hover:underline text-gray-700 dark:text-gray-200"
      >
        Images
      </Link>
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        {mounted && currentTheme === "dark"
          ? <SunIcon className="h-6 w-6 text-gray-200" />
          : <MoonIcon className="h-6 w-6 text-gray-600" />}
      </button>
      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-200"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          />
        </svg>
      </button>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:brightness-105">
        Sign in
      </button>
    </header>
  );
}
