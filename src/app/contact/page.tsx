import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Frontail Technologies to discuss MVP development, SaaS platforms, AI tools, mobile apps, Web3 products, and custom software.",
  alternates: {
    canonical: "https://frontail.com/contact",
  },
  openGraph: {
    title: "Contact Frontail Technologies",
    description:
      "Start your product development project with Frontail Technologies.",
    url: "https://frontail.com/contact",
  },
};

const Page = () => {
  return <Contact />;
};

export default Page;
