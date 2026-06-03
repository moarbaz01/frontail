import {
  generateContactEmailTemplate,
  generateOnboardingEmailTemplate,
} from "@/templates/emailTemplate";
import { sendEmail } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get Data
    const body = await req.json();

    if (body.type === "onboarding") {
      const { fullName, email, projectName, projectType, problem } = body;

      if (!fullName || !email || !projectName || !projectType || !problem) {
        return NextResponse.json(
          { message: "Required onboarding fields are missing" },
          { status: 400 }
        );
      }

      await sendEmail(
        email,
        `New MVP Brief: ${projectName}`,
        generateOnboardingEmailTemplate(body)
      );

      return NextResponse.json(
        { message: "Project brief sent successfully" },
        { status: 200 }
      );
    }

    const { email, name, phone, service, message } = body;
    // Validation
    if (!email || !name || !phone || !service) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await sendEmail(
      email,
      "New Client Arrived",
      generateContactEmailTemplate({ name, email, phone, service, message })
    );

    return NextResponse.json(
      { message: "Email Successfully Sended" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server issue" },
      { status: 500 }
    );
  }
}
