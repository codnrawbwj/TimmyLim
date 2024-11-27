import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import RemoteController from "@/components/RemoteController";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sens",
});

export const metadata: Metadata = {
  title: "Timothy Lim",
  description: "Timothy Lim's Personal Website",
  openGraph: {
    title: `Timothy\'s Website`,
    description: "Personal Website created & designed by Timothy Lim",
    images: [
      {
        url: "/assets/notion_avatar.png",
        width: 576,
        height: 576,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.variable} antialiased`}>
        {children}
        <RemoteController />
      </body>
    </html>
  );
}
