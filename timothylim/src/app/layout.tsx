import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
