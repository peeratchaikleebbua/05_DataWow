import { auth, signOut } from "@/auth";
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
  const session = await auth();
  const userId = session?.account.id;

  if (!userId) {
    signOut();
  }

  return (
    <section>
      <NavBar userId={userId!}> {children}</NavBar>

      {/* <NavBar session={session}>{children}</NavBar>
      <FooterSection /> */}
    </section>
  );
}
