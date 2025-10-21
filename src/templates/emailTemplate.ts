export function generateContactEmailTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
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
