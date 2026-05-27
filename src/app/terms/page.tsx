import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Frontail",
  description: "Read the terms and conditions for working with Frontail.",
};

const sections = [
  {
    title: "Use of Services",
    body: "Frontail provides design, development, consulting, and support services for digital products. By working with us, you agree to provide accurate project details, feedback, and approvals needed to complete the work.",
  },
  {
    title: "Project Scope",
    body: "Each project is guided by the agreed scope, timeline, and deliverables. Any new features, major revisions, or extra integrations may require a separate estimate.",
  },
  {
    title: "Payments",
    body: "Payment terms are shared before a project starts. Work may be paused if agreed payments are delayed. Final files, deployment, or handover may depend on payment completion.",
  },
  {
    title: "Content & Assets",
    body: "Clients are responsible for providing legal rights to any logos, images, text, accounts, or third-party assets supplied for the project.",
  },
  {
    title: "Revisions & Support",
    body: "Reasonable revisions are included according to the project agreement. Post-launch support, maintenance, and new features can be handled separately.",
  },
  {
    title: "Limitation of Liability",
    body: "We aim to deliver reliable work, but Frontail is not responsible for indirect losses, third-party service outages, or issues caused by changes made outside our control.",
  },
];

export default function TermsPage() {
  return (
    <section className="min-h-screen px-4 pb-16 pt-28">
      <div className="mx-auto max-w-screen-lg">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Simple terms for using our services and starting a project with
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
            Questions about these terms?{" "}
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
