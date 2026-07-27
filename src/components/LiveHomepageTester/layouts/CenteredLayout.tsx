import type { CSSProperties } from "react";
import { DeviceKind } from "../DeviceFrame";
import { PreviewData } from "../preview/types";
import { SiteLogo, HeroBanner, CtaButton } from "../preview/atoms";
import HeroCarousel from "../preview/HeroCarousel";
import CategoryBadges from "../preview/CategoryBadges";
import StatsBlock from "../preview/StatsBlock";
import FeaturesBlock from "../preview/FeaturesBlock";
import TestimonialBlock from "../preview/TestimonialBlock";
import PreviewFooter from "../preview/PreviewFooter";

const FALLBACK_NAV_LINKS = ["Home", "About", "Contact"];

const CenteredLayout = ({
  data,
  device,
}: {
  data: PreviewData;
  device: DeviceKind;
}) => {
  const links = data.navLinks.length ? data.navLinks : FALLBACK_NAV_LINKS;

  return (
    <div
      className="bg-background"
      style={{ "--preview-accent": data.themeColor } as CSSProperties}
    >
      <header className="flex flex-col items-center gap-3 border-b border-border px-5 py-4 text-center">
        <SiteLogo logoUrl={data.logoUrl} siteName={data.siteName} />
        <p className="text-sm font-bold text-foreground">
          {data.siteName || "Your Business"}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link, i) => (
            <span key={i} className="text-xs font-medium text-muted-foreground">
              {link}
            </span>
          ))}
        </nav>
      </header>

      {device === "mobile" ? (
        <>
          <HeroCarousel bannerUrl={data.bannerUrl} headline={data.headline} />
          <div className="flex justify-center px-5 py-4">
            <CtaButton>Get Started</CtaButton>
          </div>
        </>
      ) : (
        <div className="relative h-56 w-full">
          <HeroBanner bannerUrl={data.bannerUrl} className="h-full w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/25 px-6 text-center">
            <h1 className="text-xl font-extrabold text-white drop-shadow">
              {data.headline || "A homepage that gets noticed"}
            </h1>
            <CtaButton>Get Started</CtaButton>
          </div>
        </div>
      )}

      <CategoryBadges align="center" />
      <StatsBlock variant="grid" />
      <FeaturesBlock variant="grid" />
      <TestimonialBlock variant="card" siteName={data.siteName} />
      <PreviewFooter
        variant="columns"
        siteName={data.siteName}
        navLinks={data.navLinks}
      />
    </div>
  );
};

export default CenteredLayout;
