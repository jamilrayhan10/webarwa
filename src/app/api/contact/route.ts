// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs"; // ✅ ensure Node.js runtime

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USERNAME,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     const htmlTemplate = `
//       <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f5f6fa; padding: 40px;">
//         <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
//           <div style="background-color: #0d6efd; color: #ffffff; padding: 20px 30px; text-align: center;">
//             <h2 style="margin: 0; font-size: 22px;">📩 New Contact Message</h2>
//           </div>
//           <div style="padding: 30px;">
//             <p style="font-size: 16px; color: #333333; margin-bottom: 25px;">
//               You’ve received a new message from your website contact form.
//             </p>
//             <table style="width: 100%; border-collapse: collapse;">
//               <tr><td style="font-weight: bold; padding: 8px 0; width: 150px;">Name:</td><td style="color: #555;">${data.name}</td></tr>
//               <tr><td style="font-weight: bold; padding: 8px 0;">Email:</td><td><a href="mailto:${data.email}" style="color: #0d6efd;">${data.email}</a></td></tr>
//               <tr><td style="font-weight: bold; padding: 8px 0;">Purchase Code:</td><td style="color: #555;">${data.purchaseCode}</td></tr>
//               <tr><td style="font-weight: bold; padding: 8px 0;">Template Name:</td><td style="color: #555;">${data.templateName}</td></tr>
//             </table>
//             <div style="margin-top: 30px;">
//               <h3 style="font-size: 18px; color: #0d6efd; margin-bottom: 10px;">Message:</h3>
//               <div style="background-color: #f1f3f5; padding: 20px; border-radius: 8px; color: #333; line-height: 1.6;">
//                 ${data.message}
//               </div>
//             </div>
//           </div>
//           <div style="background-color: #f8f9fa; text-align: center; padding: 15px;">
//             <p style="margin: 0; font-size: 13px; color: #999;">
//               This message was sent from your website contact form.<br/>
//               &copy; ${new Date().getFullYear()} RK Theme. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     `;

//     await transporter.sendMail({
//       from: `"${data.name}" <${data.email}>`,
//       to: process.env.MAIL_RECIVER_ADDRESS,
//       subject: `New Contact Message: ${data.templateName}`,
//       html: htmlTemplate,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
//   }
// }


import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Use Node runtime for nodemailer

// Define the shape of incoming data
interface ContactFormData {
  name: string;
  email: string;
  purchaseCode: string;
  templateName: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD, // Use Gmail App Password
      },
    });

    // Professional HTML email template
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f5f6fa; padding: 40px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="background-color: #0d6efd; color: #ffffff; padding: 20px 30px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">📩 New Contact Message</h2>
          </div>

          <!-- Body -->
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 25px;">
              You’ve received a new message from your website contact form.
            </p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="font-weight: bold; padding: 8px 0; width: 150px;">Name:</td><td style="color: #555;">${data.name}</td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0;">Email:</td><td><a href="mailto:${data.email}" style="color: #0d6efd;">${data.email}</a></td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0;">Purchase Code:</td><td style="color: #555;">${data.purchaseCode}</td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0;">Template Name:</td><td style="color: #555;">${data.templateName}</td></tr>
            </table>

            <div style="margin-top: 30px;">
              <h3 style="font-size: 18px; color: #0d6efd; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f1f3f5; padding: 20px; border-radius: 8px; color: #333; line-height: 1.6;">
                ${data.message}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f9fa; text-align: center; padding: 15px;">
            <p style="margin: 0; font-size: 13px; color: #999;">
              This message was sent from your website contact form.<br/>
              &copy; ${new Date().getFullYear()} RK Theme. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: process.env.MAIL_RECIVER_ADDRESS,
      subject: `New Contact Message: ${data.templateName}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
