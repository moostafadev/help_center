import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Help Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}
