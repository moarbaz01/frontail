export type LayoutStyle = "centered" | "split" | "minimal";

export interface PreviewData {
  siteName: string;
  logoUrl: string | null;
  navLinks: string[];
  bannerUrl: string | null;
  headline: string;
  themeColor: string;
  layoutStyle: LayoutStyle;
}
