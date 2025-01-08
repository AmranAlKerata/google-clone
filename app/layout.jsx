import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Google Clone",
  description: "A Google Clone created with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
