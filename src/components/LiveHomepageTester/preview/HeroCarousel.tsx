"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HeroBanner } from "./atoms";
import { PLACEHOLDER_PROMO_SLIDES } from "./previewContent";

const HeroCarousel = ({
  bannerUrl,
  headline,
}: {
  bannerUrl: string | null;
  headline: string;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const slideCount = 1 + PLACEHOLDER_PROMO_SLIDES.length;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-56 w-full">
              <HeroBanner bannerUrl={bannerUrl} className="h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <h1 className="absolute inset-x-4 bottom-4 text-lg font-extrabold text-white drop-shadow">
                {headline || "A homepage that gets noticed"}
              </h1>
            </div>
          </CarouselItem>
          {PLACEHOLDER_PROMO_SLIDES.map((slide) => (
            <CarouselItem key={slide.title}>
              <div
                className="flex h-56 w-full flex-col items-center justify-center gap-1 text-center text-white"
                style={{ backgroundColor: "var(--preview-accent)" }}
              >
                <span className="text-lg font-extrabold">{slide.title}</span>
                <span className="text-xs opacity-90">{slide.text}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {Array.from({ length: slideCount }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
