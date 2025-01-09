"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [country, setCountry] = useState("");
  const getCountry = async () => {
    const response = await fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env
        .NEXT_PUBLIC_EXTREME_IP_LOOKUP_API_KEY}`
    );
    const data = await response.json();
    return data.country;
  };

  useEffect(() => {
    getCountry().then(setCountry);
  }, []);

  return (
    <footer className="flex flex-col items-center justify-center w-full py-4 border-t dark:border-gray-700 bg-white dark:bg-secondary">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-8 border-b dark:border-gray-700 mb-3 pb-3">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>
            {country}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-8 mt-4 sm:mt-0">
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            Advertising
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            Business
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            How Search works
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
