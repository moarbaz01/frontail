import DeviceFrame, { DeviceKind } from "./DeviceFrame";
import PreviewHomepage from "./PreviewHomepage";
import { PreviewData } from "./preview/types";
import MobileTabBar from "./preview/MobileTabBar";

const PreviewPanel = ({
  device,
  data,
}: {
  device: DeviceKind;
  data: PreviewData;
}) => {
  const addressLabel = `${(data.siteName || "yoursite")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")}.com`;

  return (
    <div className="flex flex-col items-center gap-3">
      <DeviceFrame
        device={device}
        addressLabel={addressLabel}
        bottomBar={
          device === "mobile" ? (
            <MobileTabBar navLinks={data.navLinks} />
          ) : undefined
        }
      >
        <PreviewHomepage data={data} device={device} />
      </DeviceFrame>
      <p className="text-xs font-medium text-gray-400">
        Live preview — updates as you type
      </p>
    </div>
  );
};

export default PreviewPanel;
