export const metadata = {
  title: "Privacy Policy - Armen Asriyan",
  description:
    "Privacy policy explaining how personal data is collected, used, and protected on Armen Asriyan&apos;s portfolio website. GDPR compliant.",
  robots: "index, follow",
};

export default function Privacy() {
  return (
    <section
      className="h-fit w-full flex flex-col items-start justify-start px-10 md:px-16 py-10 md:py-24 scroll-mt-25"
      id="privacy-policy"
    >
      <h1 className="text-6xl font-light text-gray-900 dark:text-gray-300 mb-40">
        Privacy Policy
      </h1>

      <div className="text-lg text-gray-900 dark:text-gray-300 leading-8 space-y-8 max-w-4xl">
        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="introduction"
          >
            Introduction
          </h2>
          <p>
            This privacy policy explains how Armen Asriyan (&quot;I&quot;,
            &quot;me&quot;, &quot;my&quot;) collects, uses, and protects your
            personal information when you visit and interact with this website
            (armenasriyan.dev).
          </p>
          <p>
            This policy complies with the General Data Protection Regulation
            (GDPR) and French data protection laws.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="data-controller"
          >
            Data Controller
          </h2>
          <p>
            <strong>Data Controller:</strong>{" "}
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
            Information We Collect
          </h2>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="info-collected-contact-form"
          >
            Contact Form Data
          </h3>
          <p>When you use the contact form on this website, I collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message content</li>
            <li>The date and time of your submission</li>
          </ul>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="info-collected-cookies-and-local-storage"
          >
            Cookies and Local Storage
          </h3>

          <p>This website uses minimal data storage:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consent preferences:</strong> Your choice regarding the
              YouTube lofi radio feature is stored locally in your browser to
              remember your preference
            </li>
            <li>
              <strong>Third-party cookies:</strong> When you consent to load the
              YouTube lofi radio, YouTube may set cookies according to their
              privacy policy
            </li>
            <li>
              <strong>Theme preferences:</strong> Your choice regarding the
              website theme is stored locally in your browser to remember your
              preference
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="how-we-use-your-info"
          >
            How We Use Your Information
          </h2>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="how-we-use-contact-form-data"
          >
            Contact Form Data
          </h3>
          <p>I use your contact form information solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries</li>
            <li>Provide information you&apos;ve requested</li>
            <li>Maintain a record of our communication</li>
          </ul>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="legal-basis"
          >
            Legal Basis
          </h3>
          <p>
            I process your personal data based on your consent when you
            voluntarily submit the contact form and for my legitimate interest
            in responding to inquiries about my services.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="data-storage"
          >
            Data Storage and Retention
          </h2>

          <p>Your contact form data is stored in two locations:</p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Resend service:</strong> Form submissions are stored on
              Resend&apos;s servers for email delivery purposes
            </li>
            <li>
              <strong>Email inbox:</strong> I retain your messages in my email
              inbox as part of normal correspondence
            </li>
          </ul>
          <p>
            I keep your contact form messages for as long as necessary to
            respond to your inquiry and maintain business records. You can
            request deletion of your data at any time.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="third-party-services"
          >
            Third-Party Services
          </h2>

          <h3
            className="text-xl font-semibold mb-2 mt-6 scroll-mt-25"
            id="tps-resend"
          >
            Resend
          </h3>
          <p>
            I use Resend to handle contact form submissions. Resend processes
            your form data according to their privacy policy. You can view
            Resend&apos;s privacy policy at{" "}
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
            YouTube
          </h3>
          <p>
            When you consent to use the lofi radio feature, YouTube content is
            embedded on this website. YouTube may collect data according to
            their privacy policy. You can view YouTube&apos;s privacy policy at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 underline transition-colors duration-300 hover:text-gray-600 dark:hover:text-white"
            >
              https://policies.google.com/privacy
            </a>
          </p>
          <p className="mt-2">
            YouTube content only loads after you provide explicit consent, and
            your consent choice is stored locally in your browser.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="your-rights"
          >
            Your Rights
          </h2>
          <p>
            Under GDPR, you have the following rights regarding your personal
            data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Right of access:</strong> You can request a copy of the
              personal data I hold about you
            </li>
            <li>
              <strong>Right to rectification:</strong> You can request
              correction of inaccurate personal data
            </li>
            <li>
              <strong>Right to erasure:</strong> You can request deletion of
              your personal data
            </li>
            <li>
              <strong>Right to restrict processing:</strong> You can request
              that I limit how I use your data
            </li>
            <li>
              <strong>Right to data portability:</strong> You can request your
              data in a portable format
            </li>
            <li>
              <strong>Right to object:</strong> You can object to processing of
              your personal data
            </li>
            <li>
              <strong>Right to withdraw consent:</strong> You can withdraw
              consent at any time
            </li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, please contact me at
            hi@armenasriyan.dev. I will respond within 30 days.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="data-security"
          >
            Data Security
          </h2>
          <p>
            I implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet is 100% secure.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="changes-to-policy"
          >
            Changes to This Policy
          </h2>
          <p>
            I may update this privacy policy from time to time. Any changes will
            be posted on this page with an updated revision date. I encourage
            you to review this policy periodically.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className="text-2xl font-semibold mb-2 scroll-mt-25"
            id="contact-info"
          >
            Contact Information
          </h2>
          <p>
            If you have any questions about this privacy policy or how your data
            is handled, please contact me at:
          </p>
          <p className="my-4">
            <strong>Email:</strong>{" "}
            <span translate="no">hi@armenasriyan.dev</span>
          </p>
          <p>
            You also have the right to lodge a complaint with the French data
            protection authority (CNIL) if you believe your data protection
            rights have been violated.
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
          Last updated: 11/07/2025
        </p>
      </div>
    </section>
  );
}
