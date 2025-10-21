"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingProps {
  calLink?: string;
  className?: string;
}

const CalBooking = ({ 
  calLink = "Frontail/30min", 
  className = "w-full h-[600px]" 
}: CalBookingProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#18DC60" } },
      });
    })();
  }, []);

  return (
    <div className={className}>
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ theme: "dark" }}
      />
    </div>
  );
};

export default CalBooking;