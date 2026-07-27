import { Grid2x2, Home, Search, User } from "lucide-react";

const icons = [Home, Grid2x2, Search, User];

const MobileTabBar = ({ navLinks }: { navLinks: string[] }) => {
  const links = (
    navLinks.length ? navLinks : ["Home", "About", "Contact"]
  ).slice(0, 4);

  return (
    <div className="flex items-center justify-around border-t border-border bg-background/95 py-2 backdrop-blur">
      {links.map((label, i) => {
        const Icon = icons[i % icons.length];
        const active = i === 0;
        return (
          <div
            key={label}
            className={`flex flex-col items-center gap-0.5 px-2 text-[9px] font-semibold ${
              active ? "text-[var(--preview-accent)]" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="max-w-[52px] truncate">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MobileTabBar;
