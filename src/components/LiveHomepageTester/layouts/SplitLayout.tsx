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

const SplitLayout = ({
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
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <SiteLogo logoUrl={data.logoUrl} siteName={data.siteName} />
          <span className="text-sm font-bold text-foreground">
            {data.siteName || "Your Business"}
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
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
          <div className="space-y-3 px-5 py-5">
            <p className="text-sm font-semibold text-foreground">
              {data.headline || "A homepage that gets noticed"}
            </p>
            <CtaButton>Get Started</CtaButton>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 items-center gap-4 px-5 py-6">
          <div className="space-y-3">
            <h1 className="text-lg font-extrabold text-foreground">
              {data.headline || "A homepage that gets noticed"}
            </h1>
            <CtaButton>Get Started</CtaButton>
          </div>
          <HeroBanner
            bannerUrl={data.bannerUrl}
            className="h-36 w-full rounded-lg"
          />
        </div>
      )}

      <CategoryBadges align="left" />
      <StatsBlock variant="bar" />
      <FeaturesBlock variant="alternating" />
      <TestimonialBlock variant="side" siteName={data.siteName} />
      <PreviewFooter
        variant="split"
        siteName={data.siteName}
        navLinks={data.navLinks}
      />
    </div>
  );
};

export default SplitLayout;
