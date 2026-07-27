import { Badge } from "@/components/ui/badge";
import { PLACEHOLDER_CATEGORIES } from "./previewContent";

const CategoryBadges = ({
  align = "center",
}: {
  align?: "center" | "left" | "overlay";
}) => {
  const isOverlay = align === "overlay";

  return (
    <div
      className={`flex flex-wrap gap-2 overflow-x-auto ${
        isOverlay ? "" : "px-5 py-4"
      } ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      {PLACEHOLDER_CATEGORIES.map((cat) => (
        <Badge
          key={cat}
          variant="outline"
          className={
            isOverlay
              ? "shrink-0 border-white/40 bg-black/30 text-white backdrop-blur-sm"
              : "shrink-0 border-[var(--preview-accent)]/30 text-[var(--preview-accent)]"
          }
        >
          {cat}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryBadges;
