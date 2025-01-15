import type { Metadata } from "next";
import "./globals.css";
import ClientSideToastContainer from "@/features/_shared/libs/toast-provider";
import React from "react";
import QueryProvider from "@/features/_shared/libs/query-provider";
import { Castoro } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const castoro = Castoro({
  weight: '400',
  style: 'normal',
  display: "auto",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "DataWow",
  description: "DataWow Test",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={castoro.className}>
        <SessionProvider>
          <QueryProvider>
            <ClientSideToastContainer />
            {children}
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
