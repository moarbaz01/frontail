import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Frontail",
  description: "Read how Frontail collects and handles basic contact data.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect your name, email, phone number, project details, and messages when you contact us or submit a project inquiry.",
  },
  {
    title: "How We Use Information",
    body: "We use your information to respond to inquiries, discuss project requirements, prepare estimates, provide support, and improve our services.",
  },
  {
    title: "Sharing Information",
    body: "We do not sell your personal information. We may share limited details with trusted tools or service providers only when needed to deliver our services.",
  },
  {
    title: "Data Security",
    body: "We use reasonable measures to protect information shared with us. However, no online system can be guaranteed to be completely secure.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may link to third-party services such as WhatsApp, hosting providers, app stores, or client websites. Their privacy practices are governed by their own policies.",
  },
  {
    title: "Contact & Updates",
    body: "You can contact us to request updates or deletion of your information. We may update this policy as our services evolve.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen px-4 pb-16 pt-28">
      <div className="mx-auto max-w-screen-lg">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Policy
          </p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            How we handle contact details and project information shared with
            Frontail.
          </p>
        </div>

        <div className="rounded-md border border-gray-300 bg-white p-6 md:p-8">
          <div className="space-y-7">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-2 text-xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-gray-600">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600">
            Need help with a privacy request?{" "}
            <Link href="/contact" className="font-semibold text-primary">
              Contact us
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
