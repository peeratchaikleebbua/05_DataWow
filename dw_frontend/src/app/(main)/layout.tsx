import type { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "TGO CFO",
  description: "CFO System",
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <section>
      {children}
      {/* <NavBar session={session}>{children}</NavBar>
      <FooterSection /> */}
    </section>
  );
}
