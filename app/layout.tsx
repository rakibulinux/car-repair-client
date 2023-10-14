import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";

import "./globals.css";
import Providers from "@/lib/Providers";

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
            <ModalProvider />
            {children}
          </body>
        </html>
      </Providers>
    </>
  );
}
