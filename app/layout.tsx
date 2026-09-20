import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Northwind Technical Health Review",
  description: "Northwind Supply Co. Technical Health Review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}