"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "MVP Launch",
    price: "$799",
    note: "Best for validating one focused product idea.",
    badge: "Starter MVP",
    cta: "Start MVP Plan",
    highlighted: true,
    features: [
      "Discovery and MVP scope planning",
      "Landing page or focused web app flow",
      "Clean responsive UI",
      "Core feature implementation",
      "Basic contact, waitlist, or lead capture",
      "Deployment support",
      "15 post-launch support",
    ],
  },
  {
    name: "Custom Build",
    price: "Custom",
    note: "For SaaS, mobile apps, AI tools, dashboards, and larger builds.",
    badge: "Tailored scope",
    cta: "Plan Custom Build",
    highlighted: false,
    features: [
      "Product strategy and technical planning",
      "Custom UI/UX and development",
      "Authentication, dashboards, APIs, or payments",
      "AI, Web3, or third-party integrations",
      "Admin panels and internal tools",
      "Launch, monitoring, and handover",
      "Ongoing support available",
    ],
  },
];

const PricingSection = () => {
  const router = useRouter();

  return (
    <section className="px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-lg">
        <div className="mb-10 text-center md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl font-extrabold tracking-normal text-gray-900 md:text-5xl"
          >
            Simple <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-3 max-w-2xl text-base text-gray-600 md:text-lg"
          >
            Start lean with a clear MVP package, or scope a custom product
            around your exact workflow.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-md border max-w-sm bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg md:p-7 ${
                plan.highlighted
                  ? "border-primary/50 hover:shadow-primary/10"
                  : "border-gray-300 hover:border-primary/40"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-0 top-0 rounded-bl-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  Popular
                </div>
              )}

              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Sparkles className="h-4 w-4" />
                {plan.badge}
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-anton text-5xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                {plan.price.startsWith("$") && (
                  <span className="pb-2 text-sm font-semibold text-gray-500">
                    one-time
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {plan.note}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/start-project")}
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold ${
                  plan.highlighted
                    ? "btn-3d bg-primary text-white"
                    : "border border-gray-300 bg-white text-gray-900 transition-colors hover:border-primary/40 hover:text-primary"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
