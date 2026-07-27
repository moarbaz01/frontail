import type { CSSProperties } from "react";
import { DeviceKind } from "../DeviceFrame";
import { PreviewData } from "../preview/types";
import { HeroBanner, CtaButton } from "../preview/atoms";
import HeroCarousel from "../preview/HeroCarousel";
import CategoryBadges from "../preview/CategoryBadges";
import StatsBlock from "../preview/StatsBlock";
import FeaturesBlock from "../preview/FeaturesBlock";
import TestimonialBlock from "../preview/TestimonialBlock";
import PreviewFooter from "../preview/PreviewFooter";

const MinimalLayout = ({
  data,
  device,
}: {
  data: PreviewData;
  device: DeviceKind;
}) => {
  return (
    <div
      className="bg-background"
      style={{ "--preview-accent": data.themeColor } as CSSProperties}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm font-bold text-foreground">
          {data.siteName || "Your Business"}
        </span>
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--preview-accent)" }}
        />
      </div>

      <div className="relative">
        {device === "mobile" ? (
          <HeroCarousel bannerUrl={data.bannerUrl} headline={data.headline} />
        ) : (
          <div className="relative h-64 w-full">
            <HeroBanner bannerUrl={data.bannerUrl} className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-3 p-5">
              <h1 className="text-lg font-extrabold text-white drop-shadow">
                {data.headline || "A homepage that gets noticed"}
              </h1>
              <CtaButton>Get Started</CtaButton>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 z-10">
          <CategoryBadges align="overlay" />
        </div>
      </div>

      {device === "mobile" && (
        <div className="flex justify-center px-5 py-4">
          <CtaButton>Get Started</CtaButton>
        </div>
      )}

      <StatsBlock variant="spotlight" />
      <FeaturesBlock variant="stacked" />
      <TestimonialBlock variant="quote" siteName={data.siteName} />
      <PreviewFooter
        variant="minimal"
        siteName={data.siteName}
        navLinks={data.navLinks}
      />
    </div>
  );
};

export default MinimalLayout;
