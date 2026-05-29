import Work from "@/components/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Development Projects & Case Studies",
  description:
    "Explore Frontail Technology projects across SaaS, EdTech, gaming, PropTech, sports platforms, mobile apps, and custom software.",
  alternates: {
    canonical: "https://frontail.com/projects",
  },
  openGraph: {
    title: "Product Development Projects & Case Studies",
    description:
      "See recent SaaS, app, platform, and custom software work by Frontail Technology.",
    url: "https://frontail.com/projects",
  },
};

const Page = () => {
  return <Work />;
};

export default Page;
