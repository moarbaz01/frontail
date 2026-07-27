import { DeviceKind } from "./DeviceFrame";
import { PreviewData } from "./preview/types";
import CenteredLayout from "./layouts/CenteredLayout";
import SplitLayout from "./layouts/SplitLayout";
import MinimalLayout from "./layouts/MinimalLayout";

export type { LayoutStyle, PreviewData } from "./preview/types";

const PreviewHomepage = ({
  data,
  device,
}: {
  data: PreviewData;
  device: DeviceKind;
}) => {
  if (data.layoutStyle === "split") return <SplitLayout data={data} device={device} />;
  if (data.layoutStyle === "minimal") return <MinimalLayout data={data} device={device} />;
  return <CenteredLayout data={data} device={device} />;
};

export default PreviewHomepage;
