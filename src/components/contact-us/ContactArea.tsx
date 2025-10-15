// 'use client'
// import React from 'react'; 
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';



// export interface FormData {
//   name: string;  
//   email: string; 
//   purchaseCode: string;   
//   templateName: string;   
//   message: string; 
// }

// const schema = yup
//   .object({
//     name: yup.string().required().label("name"), 
//     email: yup.string().required().email().label("email"), 
//     purchaseCode: yup.string().required().label("purchaseCode"), 
//     templateName: yup.string().required().label("templateName"), 
//     message: yup.string().required().label("Message"),
//   })
//   .required();




//   type ContactAreaProps = {
//   senMail: (data: FormData) => Promise<{ success: boolean; error?: string; }>
// };



// export default function ContactArea({ senMail }: ContactAreaProps) {




//    const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
//   const onSubmit = (data: FormData) => {   
//     // const notify = () => toast("Message send successful");
//     // notify();
//     reset();
//     console.log(data);
//     senMail(data);
//   };



//   return (
//     <div className="rk-theme-section-padding" style={{marginBottom: '80px'}}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="rk-theme-default-content pr70" data-aos="fade-up" data-aos-delay="700">
//               <h2>Get in touch with us directly</h2>
//               <p className="mb-0">We are here to help you! Tell us how we can help & we'll be in touch with an expert within the next 24 hours.</p>
//               <div className="mt-50">
//                 <div className="rk-theme-contact-info-wrap">
//                   <div className="rk-theme-contact-info-item">
//                     <h5>Send us an email:</h5>
//                     <a href="mailto:info@example.com">jamilrayhan10@gmail.com</a>
//                   </div>
//                   <div className="rk-theme-contact-info-item">
//                     <h5>Give us a call:</h5>
//                     <a href="tel:01300972752">+8801300972752</a>
//                   </div>
//                   <div className="rk-theme-contact-info-item">
//                     <h5>Follow us:</h5>
//                     <div className="rk-theme-social-wrap2 social-hover-orange">
//                       <ul>
//                         <li>
//                           <a href="https://www.facebook.com">
//                             <img src="assets/images/home2/facebook.svg" alt="Icon" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.twitter.com">
//                             <img src="assets/images/home2/twitter.svg" alt="Icon" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.instagram.com">
//                             <img src="assets/images/home2/insta.svg" alt="Icon" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.linkedin.com">
//                             <img src="assets/images/home2/in.svg" alt="Icon" />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="rk-theme-contact-box" data-aos="fade-up" data-aos-delay="900">
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="rk-theme-contact-column">
//                   <div className="rk-theme-contact-field">
//                     <label>Enter your name</label>
//                     <input type="text" placeholder="Adam Smith" {...register('name')} />
//                   </div>
//                   <div className="rk-theme-contact-field">
//                     <label>Email address</label>
//                     <input type="email" placeholder="example@gmail.com" {...register('email')} />
//                   </div>
//                 </div>
//                 <div className="rk-theme-contact-column">
//                   <div className="rk-theme-contact-field">
//                     <label>Purchase Code</label>
//                     <input type="text" placeholder="Purchase Code" {...register('purchaseCode')} />
//                   </div>
//                   <div className="rk-theme-contact-field">
//                     <label>Template Name</label>
//                     <input type="text" placeholder="Template Name" {...register('templateName')} />
//                   </div>
//                 </div>
//                 <div className="rk-theme-contact-field">
//                   <label>Message</label>
//                   <textarea placeholder="Write your message here..." {...register('message')}></textarea>
//                 </div>
//                 <button id="rk-theme-main-submit-btn" type="submit">Send your message</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// "use client";
// import React from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from 'react-toastify';

// export interface FormData {
//   name: string;
//   email: string;
//   purchaseCode: string;
//   templateName: string;
//   message: string;
// }

// const schema = yup
//   .object({
//     name: yup.string().required("Name is required"),
//     email: yup.string().required("Email is required").email(),
//     purchaseCode: yup.string().required("Purchase code is required"),
//     templateName: yup.string().required("Template name is required"),
//     message: yup.string().required("Message is required"),
//   })
//   .required();

// type ContactAreaProps = {
//   senMail: (data: FormData) => Promise<{ success: boolean; error?: string }>;
// };

// export default function ContactArea({ senMail }: ContactAreaProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: FormData) => {
//     const res = await senMail(data);
//     if (res.success) {
//       // alert("✅ Message sent successfully!");
//       const notify = () => toast("Your Message send successful");
//       notify();
//       reset();
//     } else {
//       alert("❌ " + res.error);
//     }
//   };

//   return (
//     <div className="rk-theme-section-padding" style={{ marginBottom: "80px" }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div
//               className="rk-theme-default-content pr70"
//             >
//               <h2>Get in touch with us directly</h2>
//               <p className="mb-0">
//                 We are here to help you! Tell us how we can help & we'll be in
//                 touch with an expert within the next 24 hours.
//               </p>
//               <div className="mt-50">
//                 <div className="rk-theme-contact-info-wrap">
//                   <div className="rk-theme-contact-info-item">
//                     <h5>Send us an email:</h5>
//                     <a href="mailto:jamilrayhan10@gmail.com">
//                       jamilrayhan10@gmail.com
//                     </a>
//                   </div>
//                   <div className="rk-theme-contact-info-item">
//                     <h5>Give us a call:</h5>
//                     <a href="tel:01300972752">+8801300972752</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-6">
//             <div
//               className="rk-theme-contact-box rk-theme-contact-form"
//             >
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="rk-theme-contact-column">
//                   <div className="rk-theme-contact-field">
//                     <label>Enter your name</label>
//                     <input
//                       type="text"
//                       placeholder="Adam Smith"
//                       {...register("name")}
//                     />
//                     <small>{errors.name?.message}</small>
//                   </div>
//                   <div className="rk-theme-contact-field">
//                     <label>Email address</label>
//                     <input
//                       type="email"
//                       placeholder="example@gmail.com"
//                       {...register("email")}
//                     />
//                     <small>{errors.email?.message}</small>
//                   </div>
//                 </div>

//                 <div className="rk-theme-contact-column">
//                   <div className="rk-theme-contact-field">
//                     <label>Purchase Code</label>
//                     <input
//                       type="text"
//                       placeholder="Purchase Code"
//                       {...register("purchaseCode")}
//                     />
//                     <small>{errors.purchaseCode?.message}</small>
//                   </div>
//                   <div className="rk-theme-contact-field">
//                     <label>Template Name</label>
//                     <input
//                       type="text"
//                       placeholder="Template Name"
//                       {...register("templateName")}
//                     />
//                     <small>{errors.templateName?.message}</small>
//                   </div>
//                 </div>

//                 <div className="rk-theme-contact-field">
//                   <label>Message</label>
//                   <textarea
//                     placeholder="Write your message here..."
//                     {...register("message")}
//                   />
//                   <small>{errors.message?.message}</small>
//                 </div>

//                 <button id="rk-theme-main-submit-btn" type="submit">
//                   Send your message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export interface FormData {
  name: string;
  email: string;
  purchaseCode: string;
  templateName: string;
  message: string;
}

type ContactAreaProps = {
  senMail?: (data: FormData) => Promise<{ success: boolean; error?: string }>;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  purchaseCode: yup.string().required("Purchase code is required"),
  templateName: yup.string().required("Template name is required"),
  message: yup.string().required("Message is required"),
}).required();

export default function ContactArea({ senMail }: ContactAreaProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Your message was sent successfully!");
        reset();
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Your Name" />
      <small>{errors.name?.message}</small>

      <input {...register("email")} placeholder="Your Email" />
      <small>{errors.email?.message}</small>

      <input {...register("purchaseCode")} placeholder="Purchase Code" />
      <small>{errors.purchaseCode?.message}</small>

      <input {...register("templateName")} placeholder="Template Name" />
      <small>{errors.templateName?.message}</small>

      <textarea {...register("message")} placeholder="Your Message" />
      <small>{errors.message?.message}</small>

      <button type="submit">Send Message</button>
    </form>
  );
}
