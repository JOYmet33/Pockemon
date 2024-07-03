import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description:
    "우리 포켓몬 도감에서 당신의 포켓몬에 대한 모든 것을 확인해보세요 :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-red-600 max-w-screen-lg min-w-300px">
          최상단 레이아웃이다. {children}
        </div>
      </body>
    </html>
  );
}
