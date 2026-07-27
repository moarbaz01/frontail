"use client";

import { useCallback, useState } from "react";
import { useObjectUrl } from "@/app/hooks/useObjectUrl";
import ControlsPanel, { TesterState } from "./ControlsPanel";
import PreviewPanel from "./PreviewPanel";
import LeadCaptureCta from "./LeadCaptureCta";
import { DeviceKind } from "./DeviceFrame";

const LiveHomepageTester = ({
  defaultDevice = "desktop",
}: {
  defaultDevice?: DeviceKind;
}) => {
  const [state, setState] = useState<TesterState>({
    siteName: "",
    headline: "",
    navLinks: ["Home", "About", "Contact"],
    themeColor: "#fe7d02",
    layoutStyle: "centered",
    device: defaultDevice,
  });
  const [logoUrl, setLogoFile] = useObjectUrl();
  const [bannerUrl, setBannerFile] = useObjectUrl();

  const handleChange = useCallback((patch: Partial<TesterState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <ControlsPanel
          state={state}
          onChange={handleChange}
          onLogoFile={setLogoFile}
          onBannerFile={setBannerFile}
          logoUrl={logoUrl}
          bannerUrl={bannerUrl}
        />
        <PreviewPanel
          device={state.device}
          data={{
            siteName: state.siteName,
            logoUrl,
            navLinks: state.navLinks.filter(Boolean),
            bannerUrl,
            headline: state.headline,
            themeColor: state.themeColor,
            layoutStyle: state.layoutStyle,
          }}
        />
      </div>
      <LeadCaptureCta state={state} />
    </div>
  );
};

export default LiveHomepageTester;
