import { Provider } from "jotai";
import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taskify",
  description: "FE9 4 Team Taskify Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}