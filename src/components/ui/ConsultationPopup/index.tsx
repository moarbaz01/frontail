"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Loader2, X } from "lucide-react";

const INITIAL_DELAY_MS = 1200;
const REOPEN_DELAY_MS = 90_000;
const SUBMITTED_KEY = "frontail-consultation-popup-submitted";

type PopupForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type PopupErrors = Partial<Record<keyof PopupForm, string>>;

const initialForm: PopupForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary";

const ConsultationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<PopupErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const reopenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const schedulePopup = (delay = REOPEN_DELAY_MS) => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SUBMITTED_KEY)) return;

    if (reopenTimer.current) {
      clearTimeout(reopenTimer.current);
    }

    reopenTimer.current = setTimeout(() => {
      setIsOpen(true);
    }, delay);
  };

  useEffect(() => {
    schedulePopup(INITIAL_DELAY_MS);

    return () => {
      if (reopenTimer.current) {
        clearTimeout(reopenTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setErrors({});

    if (!isSent) {
      schedulePopup();
    }
  };

  const updateField = (field: keyof PopupForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateForm = () => {
    const nextErrors: PopupErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Business email is required";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Tell us a little about your project";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: "Software development consultation",
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      sessionStorage.setItem(SUBMITTED_KEY, "true");
      setIsSent(true);
      setForm(initialForm);
    } catch {
      setErrors({
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-popup-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-md border border-white/60 bg-[#fff7f7] p-2 shadow-2xl shadow-black/30 md:grid-cols-[0.88fr_1.12fr] md:overflow-hidden md:p-3">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close consultation popup"
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative overflow-hidden rounded-md bg-primary p-5 text-white md:p-7">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/10 to-transparent" />

          <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between md:min-h-[360px]">
            <div>
              <div className="mb-6 inline-flex rounded-md bg-white px-3 py-2 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Frontail Technology"
                  width={120}
                  height={48}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h2
                id="consultation-popup-title"
                className="font-anton text-3xl font-extrabold leading-tight tracking-normal md:text-4xl"
              >
                Need a software team for your next product?
              </h2>
              <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-white/90">
                Talk to Frontail about MVP development, SaaS platforms, web
                apps, dashboards, and custom business software.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-bold md:text-sm">
              <div className="rounded-md bg-white/14 p-3 backdrop-blur">
                MVP Development
              </div>
              <div className="rounded-md bg-white/14 p-3 backdrop-blur">
                Custom Software
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md bg-[#f7f3eb] bg-dot-black/[0.055] p-4 md:p-6">
          <div className="pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 left-8 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,247,239,0.42),rgba(254,125,2,0.05))]" />
          <div className="relative z-10">
          {isSent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-anton text-2xl font-extrabold tracking-normal text-gray-900 md:text-3xl">
                Thanks, we got it.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
                Your consultation request has been sent. We will get back to you
                shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-1 flex flex-wrap gap-2">
                <span className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  Free Call
                </span>
                <span className="rounded-md border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
                  MVPs
                </span>
                <span className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  SaaS
                </span>
              </div>

              <div>
                <label
                  htmlFor="popup-name"
                  className="mb-2 block text-sm font-bold text-gray-900"
                >
                  Full Name
                </label>
                <input
                  id="popup-name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Mohammed Arbaz"
                  className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="popup-email"
                  className="mb-2 block text-sm font-bold text-gray-900"
                >
                  Business Email
                </label>
                <input
                  id="popup-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@company.com"
                  className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="popup-phone"
                  className="mb-2 block text-sm font-bold text-gray-900"
                >
                  Phone Number
                </label>
                <div
                  className={`flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 transition-colors focus-within:border-primary ${
                    errors.phone ? "border-red-400" : ""
                  }`}
                >
                  <span className="shrink-0 text-sm font-bold text-gray-900">
                    +91
                  </span>
                  <input
                    id="popup-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="8741035190"
                    className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-semibold text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="popup-message"
                  className="mb-2 block text-sm font-bold text-gray-900"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="popup-message"
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Tell us about your project"
                  rows={3}
                  className={`w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-semibold leading-relaxed text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary ${
                    errors.message ? "border-red-400" : ""
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Software Consultation"
                )}
              </button>
            </form>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
