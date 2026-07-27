import { ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PLACEHOLDER_FEATURES } from "./previewContent";

const icons = [Zap, ShieldCheck, Sparkles];

const FeaturesBlock = ({
  variant = "grid",
}: {
  variant?: "grid" | "alternating" | "stacked";
}) => {
  if (variant === "stacked") {
    return (
      <div className="space-y-5 px-5 py-6">
        {PLACEHOLDER_FEATURES.map((feature, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={feature.title} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 flex-none text-[var(--preview-accent)]" />
              <div>
                <p className="text-sm font-bold text-foreground">
                  {feature.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "alternating") {
    return (
      <div className="space-y-3 px-5 py-6">
        {PLACEHOLDER_FEATURES.map((feature, i) => {
          const Icon = icons[i % icons.length];
          const reverse = i % 2 === 1;
          return (
            <div
              key={feature.title}
              className={`flex items-center gap-3 rounded-md border border-border p-3 ${
                reverse ? "flex-row-reverse text-right" : ""
              }`}
            >
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-md text-[var(--preview-accent)]"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--preview-accent) 14%, transparent)",
                }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {feature.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-3 px-5 py-6 sm:grid-cols-3">
      {PLACEHOLDER_FEATURES.map((feature, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Card key={feature.title} className="gap-2 py-4">
            <CardContent className="space-y-2 px-4">
              <Icon className="h-5 w-5 text-[var(--preview-accent)]" />
              <p className="text-sm font-bold text-foreground">
                {feature.title}
              </p>
              <p className="text-xs text-muted-foreground">{feature.text}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default FeaturesBlock;
