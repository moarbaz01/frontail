import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const SiteLogo = ({
  logoUrl,
  siteName,
}: {
  logoUrl: string | null;
  siteName: string;
}) =>
  logoUrl ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoUrl}
      alt={siteName || "Logo"}
      className="h-8 w-8 rounded-md object-cover"
    />
  ) : (
    <span
      className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold text-white"
      style={{ backgroundColor: "var(--preview-accent)" }}
    >
      {(siteName || "Y").charAt(0).toUpperCase()}
    </span>
  );

export const HeroBanner = ({
  bannerUrl,
  className,
}: {
  bannerUrl: string | null;
  className?: string;
}) =>
  bannerUrl ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={bannerUrl}
      alt="Banner"
      className={`object-cover ${className || ""}`}
    />
  ) : (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-border bg-muted text-xs font-medium text-muted-foreground ${
        className || ""
      }`}
    >
      Banner image
    </div>
  );

export const CtaButton = ({ children }: { children: ReactNode }) => (
  <Button className="bg-[var(--preview-accent)] text-white shadow-lg shadow-black/10 hover:bg-[var(--preview-accent)] hover:opacity-90">
    {children}
  </Button>
);
