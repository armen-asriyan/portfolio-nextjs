import "../globals.css";
import type { Metadata } from "next";
import { Barlow, VT323 } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientLayout from "@/components/ClientLayout";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { generateAlternateLinks } from "@/lib/utils";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "layout",
  });

  const title = `${t("meta.title")}`;
  const description = t("meta.description");

  return {
    title,
    description,
    keywords: [
      "Armen Asriyan",
      "Armen Asryan",
      "junior full-stack developer",
      "portfolio",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
    ],
    alternates: generateAlternateLinks(locale),
    openGraph: {
      title,
      description,
      url:
        locale === "en"
          ? `https://www.armenasriyan.dev/`
          : `https://www.armenasriyan.dev/${locale}`,
      images: [
        {
          url: "https://www.armenasriyan.dev/media/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.armenasriyan.dev/media/og-image.png"],
      creator: "@armenasriyan",
    },
  };
}

// This metadata is used to generate the HTML tags in the <head> of the page
// It is used by search engines and social media platforms to understand the
// content of the page, and to generate previews of the page when it is shared
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Armen Asriyan",
  jobTitle: "Junior Full-Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayonne",
    addressRegion: "Nouvelle-Aquitaine",
    postalCode: "64100",
    addressCountry: "France",
  },
  description:
    "A personal website and portfolio of Armen Asriyan, a junior full-stack developer with experience in Next.js, React, TypeScript, Node.js, and various other technologies.",
  image: "https://www.armenasriyan.dev//media/og-image.png",
  sameAs: [
    "https://github.com/armen-asriyan",
    "https://www.www.linkedin.com/in/armen-asriyan/",
  ],
  url: "https://www.armenasriyan.dev/",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* JsonLd */}
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
          <NextIntlClientProvider locale={locale}>
            <ClientLayout>{children}</ClientLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
