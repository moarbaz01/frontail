import { ReactNode } from "react";

export const Chip = ({ icon, text }: { icon?: ReactNode; text?: string }) => {
  return (
    <div
      // spotlightColor={"rgba(255, 255, 255, 0.5)"}
      className="flex items-center overflow-hidden bg-white/10 border-gray-300 border backdrop-blur-md rounded-full px-4 py-2 gap-2"
    >
      {icon && <div className="md:text-lg text-sm">{icon}</div>}
      <div className="md:text-sm text-xs">{text}</div>
    </div>
  );
};
