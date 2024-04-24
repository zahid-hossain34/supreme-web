import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import Hero from "@/components/hero";

import "swiper/css";
import "swiper/css/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supreme Lalbagians",
  description: "Supreme lalbagians is a cricket team from lalbagh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              <Hero />
              {children}
              <Footer />
              {/* <Toaster position="top-right" /> */}
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
      </body>
    </html>
  );
}
