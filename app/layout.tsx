import { Figtree } from "next/font/google";
import React from "react";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "MusicApp",
  description:
    "MusicApp a Spotify clone created by Dayo using Next.js 13, Tailwind CSS and TypeScript. 🔊🎶",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
