import Link from "next/link";

export const metadata = {
  title: "Legal Notice - Armen Asriyan",
  description:
    "Legal notice and mentions légales for Armen Asriyan's portfolio website, including contact information and hosting details.",
  robots: "index, follow",
};

export default function Legal() {
  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-10 md:px-16 py-10 md:py-24 scroll-mt-25"
      id="legal-notice"
    >
      <h1 className="text-6xl font-light text-gray-900 dark:text-gray-300 mb-40">
        Legal Notice
      </h1>

      <div className="text-lg text-gray-900 dark:text-gray-300 leading-8 space-y-8 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Site Information</h2>
          <p>
            <strong>Site name:</strong> Armen Asriyan - Junior Full-Stack
            Developer
          </p>
          <p>
            <strong>URL:</strong> https://armenasriyan.dev/
          </p>
          <p>
            <strong>Publication Director:</strong> Armen Asriyan
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            <strong>Name:</strong> <span translate="no">Armen Asriyan</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span translate="no">hi@armenasriyan.dev</span>
          </p>
          <strong className="text-sm">
            Complete contact details available upon written request to the above
            email address.
          </strong>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Hosting Information</h2>
          <p>
            <strong>Web Host:</strong> Vercel Inc.
          </p>
          <p>
            <strong>Address:</strong> 650 California St, San Francisco, CA
            94108, USA
          </p>
          <p>
            <strong>Website:</strong> https://vercel.com
          </p>
          <p>
            <strong>Domain Provider:</strong> Hostinger International Ltd.
          </p>
        </div>

        <div className="flex flex-col gap-5 mb-12">
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            Unless otherwise stated, the textual content and custom visuals on
            this website are the property of Armen Asriyan. Icons used on this
            site are sourced from open-source libraries such as{" "}
            <a
              href="https://lucide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              Lucide
            </a>{" "}
            and{" "}
            <a
              href="https://simpleicons.org"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-900 dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              Simple Icons
            </a>{" "}
            and are used in accordance with their respective licenses.
          </p>
          <p>
            This site also includes embedded content from third-party platforms
            such as{" "}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              YouTube
            </a>{" "}
            and may feature images or sounds sourced under various licenses.
          </p>
          <p>
            All third-party content remains the property of its respective
            owners. Any unauthorized reproduction, modification, or use of
            original content from this site is strictly prohibited without prior
            written consent.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Personal Data</h2>
          <p>
            For information about how we collect and process personal data,
            please see our{" "}
            <Link
              href="/privacy"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
          Last updated: 11/07/2025
        </p>
      </div>
    </section>
  );
}
