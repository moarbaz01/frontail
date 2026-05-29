import Work from "@/components/Work";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { projectsData } from "@/data";

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
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://frontail.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://frontail.com/projects",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Product Development Projects & Case Studies",
        url: "https://frontail.com/projects",
        description: metadata.description,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projectsData.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: project.title,
              description: project.description,
              url: project.link,
              image: `https://frontail.com${project.image}`,
              creator: {
                "@type": "Organization",
                name: "Frontail Technology",
                url: "https://frontail.com",
              },
              about: project.industry,
              keywords: project.techs.join(", "),
            },
          })),
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <Work />
    </>
  );
};

export default Page;
