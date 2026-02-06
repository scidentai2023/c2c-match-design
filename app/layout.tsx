import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C2C Match Design",
  description: "C2C Match application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
