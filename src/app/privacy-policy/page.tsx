import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Frontail Technology",
  description:
    "Read how Frontail Technology collects, uses, stores, and protects personal information.",
  alternates: {
    canonical: "https://frontail.com/privacy-policy",
  },
};

const definitions = [
  {
    term: "Company",
    text: "means Frontail Technology, also referred to as Frontail, we, us, or our in this Privacy Policy.",
  },
  {
    term: "Service",
    text: "means our website, contact channels, project consultation, design, development, and support services.",
  },
  {
    term: "Personal Data",
    text: "means information that can identify a person directly or indirectly, such as name, email address, phone number, or message details.",
  },
  {
    term: "Usage Data",
    text: "means technical information collected automatically when you visit the website, such as browser type, pages visited, and device details.",
  },
  {
    term: "You",
    text: "means the visitor, client, prospect, or person using our website or services.",
  },
];

const collectedData = [
  "Name, email address, phone number, Telegram or WhatsApp contact details.",
  "Project requirements, business details, messages, files, and information you choose to share.",
  "Basic technical data such as device type, browser, pages visited, referring links, and approximate location.",
  "Communication history related to inquiries, consultations, estimates, support, or active projects.",
];

const uses = [
  "To respond to your inquiries and project requests.",
  "To understand your requirements and prepare proposals, estimates, or project plans.",
  "To provide design, development, deployment, maintenance, and support services.",
  "To communicate updates, approvals, deliverables, and important project information.",
  "To improve our website, services, user experience, and internal processes.",
  "To protect our website, prevent misuse, and comply with legal obligations.",
];

const disclosures = [
  "Service providers who help us operate the website, manage communication, host projects, or deliver technical services.",
  "Third-party platforms you choose to contact us through, such as WhatsApp, Telegram, email providers, hosting providers, or payment services.",
  "Legal authorities if required by law, regulation, valid legal request, or to protect our rights and users.",
  "Business transfers if Frontail Technology is involved in a merger, acquisition, restructuring, or asset transfer.",
];

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen px-4 pb-16 pt-28">
      <div className="mx-auto max-w-screen-lg">
        <article className="rounded-md   text-gray-700  ">
          <header className="mb-10 border-b border-gray-200 pb-8">
            <h1 className="font-anton text-4xl font-extrabold tracking-normal text-gray-900 md:text-5xl">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-4 text-sm font-semibold text-gray-500">
              Last updated: May 29, 2026
            </p>
            <p className="mt-6 max-w-3xl leading-relaxed text-gray-600">
              This Privacy Policy explains how Frontail Technology collects,
              uses, stores, and protects information when you visit our website,
              contact us, request a consultation, or work with us on a project.
              By using our website or services, you agree to the practices
              described in this policy.
            </p>
          </header>

          <div className="space-y-10">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Interpretation and Definitions
              </h2>
              <p className="mb-5 leading-relaxed">
                Words with capitalized first letters have the meanings defined
                below. These definitions apply whether they appear in singular
                or plural form.
              </p>
              <ul className="space-y-3">
                {definitions.map((item) => (
                  <li key={item.term} className="leading-relaxed">
                    <strong className="text-gray-900">{item.term}</strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Collecting and Using Your Personal Data
              </h2>
              <p className="mb-4 leading-relaxed">
                We collect information that you voluntarily provide and limited
                technical information that helps us operate and improve the
                website.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {collectedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Use of Your Personal Data
              </h2>
              <p className="mb-4 leading-relaxed">
                Frontail Technology may use personal information for the
                following purposes:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {uses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                Our website may use cookies or similar technologies to keep the
                site working properly, understand basic traffic patterns,
                improve performance, and remember preferences. You can set your
                browser to refuse cookies, but some parts of the website may not
                function properly.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Sharing Your Personal Data
              </h2>
              <p className="mb-4 leading-relaxed">
                We do not sell your personal data. We may share limited
                information only when needed for legitimate business, service,
                technical, or legal reasons.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {disclosures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Retention of Your Personal Data
              </h2>
              <p className="leading-relaxed">
                We keep personal data only for as long as reasonably necessary
                to respond to inquiries, provide services, maintain project
                records, resolve disputes, meet legal requirements, and improve
                our business operations.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Transfer of Your Personal Data
              </h2>
              <p className="leading-relaxed">
                Because we work remotely worldwide, your information may be
                processed through tools, servers, or service providers located
                outside your city, state, or country. We take reasonable steps
                to ensure your information is handled securely.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Your Rights
              </h2>
              <p className="leading-relaxed">
                Depending on your location, you may have the right to request
                access, correction, deletion, restriction, or a copy of your
                personal data. You may also ask us to stop contacting you for
                non-essential communication.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Security of Your Personal Data
              </h2>
              <p className="leading-relaxed">
                We use reasonable administrative and technical measures to
                protect personal information. However, no method of internet
                transmission or electronic storage is completely secure, so we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children. If you
                believe a child has shared information with us, please contact
                us so we can remove it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Links to Other Websites
              </h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites, apps, or
                services. We are not responsible for their content, security, or
                privacy practices. Please review their privacy policies before
                sharing information with them.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. When we do,
                we will update the date at the top of this page. Continued use
                of our website or services after changes means you accept the
                updated policy.
              </p>
            </section>

            <section className="rounded-md border border-primary/20 bg-primary/5 p-5">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                For privacy questions or data requests, contact us at{" "}
                <a
                  href="mailto:frontailtechnology@gmail.com"
                  className="font-semibold text-primary"
                >
                  frontailtechnology@gmail.com
                </a>{" "}
                or through our{" "}
                <Link href="/contact" className="font-semibold text-primary">
                  contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
