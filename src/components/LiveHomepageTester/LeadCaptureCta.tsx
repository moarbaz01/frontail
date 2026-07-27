"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TesterState } from "./ControlsPanel";

type Status = "idle" | "sending" | "success" | "error";

const LeadCaptureCta = ({ state }: { state: TesterState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "tool-lead",
          name,
          email,
          phone,
          siteName: state.siteName,
          headline: state.headline,
          themeColor: state.themeColor,
          layoutStyle: state.layoutStyle,
          device: state.device,
          navLinks: state.navLinks,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-md border border-green-200 bg-green-50 p-5 text-sm font-medium text-green-700">
        <CheckCircle2 className="h-5 w-5 flex-none" />
        Thanks! We&apos;ll reach out shortly to bring this to life.
      </div>
    );
  }

  return (
    <Card className="bg-gray-50">
      <CardHeader>
        <CardTitle className="text-sm text-gray-900">
          Love this? Let&apos;s build it for real.
        </CardTitle>
        <CardDescription>
          Leave your details and we&apos;ll follow up — no obligation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label htmlFor="lead-name" className="sr-only">
                Your name
              </Label>
              <Input
                id="lead-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lead-email" className="sr-only">
                Email
              </Label>
              <Input
                id="lead-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lead-phone" className="sr-only">
                Phone
              </Label>
              <Input
                id="lead-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional)"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={status === "sending"}
            className="btn-3d w-full uppercase tracking-widest sm:w-auto"
          >
            {status === "sending" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Get This Built"
            )}
          </Button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-xs font-medium text-red-500">
            Something went wrong — please try again.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadCaptureCta;
