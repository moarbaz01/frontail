import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Frontail Technology",
  description:
    "Contact Frontail Technology to discuss MVP development, SaaS platforms, AI tools, mobile apps, Web3 products, and custom software.",
  alternates: {
    canonical: "https://frontail.com/contact",
  },
  openGraph: {
    title: "Contact Frontail Technology",
    description:
      "Start your product development project with Frontail Technology.",
    url: "https://frontail.com/contact",
  },
};

const Page = () => {
  return <Contact />;
};

export default Page;
