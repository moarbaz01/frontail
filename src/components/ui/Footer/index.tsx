import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const pages = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "MVP Development",
  "Web & SaaS Development",
  "Mobile App Development",
];

const contact = [
  {
    label: "+91 8741035190",
    href: "https://wa.me/918741035190",
    icon: Phone,
  },
  {
    label: "frontailtechnology@gmail.com",
    href: "mailto:frontailtechnology@gmail.com",
    icon: Mail,
  },
  {
    label: "@arbazmr123",
    href: "https://t.me/arbazmr123",
    icon: Send,
  },
  {
    label: "Working remotely worldwide",
    href: "",
    icon: MapPin,
  },
];

const blogs = [
  {
    label: "MVP kill switch before launch",
    href: "/blog/mvp-kill-switch-before-launch",
  },
  {
    label: "No Code MVP stack ",
    href: "/blog/no-code-mvp-stack-saas-8k-mrr-60-days",
  },
  {
    label: "Wrong MVP how to know 48 hours",
    href: "/blog/wrong-mvp-how-to-know-48-hours",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f3eb] bg-dot-black/[0.06] px-4 py-12 text-gray-700 md:px-6">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.25fr_0.75fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="block w-fit">
              <Image
                src="/logo.svg"
                height={200}
                width={1000}
                className="h-14 w-auto"
                alt="Frontail Technology"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              We build fast, clean digital products for startups and growing
              businesses.
            </p>
            <Link
              href="/start-project"
              className="btn-3d mt-5 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
            >
              Start a Project
            </Link>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900">Pages</h3>
            <ul className="space-y-2 text-sm">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 mt-6 font-bold text-gray-900">Blog</h3>
            <ul className="space-y-2 text-sm">
              {blogs.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900">Contact</h3>
            <ul className="space-y-3 text-sm">
              {contact.map(({ label, href, icon: Icon }) => {
                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="break-all">{label}</span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-3 transition-colors hover:text-primary"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-300 pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Frontail. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span className="text-gray-500">Powered by Nuvex LLC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
