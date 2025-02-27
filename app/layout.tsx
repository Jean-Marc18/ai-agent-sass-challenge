import type { Metadata } from "next";
import { Gabarito, Poppins, Roboto } from "next/font/google";

import "./globals.css";

import ClientWrapper from "@/components/ClientWrapper";
import Header from "@/components/sections/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ayoshinah Ai",
  description: "Ayoshinah Ai Agent is a chatbot that helps you learn Sass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${poppins.variable} 
        ${roboto.variable}
        antialiased bg-slate-50 p-7
        `}
      >
        <ClientWrapper>
          <main className="font-roboto">{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
