import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { Topbar, Sidebar } from "@/components";
import { AppProvider, KeyboardProvider } from "@/contexts";
import Keyboard from "@/components/Keyboard/Keyboard";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shorts",
  description: "Youtube Shorts Clone using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <AppProvider>
          <KeyboardProvider>
            <Topbar />
            <Sidebar />
            <Keyboard />
            {children}
          </KeyboardProvider>
        </AppProvider>
      </body>
    </html>
  );
}
