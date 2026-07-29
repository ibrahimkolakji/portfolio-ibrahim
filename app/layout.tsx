import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Kolakji | Wirtschaftsinformatiker",
  description:
    "Portfolio von Ibrahim Kolakji – Wirtschaftsinformatiker mit Erfahrung in Webentwicklung, UX, Datenverarbeitung und IT-Projekten.",
  keywords: [
    "Ibrahim Kolakji",
    "Wirtschaftsinformatik",
    "React",
    "Next.js",
    "Webentwicklung",
    "IT Consulting",
    "Data",
    "Stuttgart",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}