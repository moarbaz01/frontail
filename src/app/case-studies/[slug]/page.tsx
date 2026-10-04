import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs } from "@/data/caseStudies";
import JsonLd from "@/components/JsonLd";
import CaseStudyHero from "@/components/CaseStudy/CaseStudyHero";
import ProjectSnapshot from "@/components/CaseStudy/ProjectSnapshot";
import ChallengeSolution from "@/components/CaseStudy/ChallengeSolution";
import DeepDiveSection from "@/components/CaseStudy/DeepDiveSection";
import FeatureBreakdown from "@/components/CaseStudy/FeatureBreakdown";
import ArchitectureSection from "@/components/CaseStudy/ArchitectureSection";
import DeliverablesSection from "@/components/CaseStudy/DeliverablesSection";
import RelatedServices from "@/components/CaseStudy/RelatedServices";
import RelatedCaseStudies from "@/components/CaseStudy/RelatedCaseStudies";
import TechStackList from "@/components/CaseStudy/TechStackList";
import StockHarvestingCaseStudy from "@/components/CaseStudy/StockHarvestingCaseStudy";
import HNEnterprisesCaseStudy from "@/components/CaseStudy/HNEnterprisesCaseStudy";
import CDR912CaseStudy from "@/components/CaseStudy/CDR912CaseStudy";
import DelykaStoreCaseStudy from "@/components/CaseStudy/DelykaStoreCaseStudy";
import VriyaPMSCaseStudy from "@/components/CaseStudy/VriyaPMSCaseStudy";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return {};

  return {
    title: caseStudy.seoTitle,
    description: caseStudy.seoDescription,
    keywords: caseStudy.keywords.join(", "),
    alternates: {
      canonical: `https://frontail.com/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      url: `https://frontail.com/case-studies/${caseStudy.slug}`,
      type: "article",
      images: [
        {
          url: `https://frontail.com${caseStudy.heroImage}`,
          alt: `${caseStudy.title} case study screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      images: [`https://frontail.com${caseStudy.heroImage}`],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const pageUrl = `https://frontail.com/case-studies/${caseStudy.slug}`;
  const caseStudySchema = {
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
            name: "Case Studies",
            item: "https://frontail.com/case-studies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: caseStudy.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        name: caseStudy.title,
        headline: caseStudy.subtitle,
        description: caseStudy.seoDescription,
        image: `https://frontail.com${caseStudy.heroImage}`,
        url: pageUrl,
        author: {
          "@type": "Organization",
          name: "Frontail Technologies",
          url: "https://frontail.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Frontail Technologies",
          url: "https://frontail.com",
          logo: {
            "@type": "ImageObject",
            url: "https://frontail.com/favicon.png",
          },
        },
        mainEntityOfPage: pageUrl,
        keywords: caseStudy.keywords.join(", "),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f3eb]">
      <JsonLd data={caseStudySchema} />

      {caseStudy.slug === "stock-harvesting" ? (
        <StockHarvestingCaseStudy caseStudy={caseStudy} />
      ) : caseStudy.slug === "hn-enterprises" ? (
        <HNEnterprisesCaseStudy caseStudy={caseStudy} />
      ) : caseStudy.slug === "cdr912" ? (
        <CDR912CaseStudy caseStudy={caseStudy} />
      ) : caseStudy.slug === "delyka-store" ? (
        <DelykaStoreCaseStudy caseStudy={caseStudy} />
      ) : caseStudy.slug === "vriya-pms" ? (
        <VriyaPMSCaseStudy caseStudy={caseStudy} />
      ) : (
        <>
          {/* Hero Header */}
          <CaseStudyHero caseStudy={caseStudy} />

          {/* Quick Snapshot */}
          <ProjectSnapshot caseStudy={caseStudy} />

          {/* The Challenge & What We Built */}
          <ChallengeSolution caseStudy={caseStudy} />

          {/* Deep-Dive Modules (if present) */}
          <DeepDiveSection caseStudy={caseStudy} />

          {/* Feature Breakdown */}
          <FeatureBreakdown caseStudy={caseStudy} />

          {/* Engineering & Architecture */}
          <ArchitectureSection caseStudy={caseStudy} />

          {/* Tech Stack List */}
          <TechStackList caseStudy={caseStudy} />

          {/* Delivered Outcomes */}
          <DeliverablesSection caseStudy={caseStudy} />

          {/* Related Services Links */}
          <RelatedServices caseStudy={caseStudy} />

          {/* Related Case Studies */}
          <RelatedCaseStudies
            currentSlug={caseStudy.slug}
            relatedSlugs={caseStudy.relatedSlugs}
          />
        </>
      )}
    </main>
  );
}
