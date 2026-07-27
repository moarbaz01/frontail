import { ReactNode } from "react";

export type DeviceKind = "desktop" | "mobile";

const DeviceFrame = ({
  device,
  addressLabel,
  bottomBar,
  children,
}: {
  device: DeviceKind;
  addressLabel: string;
  bottomBar?: ReactNode;
  children: ReactNode;
}) => {
  if (device === "mobile") {
    return (
      <div className="mx-auto w-[280px] rounded-[2.4rem] border-[10px] border-gray-900 bg-gray-900 shadow-xl sm:w-[300px]">
        <div className="relative flex h-[560px] flex-col overflow-hidden rounded-[1.6rem] bg-white">
          <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
          <div className="flex-1 overflow-y-auto">{children}</div>
          {bottomBar && (
            <div className="relative z-10 flex-none">{bottomBar}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-gray-300 bg-white shadow-xl">
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 truncate rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500">
          {addressLabel}
        </div>
      </div>
      <div className="h-[480px] overflow-y-auto bg-white">{children}</div>
    </div>
  );
};

export default DeviceFrame;
