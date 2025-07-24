// "use client";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// export const metadata = {
//   title: "Privacy Policy - Armen Asriyan",
//   description:
//     "Privacy policy explaining how personal data is collected, used, and protected on Armen Asriyan's portfolio website. GDPR compliant.",
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
    namespace: "privacyPolicy",
  });

  return {
    title: `${t("meta.title")} - Armen Asriyan`,
    description: t("meta.description"),
    keywords: [
      "Privacy policy",
      "GDPR",
      "data protection",
      "personal data",
      "Armen Asriyan",
      "portfolio privacy",
      "contact form data",
    ],
    alternates: generateAlternateLinks(locale, "/privacy"),
    robots: "index, follow",
    openGraph: {
      title: `${t("meta.title")} - Armen Asriyan`,
      description: t("meta.description"),
      url: "https://www.armenasriyan.dev/privacy",
      images: [
        {
          url: "https://www.armenasriyan.dev/media/og-image.png",
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
      images: ["https://www.armenasriyan.dev/media/og-image.png"],
      creator: "@armenasriyan",
    },
  };
}

export default function Privacy() {
  const t = useTranslations("privacyPolicy");

  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-10 md:px-16 py-10 md:py-24 scroll-mt-25"
      id="privacy-policy"
    >
      <h1 className="text-5xl w-fit font-light text-gray-900 dark:text-gray-300 mb-30 -translate-x-[10px] wrap-break-word">
        {t("title")}
      </h1>

      <div className="text-lg text-gray-900 dark:text-gray-300 leading-8 space-y-8 max-w-4xl">
        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="introduction"
          >
            {t("introduction.title")}
          </h2>
          <p>{t("introduction.paragraph1")}</p>
          <p>{t("introduction.paragraph2")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="data-controller"
          >
            {t("dataController.title")}
          </h2>
          <p>
            <strong>{t("dataController.controller")}</strong>{" "}
            <span translate="no">Armen Asriyan</span>
            <br />
            <strong>Email: </strong>
            <span translate="no">hi@armenasriyan.dev</span>
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="information-collected"
          >
            {t("informationCollected.title")}
          </h2>

          <h3
            className="text-xl font-semibold mb-4 mt-6 scroll-mt-25"
            id="info-collected-contact-form"
          >
            {t("informationCollected.contactFormData.title")}
          </h3>
          <p className="mb-2">
            {t("informationCollected.contactFormData.description")}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("informationCollected.contactFormData.items.name")}</li>
            <li>{t("informationCollected.contactFormData.items.email")}</li>
            <li>{t("informationCollected.contactFormData.items.message")}</li>
            <li>{t("informationCollected.contactFormData.items.timestamp")}</li>
          </ul>

          <h3
            className="text-xl font-semibold mb-4 mt-6 scroll-mt-25"
            id="info-collected-cookies-and-local-storage"
          >
            {t("informationCollected.cookiesAndLocalStorage.title")}
          </h3>

          <p className="mb-2">
            {t("informationCollected.cookiesAndLocalStorage.description")}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consent preferences:</strong>{" "}
              {t(
                "informationCollected.cookiesAndLocalStorage.items.consentPreferences"
              )}
            </li>
            <li>
              <strong>Third-party cookies:</strong>{" "}
              {t(
                "informationCollected.cookiesAndLocalStorage.items.thirdPartyCookies"
              )}
            </li>
            <li>
              <strong>Theme preferences:</strong>{" "}
              {t(
                "informationCollected.cookiesAndLocalStorage.items.themePreferences"
              )}
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="how-we-use-your-info"
          >
            {t("howWeUseInfo.title")}
          </h2>

          <h3
            className="text-xl font-semibold mb-4 mt-6 scroll-mt-25"
            id="how-we-use-contact-form-data"
          >
            {t("howWeUseInfo.contactFormData.title")}
          </h3>
          <p className="mb-2">
            {t("howWeUseInfo.contactFormData.description")}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("howWeUseInfo.contactFormData.items.respond")}</li>
            <li>{t("howWeUseInfo.contactFormData.items.provide")}</li>
            <li>{t("howWeUseInfo.contactFormData.items.maintain")}</li>
          </ul>

          <h3
            className="text-xl font-semibold mb-4 mt-6 scroll-mt-25"
            id="legal-basis"
          >
            {t("howWeUseInfo.legalBasis.title")}
          </h3>
          <p>{t("howWeUseInfo.legalBasis.description")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="data-storage"
          >
            {t("dataStorage.title")}
          </h2>

          <p className="mb-2">{t("dataStorage.description")}</p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Resend service:</strong>{" "}
              {t("dataStorage.locations.resend")}
            </li>
            <li>
              <strong>Email inbox:</strong> {t("dataStorage.locations.email")}
            </li>
          </ul>
          <p>{t("dataStorage.retention")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="third-party-services"
          >
            {t("thirdPartyServices.title")}
          </h2>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="tps-resend"
          >
            {t("thirdPartyServices.resend.title")}
          </h3>
          <p>
            {t("thirdPartyServices.resend.description")}{" "}
            <a
              href="https://resend.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              https://resend.com/privacy
            </a>
          </p>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="tps-youtube"
          >
            {t("thirdPartyServices.youtube.title")}
          </h3>
          <p>
            {t("thirdPartyServices.youtube.description")}{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              https://policies.google.com/privacy
            </a>
          </p>
          <p className="mt-2">{t("thirdPartyServices.youtube.consentNote")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="your-rights"
          >
            {t("yourRights.title")}
          </h2>
          <p className="mb-2">{t("yourRights.description")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Right of access:</strong> {t("yourRights.rights.access")}
            </li>
            <li>
              <strong>Right to rectification:</strong>{" "}
              {t("yourRights.rights.rectification")}
            </li>
            <li>
              <strong>Right to erasure:</strong>{" "}
              {t("yourRights.rights.erasure")}
            </li>
            <li>
              <strong>Right to restrict processing:</strong>{" "}
              {t("yourRights.rights.restrict")}
            </li>
            <li>
              <strong>Right to data portability:</strong>{" "}
              {t("yourRights.rights.portability")}
            </li>
            <li>
              <strong>Right to object:</strong> {t("yourRights.rights.object")}
            </li>
            <li>
              <strong>Right to withdraw consent:</strong>{" "}
              {t("yourRights.rights.withdraw")}
            </li>
          </ul>
          <p className="mt-2">{t("yourRights.exerciseRights")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="data-security"
          >
            {t("dataSecurity.title")}
          </h2>
          <p>{t("dataSecurity.description")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="changes-to-policy"
          >
            {t("changesToPolicy.title")}
          </h2>
          <p>{t("changesToPolicy.description")}</p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4 scroll-mt-25"
            id="contact-info"
          >
            {t("contactInfo.title")}
          </h2>
          <p>{t("contactInfo.description")}</p>
          <p className="my-4">
            <strong>Email:</strong>{" "}
            <span translate="no">hi@armenasriyan.dev</span>
          </p>
          <p>{t("contactInfo.complaint")}</p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
          {t("lastUpdated")}: 11/07/2025
        </p>
      </div>
    </section>
  );
}
