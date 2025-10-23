import { generateContactEmailTemplate } from "@/templates/emailTemplate";
import { sendEmail } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get Data
    const { email, name, phone, service, message } = await req.json();
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
