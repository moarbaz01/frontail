"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectName: string;
  description: string;
  projectType: string;
  problem: string;
  audience: string;
  success: string;
  mustHave: string;
  niceHave: string;
  hasDesigns: string;
  timeline: string;
  plan: string;
  heardFrom: string;
  notes: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  projectName: "",
  description: "",
  projectType: "",
  problem: "",
  audience: "",
  success: "",
  mustHave: "",
  niceHave: "",
  hasDesigns: "",
  timeline: "",
  plan: "",
  heardFrom: "",
  notes: "",
};

const steps = [
  {
    title: "Contact Info",
    description: "Just the basics so we can reply.",
    fields: ["fullName", "email"] as (keyof FormData)[],
  },
  {
    title: "Project Overview",
    description: "What are you building?",
    fields: ["projectName", "projectType"] as (keyof FormData)[],
  },
  {
    title: "Core Problem",
    description: "What should this MVP solve?",
    fields: ["problem"] as (keyof FormData)[],
  },
  {
    title: "Features",
    description: "Optional, but useful if you already know the scope.",
    fields: [] as (keyof FormData)[],
  },
  {
    title: "Timeline & Budget",
    description: "Optional signals to help us suggest the right plan.",
    fields: [] as (keyof FormData)[],
  },
  {
    title: "Wrap Up",
    description: "Add anything else, or submit now.",
    fields: [] as (keyof FormData)[],
  },
];

const projectTypes = ["Mobile App", "Web App", "SaaS", "Other"];
const timelines = ["ASAP", "1-2 months", "3-6 months", "Flexible"];
const planOptions = ["MVP Launch - $799", "Custom Build"];
const designOptions = ["Yes", "No"];

const labels: Record<keyof FormData, string> = {
  fullName: "Full name",
  companyName: "Company name",
  email: "Email",
  phone: "Phone",
  projectName: "Project name",
  description: "Brief description",
  projectType: "Project type",
  problem: "What problem does this solve?",
  audience: "Who is the target audience?",
  success: "What does success look like?",
  mustHave: "Must-have features",
  niceHave: "Nice-to-have features",
  hasDesigns: "Do you have existing designs or wireframes?",
  timeline: "Desired launch timeline",
  plan: "Preferred plan",
  heardFrom: "How did you hear about us?",
  notes: "Anything else to share?",
};

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const TextField = ({
  name,
  value,
  error,
  onChange,
  type = "text",
  optional = false,
}: {
  name: keyof FormData;
  value: string;
  error?: string;
  onChange: (name: keyof FormData, value: string) => void;
  type?: string;
  optional?: boolean;
}) => (
  <label className="block">
    <span className="mb-2 block text-sm font-bold text-gray-900">
      {labels[name]}
      {optional && <span className="font-medium text-gray-400"> optional</span>}
    </span>
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(name, event.target.value)}
      className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-primary ${
        error ? "border-red-400" : "border-gray-300"
      }`}
    />
    {error && (
      <p className="mt-2 text-xs font-semibold text-red-500">{error}</p>
    )}
  </label>
);

const TextArea = ({
  name,
  value,
  error,
  onChange,
  optional = false,
}: {
  name: keyof FormData;
  value: string;
  error?: string;
  onChange: (name: keyof FormData, value: string) => void;
  optional?: boolean;
}) => (
  <label className="block">
    <span className="mb-2 block text-sm font-bold text-gray-900">
      {labels[name]}
      {optional && <span className="font-medium text-gray-400"> optional</span>}
    </span>
    <textarea
      value={value}
      onChange={(event) => onChange(name, event.target.value)}
      rows={4}
      className={`w-full resize-none rounded-md border bg-white px-4 py-3 text-sm leading-relaxed text-gray-900 outline-none transition-colors focus:border-primary ${
        error ? "border-red-400" : "border-gray-300"
      }`}
    />
    {error && (
      <p className="mt-2 text-xs font-semibold text-red-500">{error}</p>
    )}
  </label>
);

const OptionGroup = ({
  name,
  options,
  value,
  error,
  onChange,
}: {
  name: keyof FormData;
  options: string[];
  value: string;
  error?: string;
  onChange: (name: keyof FormData, value: string) => void;
}) => (
  <div>
    <p className="mb-3 text-sm font-bold text-gray-900">{labels[name]}</p>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(name, option)}
          className={`rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors ${
            value === option
              ? "border-primary bg-primary/10 text-primary"
              : "border-gray-300 bg-white text-gray-700 hover:border-primary/40"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
    {error && (
      <p className="mt-2 text-xs font-semibold text-red-500">{error}</p>
    )}
  </div>
);

const OnboardingForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const currentStep = steps[stepIndex];
  const progress = useMemo(
    () => ((stepIndex + 1) / steps.length) * 100,
    [stepIndex],
  );

  const updateField = (name: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validateStep = () => {
    const nextErrors: Errors = {};

    currentStep.fields.forEach((field) => {
      if (!data[field].trim()) {
        nextErrors[field] = `${labels[field]} is required.`;
      }
    });

    if (
      currentStep.fields.includes("email") &&
      data.email &&
      !validateEmail(data.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setErrors({});
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const skipStep = () => {
    setErrors({});
    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  };

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();

    if (stepIndex !== steps.length - 1) {
      goNext();
      return;
    }

    if (!validateStep()) return;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "onboarding",
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send project brief.");
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-md border border-gray-300 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
          Thanks, {data.fullName.split(" ")[0] || "there"}.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Your MVP brief is ready for review. We&apos;ll read through the
          details and get back to you with the next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submitForm}
      className="rounded-md border border-gray-300 bg-white p-5 shadow-sm md:p-8"
    >
      <div className="mb-7">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Step {stepIndex + 1} of {steps.length}
          </p>
          <p className="text-xs font-semibold text-gray-500">
            {Math.round(progress)}% complete
          </p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="mb-7">
        <h1 className="font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
          {currentStep.title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          {currentStep.description}
        </p>
      </div>

      <motion.div
        key={currentStep.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-1 gap-5"
      >
        {stepIndex === 0 && (
          <>
            <TextField
              name="fullName"
              value={data.fullName}
              error={errors.fullName}
              onChange={updateField}
            />
            <TextField
              name="email"
              value={data.email}
              error={errors.email}
              onChange={updateField}
              type="email"
            />
            <TextField
              name="phone"
              value={data.phone}
              error={errors.phone}
              onChange={updateField}
              optional
            />
            <TextField
              name="companyName"
              value={data.companyName}
              error={errors.companyName}
              onChange={updateField}
              optional
            />
          </>
        )}

        {stepIndex === 1 && (
          <>
            <TextField
              name="projectName"
              value={data.projectName}
              error={errors.projectName}
              onChange={updateField}
            />
            <OptionGroup
              name="projectType"
              options={projectTypes}
              value={data.projectType}
              error={errors.projectType}
              onChange={updateField}
            />
            <TextArea
              name="description"
              value={data.description}
              error={errors.description}
              onChange={updateField}
              optional
            />
          </>
        )}

        {stepIndex === 2 && (
          <>
            <TextArea
              name="problem"
              value={data.problem}
              error={errors.problem}
              onChange={updateField}
            />
          </>
        )}

        {stepIndex === 3 && (
          <>
            <TextArea
              name="mustHave"
              value={data.mustHave}
              error={errors.mustHave}
              onChange={updateField}
              optional
            />
            <OptionGroup
              name="hasDesigns"
              options={designOptions}
              value={data.hasDesigns}
              error={errors.hasDesigns}
              onChange={updateField}
            />
          </>
        )}

        {stepIndex === 4 && (
          <>
            <OptionGroup
              name="timeline"
              options={timelines}
              value={data.timeline}
              error={errors.timeline}
              onChange={updateField}
            />
            <OptionGroup
              name="plan"
              options={planOptions}
              value={data.plan}
              error={errors.plan}
              onChange={updateField}
            />
          </>
        )}

        {stepIndex === 5 && (
          <>
            <TextField
              name="heardFrom"
              value={data.heardFrom}
              error={errors.heardFrom}
              onChange={updateField}
              optional
            />
            <TextArea
              name="notes"
              value={data.notes}
              error={errors.notes}
              onChange={updateField}
              optional
            />
          </>
        )}
      </motion.div>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-200 pt-5">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIndex === 0}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-800 transition-colors hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="flex items-center gap-2">
          {currentStep.fields.length === 0 && stepIndex < steps.length - 1 && (
            <button
              type="button"
              onClick={skipStep}
              className="rounded-md px-4 py-3 text-sm font-bold text-gray-500 transition-colors hover:text-primary"
            >
              Skip
            </button>
          )}

          {stepIndex === steps.length - 1 ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
            >
              {isSubmitting ? "Sending..." : "Submit Brief"}
              <CheckCircle2 className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      {submitError && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
          {submitError}
        </p>
      )}
    </form>
  );
};

export default OnboardingForm;
