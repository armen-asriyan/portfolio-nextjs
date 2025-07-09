import type { Metadata } from "next";
import { Barlow, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "Armen Asriyan - Junior Full-Stack Developer",
  description:
    "A personal website and portfolio of Armen Asriyan, a junior full-stack developer with experience in Next.js, React, TypeScript, Node.js, and various other technologies.",
  keywords: [
    "Armen Asriyan",
    "junior full-stack developer",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
  ],
  openGraph: {
    title: "Armen Asriyan - Junior Full-Stack Developer",
    description:
      "A personal website and portfolio of Armen Asriyan, a junior full-stack developer with experience in Next.js, React, TypeScript, Node.js, and various other technologies.",
    url: "https://armenasriyan.dev/",
    images: [
      {
        url: "https://armenasriyan.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Armen Asriyan - Junior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armen Asriyan - Junior Full-Stack Developer",
    description:
      "A personal website and portfolio of Armen Asriyan, a junior full-stack developer with experience in Next.js, React, TypeScript, Node.js, and various other technologies.",
    images: ["https://armenasriyan.dev/og-image.png"],
    creator: "@armenasriyan",
  },
};

// This metadata is used to generate the HTML tags in the <head> of the page
// It is used by search engines and social media platforms to understand the
// content of the page, and to generate previews of the page when it is shared
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Armen Asriyan",
  jobTitle: "Junior Full-Stack Developer",
  description:
    "A personal website and portfolio of Armen Asriyan, a junior full-stack developer with experience in Next.js, React, TypeScript, Node.js, and various other technologies.",
  image: "https://armenasriyan.dev/og-image.png",
  sameAs: [
    "https://github.com/armen-asriyan",
    "https://www.linkedin.com/in/armen-asriyan/",
  ],
  url: "https://armenasriyan.dev/",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
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
