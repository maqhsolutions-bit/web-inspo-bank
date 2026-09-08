import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Vault — Living Component & Inspiration Studio",
  description: "Curated collection of interactive UI components, animations, navbars, and bento grids for high-craft web builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
