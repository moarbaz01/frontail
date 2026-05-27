import Work from "@/components/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Frontail Technology",
  description: "Explore some of our recent work. We build scalable, beautiful, and high-performance digital products for startups and enterprises.",
};

const Page = () => {
  return <Work />;
};

export default Page;
