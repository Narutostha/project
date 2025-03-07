import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blu Away",
  description: "Experience the future of fashion with Blu Away. Join our exclusive collection launch.",
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