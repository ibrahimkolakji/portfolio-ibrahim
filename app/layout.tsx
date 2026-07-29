import type { Metadata } from "next";
import { LanguageProvider } from "@/app/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Kolakji | Portfolio",
  description:
    "Portfolio von Ibrahim Kolakji – Wirtschaftsinformatik, Softwareentwicklung und IT-Consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}