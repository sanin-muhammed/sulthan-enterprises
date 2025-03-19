import type { Metadata } from "next";
import { Geist, Geist_Mono, Big_Shoulders_Stencil_Text } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bigShouldersStencil = Big_Shoulders_Stencil_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-big-shoulders-stencil",
});

export const metadata: Metadata = {
  title: "Sulthan Enterprises",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bigShouldersStencil.variable}`}>
        {children}
      </body>
    </html>
  );
}
