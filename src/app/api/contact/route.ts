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
       <div style="font-family: Arial, sans-serif; background:#f5f6fa; padding:20px;">
        <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
          <div style="background:#0d6efd; color:#fff; padding:20px; text-align:center;">
            <h2>📩 New Contact Message</h2>
          </div>
          <div style="padding:20px; color:#333;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color:#0d6efd;">${data.email}</a></p>
            <p><strong>Purchase Code:</strong> ${data.purchaseCode}</p>
            <p><strong>Template Name:</strong> ${data.templateName}</p>
            <h3>Message:</h3>
            <p style="background:#f1f3f5; padding:10px; border-radius:5px;">${data.message}</p>
          </div>
          <div style="background:#f8f9fa; text-align:center; padding:10px; font-size:12px; color:#999;">
            &copy; ${new Date().getFullYear()} RK Theme. All rights reserved.
          </div>
        </div>
      </div>

      
    `;

    // await transporter.sendMail({
    //   from: `"${data.name}" <${process.env.SMTP_USERNAME}>`,
    //   to: process.env.MAIL_RECIVER_ADDRESS,
    //   subject: `New Contact Message: ${data.templateName}`,
    //   html: htmlTemplate,
    // });
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USERNAME}>`, // your email must stay here
      to: process.env.MAIL_RECIVER_ADDRESS,
      subject: `New Contact Message: ${data.templateName}`,
      html: htmlTemplate,
      replyTo: `${data.email}`, // user’s email here
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

