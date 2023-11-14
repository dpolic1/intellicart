import Header from "@/components/common/header/Index";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intellicart",
  description: "Intellicart is a new shopping experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black py-8`}>
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
