 

// import Contactus from "@/components/contact-us/ContactArea";
// import nodemailer from "nodemailer";
// import { FormData } from "@/components/contact-us/ContactArea";
// import Wrapper from "@/layouts/Wrapper";
// import HeaderOne from "@/layouts/headers/HeaderOne";
// import Breacrumb from "@/common/Breacrumb";
// import FooterTwo from "@/layouts/footers/FooterTwo";

// export default function ContactPage() { 
//   const sendMail = async (data: FormData) => {
//     "use server";

//     try { 
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.SMTP_USERNAME,
//           pass: process.env.SMTP_PASSWORD,
//         },
//       });

//       // Send email
//       const info = await transporter.sendMail({
//         from: `"${data.name}" <${data.email}>`,
//         to: process.env.MAIL_RECIVER_ADDRESS,
//         subject: `New Message from ${data.templateName}`,
//         text: `
// Name: ${data.name}
// Email: ${data.email}
// Purchase Code: ${data.purchaseCode}
// Template Name: ${data.templateName}
// Message: ${data.message}
//         `,
//         html: `
//           <h2>New Contact Message</h2>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Purchase Code:</strong> ${data.purchaseCode}</p>
//           <p><strong>Template Name:</strong> ${data.templateName}</p>
//           <p><strong>Message:</strong><br>${data.message}</p>
//         `,
//       });

//       console.log("Message sent:", info.messageId);
//       return { success: true };
//     } catch (error) {
//       console.error("Mail send failed:", error);
//       return { success: false, error: "Failed to send email" };
//     }
//   };

//   return (
//     <Wrapper>
//       <HeaderOne />
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <Breacrumb title="Contact Us" page="Contact Us" /> 
//           <Contactus senMail={sendMail} />
//           <FooterTwo />
//         </div>
//       </div>
//     </Wrapper>

//   )
// }


// import Contactus from "@/components/contact-us/ContactArea";
// import nodemailer from "nodemailer";
// import { FormData } from "@/components/contact-us/ContactArea";
// import Wrapper from "@/layouts/Wrapper";
// import HeaderOne from "@/layouts/headers/HeaderOne";
// import Breacrumb from "@/common/Breacrumb";
// import FooterTwo from "@/layouts/footers/FooterTwo";

// export default function ContactPage() {
//   const sendMail = async (data: FormData) => {
//     "use server";

//     try {
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.SMTP_USERNAME,
//           pass: process.env.SMTP_PASSWORD,
//         },
//       });

//       // Professional Email Template
//       const htmlTemplate = `
//         <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f5f6fa; padding: 40px;">
//           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
            
//             <!-- Header -->
//             <div style="background-color: #0d6efd; color: #ffffff; padding: 20px 30px; text-align: center;">
//               <h2 style="margin: 0; font-size: 22px;">📩 New Contact Message</h2>
//             </div>

//             <!-- Body -->
//             <div style="padding: 30px;">
//               <p style="font-size: 16px; color: #333333; margin-bottom: 25px;">
//                 You’ve received a new message from your website contact form.
//               </p>

//               <table style="width: 100%; border-collapse: collapse;">
//                 <tr>
//                   <td style="font-weight: bold; padding: 8px 0; width: 150px;">Name:</td>
//                   <td style="color: #555;">${data.name}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight: bold; padding: 8px 0;">Email:</td>
//                   <td><a href="mailto:${data.email}" style="color: #0d6efd;">${data.email}</a></td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight: bold; padding: 8px 0;">Purchase Code:</td>
//                   <td style="color: #555;">${data.purchaseCode}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight: bold; padding: 8px 0;">Template Name:</td>
//                   <td style="color: #555;">${data.templateName}</td>
//                 </tr>
//               </table>

//               <div style="margin-top: 30px;">
//                 <h3 style="font-size: 18px; color: #0d6efd; margin-bottom: 10px;">Message:</h3>
//                 <div style="background-color: #f1f3f5; padding: 20px; border-radius: 8px; color: #333; line-height: 1.6;">
//                   ${data.message}
//                 </div>
//               </div>
//             </div>

//             <!-- Footer -->
//             <div style="background-color: #f8f9fa; text-align: center; padding: 15px;">
//               <p style="margin: 0; font-size: 13px; color: #999;">
//                 This message was sent from your website contact form.<br/>
//                 &copy; ${new Date().getFullYear()} RK Theme. All rights reserved.
//               </p>
//             </div>

//           </div>
//         </div>
//       `;

//       const info = await transporter.sendMail({
//         from: `"${data.name}" <${data.email}>`,
//         to: process.env.MAIL_RECIVER_ADDRESS,
//         subject: `New Contact Message: ${data.templateName}`,
//         html: htmlTemplate,
//       });

//       console.log("Message sent:", info.messageId);
//       return { success: true };
//     } catch (error) {
//       console.error("Mail send failed:", error);
//       return { success: false, error: "Failed to send email" };
//     }
//   };

//   return (
//     <Wrapper>
//       <HeaderOne />
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <Breacrumb title="Contact Us" page="Contact Us" />
//           <Contactus senMail={sendMail} />
//           <FooterTwo />
//         </div>
//       </div>
//     </Wrapper>
//   );
// }
 

'use client';
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breacrumb from "@/common/Breacrumb";
import FooterTwo from "@/layouts/footers/FooterTwo";
import ContactArea from "@/components/contact-us/ContactArea";

export default function ContactPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Contact Us" page="Contact Us" />
          <ContactArea />
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  );
}
