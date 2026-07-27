import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PLACEHOLDER_TESTIMONIAL } from "./previewContent";

const TestimonialBlock = ({
  variant = "card",
  siteName,
}: {
  variant?: "card" | "side" | "quote";
  siteName: string;
}) => {
  const initials = (siteName || "Y").charAt(0).toUpperCase();

  if (variant === "quote") {
    return (
      <div className="px-6 py-8 text-center">
        <p className="text-base font-medium italic leading-relaxed text-foreground">
          &ldquo;{PLACEHOLDER_TESTIMONIAL.quote}&rdquo;
        </p>
        <p className="mt-3 text-xs font-semibold text-muted-foreground">
          {PLACEHOLDER_TESTIMONIAL.name} · {PLACEHOLDER_TESTIMONIAL.role}
        </p>
      </div>
    );
  }

  if (variant === "side") {
    return (
      <div className="flex items-center gap-3 px-5 py-6">
        <Avatar className="h-10 w-10 flex-none">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs italic leading-relaxed text-foreground">
            &ldquo;{PLACEHOLDER_TESTIMONIAL.quote}&rdquo;
          </p>
          <p className="mt-1 text-[10px] font-semibold text-muted-foreground">
            {PLACEHOLDER_TESTIMONIAL.name} · {PLACEHOLDER_TESTIMONIAL.role}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 py-6">
      <Card className="items-center gap-2 py-6 text-center">
        <CardContent className="flex flex-col items-center gap-2 px-6">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <p className="text-xs italic leading-relaxed text-foreground">
            &ldquo;{PLACEHOLDER_TESTIMONIAL.quote}&rdquo;
          </p>
          <p className="text-[10px] font-semibold text-muted-foreground">
            {PLACEHOLDER_TESTIMONIAL.name} · {PLACEHOLDER_TESTIMONIAL.role}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialBlock;
