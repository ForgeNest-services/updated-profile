"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export interface QuoteFormData {
  // Step 1: Personal Info
  name: string;
  email: string;
  phone: string;
  company?: string;

  // Step 2: Package Selection
  package: string;

  // Step 3: Services
  services: string[];

  // Step 4: Project Details
  description: string;
  budget: string;
  timeline: string;
}

export async function submitQuoteRequest(formData: QuoteFormData) {
  if (!process.env.RESEND_API) {
    console.error("RESEND_API environment variable is not set");
    return {
      success: false,
      message:
        "Email service is not configured. Please contact us directly at forgenestservices@gmail.com",
    };
  }

  try {
    const servicesText = formData.services.join(", ");
    const companyText = formData.company || "Not provided";

    const companyEmail = await resend.emails.send({
      from: "quotes@forgenestservices.com.np",
      to: ["forgenestservices@gmail.com"],
      subject: `New Quote Request from ${formData.name} - ${formData.package} Package`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with Logo -->
          <div style="text-align: center; padding: 30px 20px; background: #181832; border-radius: 12px 12px 0 0;">
            <img src="https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png" alt="ForgeNest Logo" style="height: 60px; width: auto; margin-bottom: 15px;" />
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Quote Request</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0;">${
              formData.package
            } Package</p>
          </div>

          <!-- Content -->
          <div style="padding: 30px 20px;">
            <!-- Contact Details -->
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Name:</strong> ${
                  formData.name
                }</p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${
                  formData.email
                }" style="color: #3b82f6; text-decoration: none;">${
        formData.email
      }</a></p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Phone:</strong> ${
                  formData.phone
                }</p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Company:</strong> ${companyText}</p>
              </div>
            </div>

            <!-- Package & Services -->
            <div style="background-color: #fef3f2; padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #dd4f43;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Package & Services</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Selected Package:</strong> ${
                  formData.package
                }</p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Services Needed:</strong> ${servicesText}</p>
              </div>
            </div>

            <!-- Project Details -->
            <div style="background-color: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #10b981;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Project Details</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Budget Range:</strong> ${
                  formData.budget
                }</p>
                <p style="margin: 0; color: #475569;"><strong style="color: #1e293b;">Timeline:</strong> ${
                  formData.timeline
                }</p>
              </div>
            </div>

            <!-- Description -->
            <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; border-left: 4px solid #8b5cf6;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Project Description:</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
                <p style="line-height: 1.7; color: #475569; margin: 0; white-space: pre-wrap;">${
                  formData.description
                }</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                 Quote request received: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    const confirmationEmail = await resend.emails.send({
      from: "noreply@forgenestservices.com.np",
      to: [formData.email],
      subject: "We've Received Your Quote Request!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with Logo -->
          <div style="text-align: center; padding: 40px 20px; background: #181832;">
            <img src="https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png" alt="ForgeNest Logo" style="height: 70px; width: auto; margin-bottom: 20px;" />
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Thank You!</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">Your quote request has been received</p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">Dear ${
                formData.name
              },</h2>
              <p style="line-height: 1.7; color: #475569; margin: 0 0 25px 0; font-size: 16px;">
                Thank you for requesting a quote for our <strong style="color: #dd4f43;">${
                  formData.package
                }</strong> package! We're excited about the opportunity to work with you.
              </p>
            </div>

            <!-- Summary Box -->
            <div style="background: linear-gradient(135deg, #fef3f2 0%, #fee2e2 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #fecaca;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background-color: #dd4f43; width: 6px; height: 6px; border-radius: 50%; margin-right: 12px;"></div>
                <h3 style="color: #7f1d1d; margin: 0; font-size: 18px; font-weight: 600;">Your Request Summary</h3>
              </div>
              <div style="background-color: rgba(255, 255, 255, 0.9); padding: 20px; border-radius: 8px;">
                <p style="margin: 0; color: #7f1d1d;"><strong>Package:</strong> ${
                  formData.package
                }</p>
                <p style="margin: 8px 0 0 0; color: #7f1d1d;"><strong>Services:</strong> ${servicesText}</p>
                <p style="margin: 8px 0 0 0; color: #7f1d1d;"><strong>Budget:</strong> ${
                  formData.budget
                }</p>
                <p style="margin: 8px 0 0 0; color: #7f1d1d;"><strong>Timeline:</strong> ${
                  formData.timeline
                }</p>
              </div>
            </div>

            <!-- What's Next Box -->
            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 30px;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background-color: #22c55e; width: 6px; height: 6px; border-radius: 50%; margin-right: 12px;"></div>
                <h3 style="color: #14532d; margin: 0; font-size: 18px; font-weight: 600;">What Happens Next?</h3>
              </div>
              <div style="background-color: rgba(255, 255, 255, 0.9); padding: 20px; border-radius: 8px;">
                <p style="margin: 0; color: #166534; line-height: 1.6;">
                   ✓ Our team will review your requirements<br>
                   ✓ We'll prepare a detailed quote within <strong>1-2 business days</strong><br>
                   ✓ You'll receive it at <strong>${formData.email}</strong><br>
                   ✓ We'll schedule a consultation call to discuss details
                </p>
              </div>
            </div>

            <!-- Contact Info -->
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <p style="color: #475569; margin: 0 0 15px 0; font-size: 16px;">
                Have questions in the meantime?
              </p>
              <p style="margin: 0;">
                <a href="mailto:contact@forgenestservices.com.np" style="color: #dd4f43; text-decoration: none; font-weight: 600;">contact@forgenestservices.com.np</a>
              </p>
            </div>

            <!-- Signature -->
            <div style="text-align: center; padding: 25px 0;">
              <p style="color: #64748b; font-size: 16px; margin: 0 0 5px 0;">Best regards,</p>
              <p style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0;">The ForgeNest Team</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              This is an automated confirmation email. Please do not reply to this message.<br>
              © ${new Date().getFullYear()} ForgeNest Services. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Company email result:", companyEmail);
    console.log("Confirmation email result:", confirmationEmail);

    if (companyEmail.error || confirmationEmail.error) {
      console.error("Email errors:", {
        companyEmailError: companyEmail.error,
        confirmationEmailError: confirmationEmail.error,
      });
      throw new Error(
        `Failed to send email: ${
          companyEmail.error?.message || confirmationEmail.error?.message
        }`
      );
    }

    return {
      success: true,
      message: "Your quote request has been submitted successfully!",
    };
  } catch (error) {
    console.error("Quote request error:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your request. Please try again later.",
    };
  }
}
