import type { Metadata } from "next";
import { Barlow, VT323 } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvide";
import ClientLayout from "@/components/ClientLayout";

const pixelFont = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Armen Asriyan",
  description: "Junior full-stack dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${barlow.className} ${pixelFont.variable} antialiased bg-background text-black dark:text-neutral`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
