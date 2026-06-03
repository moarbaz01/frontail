import type { Metadata } from "next";
import OnboardingForm from "@/components/OnboardingForm";
import { NoiseTexture } from "@/components/ui/noise-texture";

export const metadata: Metadata = {
  title: "Start Your MVP Project",
  description:
    "Share your MVP, SaaS, mobile app, or web app idea with Frontail Technology through a guided onboarding form.",
  alternates: {
    canonical: "https://frontail.com/start-project",
  },
  openGraph: {
    title: "Start Your MVP Project",
    description:
      "A simple onboarding form for founders planning an MVP or software product.",
    url: "https://frontail.com/start-project",
  },
};

export default function StartProjectPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-28">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="relative overflow-hidden rounded-md border border-gray-300 bg-dot-black/[0.06] p-6 shadow-sm lg:sticky lg:top-28 lg:h-fit">
          <NoiseTexture
            frequency={0.65}
            octaves={4}
            slope={0.12}
            noiseOpacity={0.4}
            className="opacity-[0.14] mix-blend-multiply"
          />
          <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-primary">
            MVP onboarding
          </p>
          <h1 className="relative z-10 mt-4 font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl">
            Tell us what you want to build.
          </h1>
          <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            This short brief helps us understand your product, goals, timeline,
            and scope before the first call.
          </p>
          <div className="relative z-10 mt-6 rounded-md border border-gray-300 bg-white/85 p-4 text-sm text-gray-600 backdrop-blur">
            Clean scope first. Faster MVP later.
          </div>
        </aside>

        <OnboardingForm />
      </div>
    </main>
  );
}
