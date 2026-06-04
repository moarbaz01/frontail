"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Loader2,
  MessageCircle,
} from "lucide-react";

type FormState = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  packageInterest: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const defaultInitialForm: FormState = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  city: "",
  businessType: "",
  packageInterest: "Starter Website - ₹14,999",
  message: "",
};

const indiaPackageOptions = [
  "Starter Website - ₹14,999",
  "Business Growth - ₹24,999",
  "Custom Website",
  "Not sure yet",
];

const businessTypes = [
  "Shop / Retail",
  "Clinic / Healthcare",
  "Restaurant / Cafe",
  "Salon / Beauty",
  "Coaching / Education",
  "Real estate",
  "Gym / Fitness",
  "Other local business",
];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

type CustomSelectProps = {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
};

const CustomSelect = ({
  value,
  options,
  placeholder,
  onChange,
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        className="flex w-full items-center justify-between gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-gray-500 transition ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto p-1">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded px-3 py-2.5 text-left text-sm transition hover:bg-primary/10 hover:text-primary ${
                  value === option
                    ? "bg-primary/10 font-bold text-primary"
                    : "text-gray-700"
                }`}
              >
                <span>{option}</span>
                {value === option && <Check className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

type WebsiteEnquiryFormProps = {
  packageOptions?: string[];
  defaultPackage?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  whatsappText?: string;
};

export default function WebsiteEnquiryForm({
  packageOptions = indiaPackageOptions,
  defaultPackage = "Starter Website - ₹14,999",
  eyebrow = "Quick enquiry",
  title = "Tell us about your business",
  description = "No long brief. Just the basics we need to suggest the right website package.",
  whatsappText = "Hi Frontail, I want a website package for my small business.",
}: WebsiteEnquiryFormProps) {
  const initialForm = {
    ...defaultInitialForm,
    packageInterest: defaultPackage,
  };
  const whatsappUrl = `https://wa.me/918741035190?text=${encodeURIComponent(
    whatsappText
  )}`;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors: Errors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone or WhatsApp number.";
    }

    if (!form.packageInterest.trim()) {
      nextErrors.packageInterest = "Please select a package.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "website-package",
          ...form,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send enquiry");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-md border border-primary/20 bg-white p-6 text-center shadow-sm md:p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-gray-900">
          Thanks, we received your enquiry.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600">
          We will check your business details and get back to you soon on phone,
          WhatsApp, or email.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-primary/50 hover:text-primary"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md border border-gray-300 bg-white p-5 shadow-sm md:p-7"
    >
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-800">
            Your name
          </label>
          <input
            className={inputClass}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs font-semibold text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-800">
            Phone / WhatsApp
          </label>
          <input
            className={inputClass}
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91 87410 35190"
          />
          {errors.phone && (
            <p className="mt-1 text-xs font-semibold text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-800">
            Business name
          </label>
          <input
            className={inputClass}
            value={form.businessName}
            onChange={(event) =>
              updateField("businessName", event.target.value)
            }
            placeholder="Your shop, clinic, or company"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-800">
            City
          </label>
          <input
            className={inputClass}
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Delhi, Jaipur, Mumbai..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-800">
            Business type
          </label>
          <CustomSelect
            value={form.businessType}
            options={businessTypes}
            placeholder="Select business type"
            onChange={(value) => updateField("businessType", value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-800">
            Package
          </label>
          <CustomSelect
            value={form.packageInterest}
            options={packageOptions}
            placeholder="Select package"
            onChange={(value) => updateField("packageInterest", value)}
          />
          {errors.packageInterest && (
            <p className="mt-1 text-xs font-semibold text-red-600">
              {errors.packageInterest}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Email
        </label>
        <input
          className={inputClass}
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="Optional, if you prefer email"
          type="email"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Anything specific?
        </label>
        <textarea
          className={`${inputClass} min-h-28 resize-none`}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Example: I need a website for my clinic with WhatsApp and Google Maps."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Something went wrong. Please try again or message us on WhatsApp.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-3d inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Website Enquiry
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
          <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:border-primary/50 hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp instead
        </a>
      </div>
    </form>
  );
}
