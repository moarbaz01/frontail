export function generateContactEmailTemplate({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
}) {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Contact Form Submission</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              border: 1px solid #5755fe; /* Border color */
            }
            .email-header {
              background-color: #18DC60; /* Your color */
              color: #ffffff;
              padding: 15px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .email-header h1 {
              margin: 0;
              font-size: 24px;
            }
            .email-body {
              font-size: 16px;
              color: #333333;
              line-height: 1.6;
              padding: 15px 0;
            }
            .email-footer {
              margin-top: 20px;
              font-size: 14px;
              color: #777777;
              text-align: center;
              border-top: 1px solid #f1f1f1;
              padding-top: 10px;
            }
            .email-footer p {
              margin: 5px 0;
            }
            .cta-button {
              display: inline-block;
              background-color: #18DC60; /* Your color */
              color: white;
              padding: 10px 15px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 10px;
            }
            .cta-button:hover {
            opacity : 0.9
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="email-body">
              <p>Dear Team,</p>
              <p>You have received a new contact form submission. Here are the details:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
              ${service ? `<p><strong>Service Required:</strong> ${service}</p>` : ""}
              ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
              <p>Best regards,</p>
              <p>Your Contact Form</p>
            </div>
            <div class="email-footer">
              <p>This message was generated from your contact form.</p>
              <p>&copy; ${new Date().getFullYear()} Your Company Name</p>
              <a href="https://yourwebsite.com" class="cta-button">Visit Our Website</a>
            </div>
          </div>
        </body>
      </html>
    `;
}

type OnboardingEmailData = {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  projectName: string;
  description?: string;
  projectType: string;
  problem: string;
  mustHave?: string;
  hasDesigns?: string;
  timeline?: string;
  plan?: string;
  heardFrom?: string;
  notes?: string;
};

type WebsitePackageEmailData = {
  name: string;
  businessName?: string;
  phone: string;
  email?: string;
  city?: string;
  businessType?: string;
  packageInterest?: string;
  message?: string;
};

const escapeHtml = (value?: string) =>
  (value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const detailRow = (label: string, value?: string) =>
  value?.trim()
    ? `<tr>
        <td style="padding: 12px 14px; border-bottom: 1px solid #eeeeee; color: #6b7280; font-size: 13px; width: 34%;">${label}</td>
        <td style="padding: 12px 14px; border-bottom: 1px solid #eeeeee; color: #111827; font-size: 14px; line-height: 1.55;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
      </tr>`
    : "";

export function generateOnboardingEmailTemplate(data: OnboardingEmailData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New MVP Project Brief</title>
      </head>
      <body style="margin: 0; padding: 0; background: #f7f3eb; font-family: Arial, sans-serif;">
        <div style="max-width: 680px; margin: 24px auto; padding: 0 16px;">
          <div style="overflow: hidden; border: 1px solid #e5e7eb; border-radius: 8px; background: #ffffff;">
            <div style="background: #fe7d02; color: #ffffff; padding: 22px 24px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">New MVP Brief</p>
              <h1 style="margin: 0; font-size: 24px; line-height: 1.25;">${escapeHtml(data.projectName)}</h1>
            </div>

            <div style="padding: 22px 24px;">
              <p style="margin: 0 0 18px; color: #374151; font-size: 15px; line-height: 1.6;">
                A new client completed the start project onboarding form.
              </p>

              <table style="width: 100%; border-collapse: collapse; border: 1px solid #eeeeee; border-radius: 8px; overflow: hidden;">
                ${detailRow("Full name", data.fullName)}
                ${detailRow("Email", data.email)}
                ${detailRow("Phone", data.phone)}
                ${detailRow("Company", data.companyName)}
                ${detailRow("Project type", data.projectType)}
                ${detailRow("Project name", data.projectName)}
                ${detailRow("Description", data.description)}
                ${detailRow("Problem", data.problem)}
                ${detailRow("Must-have features", data.mustHave)}
                ${detailRow("Existing designs", data.hasDesigns)}
                ${detailRow("Timeline", data.timeline)}
                ${detailRow("Preferred plan", data.plan)}
                ${detailRow("Heard from", data.heardFrom)}
                ${detailRow("Notes", data.notes)}
              </table>
            </div>

            <div style="border-top: 1px solid #eeeeee; padding: 16px 24px; color: #6b7280; font-size: 12px;">
              Sent from Frontail Technology start project onboarding form.
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateWebsitePackageEmailTemplate(
  data: WebsitePackageEmailData
) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Small Business Website Enquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background: #f7f3eb; font-family: Arial, sans-serif;">
        <div style="max-width: 680px; margin: 24px auto; padding: 0 16px;">
          <div style="overflow: hidden; border: 1px solid #e5e7eb; border-radius: 8px; background: #ffffff;">
            <div style="background: #fe7d02; color: #ffffff; padding: 22px 24px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">Website Package Enquiry</p>
              <h1 style="margin: 0; font-size: 24px; line-height: 1.25;">${escapeHtml(data.businessName || data.name)}</h1>
            </div>

            <div style="padding: 22px 24px;">
              <p style="margin: 0 0 18px; color: #374151; font-size: 15px; line-height: 1.6;">
                A new enquiry came from the Indian small business website landing page.
              </p>

              <table style="width: 100%; border-collapse: collapse; border: 1px solid #eeeeee; border-radius: 8px; overflow: hidden;">
                ${detailRow("Name", data.name)}
                ${detailRow("Business", data.businessName)}
                ${detailRow("Phone / WhatsApp", data.phone)}
                ${detailRow("Email", data.email)}
                ${detailRow("City", data.city)}
                ${detailRow("Business type", data.businessType)}
                ${detailRow("Package interest", data.packageInterest)}
                ${detailRow("Message", data.message)}
              </table>
            </div>

            <div style="border-top: 1px solid #eeeeee; padding: 16px 24px; color: #6b7280; font-size: 12px;">
              Sent from Frontail Technology small business website page.
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
