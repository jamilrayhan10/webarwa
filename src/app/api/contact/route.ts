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





// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs"; // Vercel serverless Node runtime

// interface ContactFormData {
//   name: string;
//   email: string;
//   purchaseCode: string;
//   templateName: string;
//   message: string;
// }

// export async function POST(req: Request) {
//   try {
//     const data: ContactFormData = await req.json();

//     // Validate required fields
//     if (!data.name || !data.email || !data.message) {
//       return NextResponse.json(
//         { success: false, error: "Name, email, and message are required." },
//         { status: 400 }
//       );
//     }

//     // Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USERNAME,
//         pass: process.env.SMTP_PASSWORD, // Use Gmail App Password
//       },
//     });

//     // HTML email template
//     const htmlTemplate = `
//       <div style="font-family: Arial, sans-serif; background:#f5f6fa; padding:20px;">
//         <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
//           <div style="background:#0d6efd; color:#fff; padding:20px; text-align:center;">
//             <h2>📩 New Contact Message</h2>
//           </div>
//           <div style="padding:20px; color:#333;">
//             <p><strong>Name:</strong> ${data.name}</p>
//             <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color:#0d6efd;">${data.email}</a></p>
//             <p><strong>Purchase Code:</strong> ${data.purchaseCode}</p>
//             <p><strong>Template Name:</strong> ${data.templateName}</p>
//             <h3>Message:</h3>
//             <p style="background:#f1f3f5; padding:10px; border-radius:5px;">${data.message}</p>
//           </div>
//           <div style="background:#f8f9fa; text-align:center; padding:10px; font-size:12px; color:#999;">
//             &copy; ${new Date().getFullYear()} RK Theme. All rights reserved.
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
//   } catch (err) {
//     console.error("Email send error:", err);
//     return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
//   }
// }



// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();

//     // Email HTML
//     const htmlContent = `
//       <div style="font-family:Arial, sans-serif; padding:20px; background:#f9f9f9;">
//         <h2 style="color:#0d6efd;">📩 New Contact Message</h2>
//         <p><strong>Name:</strong> ${data.name}</p>
//         <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
//         <p><strong>Purchase Code:</strong> ${data.purchaseCode}</p>
//         <p><strong>Template Name:</strong> ${data.templateName}</p>
//         <p><strong>Message:</strong></p>
//         <p style="background:#f1f3f5; padding:10px; border-radius:6px;">${data.message}</p>
//         <hr/>
//         <p style="font-size:12px; color:#999;">&copy; ${new Date().getFullYear()} rk_theme</p>
//       </div>
//     `;

//     await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>', // Can change after domain verification
//       to: process.env.MAIL_RECIVER_ADDRESS!,
//       subject: `New Contact Message: ${data.templateName}`,
//       html: htmlContent,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ success: false, error: "Failed to send email" });
//   }
// }



// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// export const runtime = "nodejs"; // ensures Node.js runtime

// const resend = new Resend(process.env.RESEND_API!);

// interface ContactFormData {
//   name: string;
//   email: string;
//   purchaseCode: string;
//   templateName: string;
//   message: string;
// }

// export async function POST(request: Request) {
//   try {
//     const data: ContactFormData = await request.json();

//     if (!data.name || !data.email || !data.message) {
//       return NextResponse.json(
//         { success: false, error: "Name, email, and message are required." },
//         { status: 400 }
//       );
//     }

//     const htmlTemplate = `
//       <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f5f6fa; padding: 40px;">
//         <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
//           <div style="background-color: #0d6efd; color: #ffffff; padding: 20px 30px; text-align: center;">
//             <h2 style="margin: 0; font-size: 22px;">📩 New Contact Message</h2>
//           </div>
//           <div style="padding: 30px;">
//             <p style="font-size: 16px; color: #333; margin-bottom: 25px;">
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

//     await resend.emails.send({
//       from: `RK Theme <${process.env.MAIL_RECIVER_ADDRESS!}>`,
//       to: process.env.MAIL_RECIVER_ADDRESS!,
//       subject: `New Contact Message: ${data.templateName}`,
//       html: htmlTemplate,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Resend email error:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email." },
//       { status: 500 }
//     );
//   }
// }


// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs"; // ensures server runtime

// interface ContactFormData {
//   name: string;
//   email: string;
//   purchaseCode: string;
//   templateName: string;
//   message: string;
// }

// const resendApiKey = process.env.RESEND_API;
// if (!resendApiKey) throw new Error("Missing RESEND_API key.");

// const resend = new Resend(resendApiKey);

// export async function POST(request: Request) {
//   try {
//     const data: ContactFormData = await request.json();

//     if (!data.name || !data.email || !data.message) {
//       return NextResponse.json(
//         { success: false, error: "Name, email, and message are required." },
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from: "Your Site <no-reply@yoursite.com>",
//       to: process.env.MAIL_RECIVER_ADDRESS!,
//       subject: `New Contact Message: ${data.templateName}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
//           <h2>📩 New Contact Message</h2>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
//           <p><strong>Purchase Code:</strong> ${data.purchaseCode}</p>
//           <p><strong>Template Name:</strong> ${data.templateName}</p>
//           <h3>Message:</h3>
//           <p>${data.message}</p>
//           <hr/>
//           <p style="font-size:12px;color:#999;">Sent from your website contact form.</p>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email send failed:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email." },
//       { status: 500 }
//     );
//   }
// }


import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #eee; border-radius:10px;">
        <h2>📩 New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Purchase Code:</strong> ${data.purchaseCode}</p>
        <p><strong>Template Name:</strong> ${data.templateName}</p>
        <h3>Message:</h3>
        <p>${data.message}</p>
        <hr/>
        <p style="font-size:12px;color:#999;">Sent from your website contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${data.name}" <${process.env.SMTP_USERNAME}>`,
      to: process.env.MAIL_RECIVER_ADDRESS,
      subject: `New Contact Message: ${data.templateName}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}

