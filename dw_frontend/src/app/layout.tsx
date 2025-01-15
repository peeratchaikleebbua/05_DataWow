import type { Metadata } from "next";
import "./globals.css";
import ClientSideToastContainer from "@/features/_shared/libs/toast-provider";
import React from "react";
import QueryProvider from "@/features/_shared/libs/query-provider";
import { Kanit } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const kanit = Kanit({
  style: "normal",
  weight: "300",
  display: "auto",
  subsets: ["thai"],
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
      <body className={kanit.className}>
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
