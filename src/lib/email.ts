import { Resend } from "resend";

/**
 * Sends a Pro Forever activation email with the unique token.
 */
export async function sendTokenEmail(email: string, tokenId: string) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const activationLink = `${process.env.NEXT_PUBLIC_URL}/pro/activate?token=${tokenId}`;

  try {
    await resend.emails.send({
      from: "Charades Generator <pro@charades-generator.com>",
      to: email,
      subject: "Your Pro Forever Access — Charades Generator",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4F46E5;">Welcome to Charades Pro! 🎉</h2>
          <p>Thank you for supporting Charades Generator. You now have lifetime access to all premium features, ad-free.</p>
          
          <div style="margin: 30px 0; padding: 20px; background: #F3F4F6; border-radius: 8px; text-align: center;">
            <p style="margin-bottom: 10px; font-weight: bold;">Your Activation Link:</p>
            <a href="${activationLink}" style="display: inline-block; padding: 12px 24px; background: #4F46E5; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Activate on this device</a>
          </div>

          <p style="font-size: 14px; color: #6B7280;">If the button doesn't work, copy and paste this URL into your browser:</p>
          <p style="font-size: 12px; color: #9CA3AF;">${activationLink}</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #9CA3AF;">If you have any issues, please reply to this email.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Resend error:", error);
  }
}
