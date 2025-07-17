import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {/* Load the script asynchronously */}
        <Script src="/feature.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
