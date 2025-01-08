import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative h-[92px] w-[272px]">
            <Image
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
              alt="Google Logo"
              fill
              className="object-contain hidden dark:block"
              priority
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png"
              alt="Google Logo"
              fill
              className="object-contain block dark:hidden"
              priority
            />
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
