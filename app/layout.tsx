import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sushant Kapil | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Sushant Kapil — Full-Stack Developer & AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
