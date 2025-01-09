import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export const metadata = {
  title: "Google Clone",
  description: "A Google Clone created with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
