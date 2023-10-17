import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToasterProvider } from "@/components/toaster-provider";

import { ThemeProvider } from "@/components/theme-provider";
import Providers from "@/lib/Providers";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Repair Service",
  description: "Car Repair Service",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <html lang="en" suppressHydrationWarning>
          <body className={font.className}>
            <ToasterProvider />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </html>
      </Providers>
    </>
  );
}
