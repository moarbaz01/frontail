import { Card } from "@/components/ui/card";
import { PLACEHOLDER_STATS } from "./previewContent";

const StatsBlock = ({
  variant = "grid",
}: {
  variant?: "grid" | "bar" | "spotlight";
}) => {
  if (variant === "bar") {
    return (
      <div className="flex flex-wrap items-center justify-center divide-x divide-border border-y border-border px-5 py-4">
        {PLACEHOLDER_STATS.map((stat) => (
          <div key={stat.label} className="flex-1 px-4 text-center">
            <p className="text-lg font-extrabold text-[var(--preview-accent)]">
              {stat.value}
            </p>
            <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "spotlight") {
    const [hero, ...rest] = PLACEHOLDER_STATS;
    return (
      <div className="px-5 py-6 text-center">
        <p className="text-4xl font-extrabold text-[var(--preview-accent)]">
          {hero.value}
        </p>
        <p className="text-xs font-medium text-muted-foreground">
          {hero.label}
        </p>
        <div className="mt-4 flex justify-center gap-6">
          {rest.map((stat) => (
            <div key={stat.label}>
              <p className="text-sm font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 px-5 py-6 sm:grid-cols-4">
      {PLACEHOLDER_STATS.map((stat) => (
        <Card key={stat.label} className="items-center gap-1 py-4 text-center">
          <p className="text-xl font-extrabold text-[var(--preview-accent)]">
            {stat.value}
          </p>
          <p className="text-[10px] font-medium text-muted-foreground">
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default StatsBlock;
