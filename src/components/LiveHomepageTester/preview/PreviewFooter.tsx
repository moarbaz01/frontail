import { Separator } from "@/components/ui/separator";

const PreviewFooter = ({
  variant = "columns",
  siteName,
  navLinks,
}: {
  variant?: "columns" | "split" | "minimal";
  siteName: string;
  navLinks: string[];
}) => {
  const displayName = siteName || "Your Business";
  const links = navLinks.length ? navLinks : ["Home", "About", "Contact"];
  const year = new Date().getFullYear();

  if (variant === "minimal") {
    return (
      <div className="bg-foreground px-5 py-5 text-center text-background">
        <p className="text-sm font-bold">{displayName}</p>
        <p className="mt-1 text-[10px] text-background/60">
          © {year} {displayName}. All rights reserved.
        </p>
      </div>
    );
  }

  if (variant === "split") {
    return (
      <div className="bg-muted/40 px-5 py-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-foreground">
              {displayName}
            </p>
            <p className="mt-1 max-w-[160px] text-[10px] text-muted-foreground">
              Building something people love.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                Menu
              </p>
              {links.map((link) => (
                <p key={link} className="text-xs text-foreground">
                  {link}
                </p>
              ))}
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                Support
              </p>
              <p className="text-xs text-foreground">Contact</p>
              <p className="text-xs text-foreground">FAQ</p>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <p className="text-[10px] text-muted-foreground">
          © {year} {displayName}. All rights reserved.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-muted/40 px-5 py-6">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        <div>
          <p className="text-sm font-bold text-foreground">{displayName}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Building something people love.
          </p>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
            Pages
          </p>
          {links.map((link) => (
            <p key={link} className="text-xs text-foreground">
              {link}
            </p>
          ))}
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
            Company
          </p>
          <p className="text-xs text-foreground">About</p>
          <p className="text-xs text-foreground">Contact</p>
        </div>
      </div>
      <Separator className="my-4" />
      <p className="text-center text-[10px] text-muted-foreground">
        © {year} {displayName}. All rights reserved.
      </p>
    </div>
  );
};

export default PreviewFooter;
