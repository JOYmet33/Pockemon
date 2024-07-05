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
        <div className="max-w-screen-lg min-w-300px p-2.5 mx-auto my-3 text-center justify-center">
          <h1 className="text-3xl font-bold">포켓몬 도감</h1>
          <h4 className="text-yellow-400">오늘은 내가 포켓몬 마스터!!</h4>
          {children}
        </div>
      </body>
    </html>
  );
}
