"use client";

import { ChangeEvent } from "react";
import { Laptop, Plus, Smartphone, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DeviceKind } from "./DeviceFrame";
import { LayoutStyle } from "./PreviewHomepage";

export interface TesterState {
  siteName: string;
  headline: string;
  navLinks: string[];
  themeColor: string;
  layoutStyle: LayoutStyle;
  device: DeviceKind;
}

const layoutOptions: { value: LayoutStyle; label: string; description: string }[] = [
  { value: "centered", label: "Centered", description: "Classic & balanced" },
  { value: "split", label: "Split", description: "Modern & bold" },
  {
    value: "minimal",
    label: "Minimal",
    description: "Editorial & image-forward",
  },
];

const MAX_NAV_LINKS = 5;

const ControlsPanel = ({
  state,
  onChange,
  onLogoFile,
  onBannerFile,
  logoUrl,
  bannerUrl,
}: {
  state: TesterState;
  onChange: (patch: Partial<TesterState>) => void;
  onLogoFile: (file: File | null) => void;
  onBannerFile: (file: File | null) => void;
  logoUrl: string | null;
  bannerUrl: string | null;
}) => {
  const updateNavLink = (index: number, value: string) => {
    const next = [...state.navLinks];
    next[index] = value;
    onChange({ navLinks: next });
  };

  const removeNavLink = (index: number) => {
    onChange({ navLinks: state.navLinks.filter((_, i) => i !== index) });
  };

  const addNavLink = () => {
    if (state.navLinks.length >= MAX_NAV_LINKS) return;
    onChange({ navLinks: [...state.navLinks, ""] });
  };

  const handleFileInput =
    (setter: (file: File | null) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.files?.[0] || null);
    };

  return (
    <div className="space-y-5 rounded-md border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Build Your Preview
        </p>
        <ToggleGroup
          type="single"
          value={state.device}
          onValueChange={(value) =>
            value && onChange({ device: value as DeviceKind })
          }
          className="rounded-md border border-gray-300 p-0.5"
        >
          <ToggleGroupItem
            value="desktop"
            className="gap-1.5 text-xs data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            <Laptop className="h-3.5 w-3.5" /> Desktop
          </ToggleGroupItem>
          <ToggleGroupItem
            value="mobile"
            className="gap-1.5 text-xs data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            <Smartphone className="h-3.5 w-3.5" /> Mobile
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="site-name">Business / Site Name</Label>
        <Input
          id="site-name"
          value={state.siteName}
          onChange={(e) => onChange({ siteName: e.target.value })}
          placeholder="Your Business"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="headline">Headline</Label>
        <Input
          id="headline"
          value={state.headline}
          onChange={(e) => onChange({ headline: e.target.value })}
          placeholder="A homepage that gets noticed"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Logo</Label>
          <div className="flex items-center gap-2">
            {logoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoUrl}
                alt="Logo preview"
                className="h-9 w-9 rounded-md border border-gray-200 object-cover"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput(onLogoFile)}
              className="w-full text-xs text-gray-500 file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-gray-700"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="theme-color">Theme Color</Label>
          <input
            id="theme-color"
            type="color"
            value={state.themeColor}
            onChange={(e) => onChange({ themeColor: e.target.value })}
            className="h-10 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-1"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Banner Image</Label>
        <div className="flex items-center gap-2">
          {bannerUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={bannerUrl}
              alt="Banner preview"
              className="h-9 w-14 rounded-md border border-gray-200 object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput(onBannerFile)}
            className="w-full text-xs text-gray-500 file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-gray-700"
          />
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <Label>Nav Links</Label>
          {state.navLinks.length < MAX_NAV_LINKS && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={addNavLink}
              className="h-auto gap-1 p-0 text-xs font-semibold text-primary hover:bg-transparent hover:text-primary/80"
            >
              <Plus className="h-3.5 w-3.5" /> Add
            </Button>
          )}
        </div>
        <div className="space-y-2">
          {state.navLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-2">
              <Input
                value={link}
                onChange={(e) => updateNavLink(i, e.target.value)}
                placeholder={`Link ${i + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeNavLink(i)}
                aria-label="Remove link"
                className="flex-none text-gray-400 hover:text-gray-600"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Layout Style</Label>
        <ToggleGroup
          type="single"
          value={state.layoutStyle}
          onValueChange={(value) =>
            value && onChange({ layoutStyle: value as LayoutStyle })
          }
          className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3"
        >
          {layoutOptions.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="h-auto flex-col items-start gap-0.5 whitespace-normal rounded-md border border-gray-200 px-3 py-2.5 text-left data-[state=on]:border-primary data-[state=on]:bg-primary/10"
            >
              <span className="text-xs font-bold text-gray-900">
                {option.label}
              </span>
              <span className="text-[10px] font-normal text-gray-500">
                {option.description}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ControlsPanel;
