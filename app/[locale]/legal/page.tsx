// "use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// export const metadata = {
//   title: "Legal Notice - Armen Asriyan",
//   description:
//     "Legal notice and mentions légales for Armen Asriyan's portfolio website, including contact information and hosting details.",
//   robots: "index, follow",
// };

import type { Metadata } from "next";
import { generateAlternateLinks } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "legalNotice",
  });

  return {
    title: `${t("meta.title")} - Armen Asriyan`,
    description: t("meta.description"),
    keywords: [
      "Legal notice",
      "Website ownership",
      "Armen Asriyan",
      "Contact information",
      "Impressum",
      "Hosting provider",
      "developer legal information",
      "portfolio legal disclosure",
    ],
    alternates: generateAlternateLinks(locale, "/legal"),
    robots: "index, follow",
    openGraph: {
      title: `${t("meta.title")} - Armen Asriyan`,
      description: t("meta.description"),
      url: "https://armenasriyan.dev/legal",
      images: [
        {
          url: "https://armenasriyan.dev/media/og-image.png",
          width: 1200,
          height: 630,
          alt: `${t("meta.title")} - Armen Asriyan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("meta.title")} - Armen Asriyan`,
      description: t("meta.description"),
      images: ["https://armenasriyan.dev/media/og-image.png"],
      creator: "@armenasriyan",
    },
  };
}

export default function Legal() {
  const t = useTranslations("legalNotice");

  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-10 md:px-16 py-10 md:py-24 scroll-mt-25"
      id="legal-notice"
    >
      <h1 className="text-5xl w-fit font-light text-gray-900 dark:text-gray-300 mb-30 -translate-x-[10px] wrap-break-word">
        {t("title")}
      </h1>

      <div className="text-lg text-gray-900 dark:text-gray-300 leading-8 space-y-8 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("siteInfo.title")}</h2>
          <p>
            <strong>{t("siteInfo.siteNameLabel")}:</strong>{" "}
            {t("siteInfo.siteName")}
          </p>
          <p>
            <strong>{t("siteInfo.urlLabel")}:</strong> {t("siteInfo.url")}
          </p>
          <p>
            <strong>{t("siteInfo.directorLabel")}:</strong>{" "}
            {t("siteInfo.director")}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("contact.title")}</h2>
          <p>
            <strong>{t("contact.nameLabel")}:</strong>{" "}
            <span translate="no">{t("contact.name")}</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span translate="no">hi@armenasriyan.dev</span>
          </p>
          <strong className="text-sm">{t("contact.notice")}</strong>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("hosting.title")}</h2>
          <p>
            <strong>{t("hosting.webHostLabel")}:</strong> {t("hosting.webHost")}
          </p>
          <p>
            <strong>{t("hosting.addressLabel")}:</strong> {t("hosting.address")}
          </p>
          <p>
            <strong>{t("hosting.websiteLabel")}:</strong> {t("hosting.website")}
          </p>
          <p>
            <strong>{t("hosting.domainProviderLabel")}:</strong>{" "}
            {t("hosting.domainProvider")}
          </p>
        </div>

        <div className="flex flex-col gap-5 mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("intellectual.title")}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t.raw("intellectual.paragraph1"),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t.raw("intellectual.paragraph2"),
            }}
          />
          <p>{t("intellectual.paragraph3")}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("personalData.title")}
          </h2>
          <p>
            {t("personalData.description")}{" "}
            <Link
              href="/privacy"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              {t("personalData.privacyPolicy")}
            </Link>
            .
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
          {t("lastUpdated")}: 11/07/2025
        </p>
      </div>
    </section>
  );
}
