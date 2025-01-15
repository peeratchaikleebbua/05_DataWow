import NavBar from "@/features/_shared/components/sections/nav-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DataWow Post",
  description: "Post System",
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth()
  return (
    <section>
      <NavBar> {children}</NavBar>

      {/* <NavBar session={session}>{children}</NavBar>
      <FooterSection /> */}
    </section>
  );
}
