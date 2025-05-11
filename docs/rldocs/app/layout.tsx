import { RootProvider } from "fumadocs-ui/provider";
import { SearchProvider } from "fumadocs-ui/search"; // Orama search
import "fumadocs-ui/style.css"; // global CSS
import "./globals.css"; // your Tailwind
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "runrl Docs",
  description: "Reinforcement-learning utilities for real-world robotics",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background">
        {/* Orama full-text search, dark-mode aware */}
        <SearchProvider>
          <RootProvider>{children}</RootProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
