

"use client";
import { useState } from "react";
import Link from "next/link"; 
 

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "How do I start AI SaaS?",
    answer:
      "Go to our official website and create an account. You'll need to provide some basic information and agree to our terms and conditions.",
  },
  {
    id: 2,
    question: "Can I customize AI SaaS solutions?",
    answer:
      "AI SaaS platforms offer customization options to adapt their services to your specific requirements. It's best to inquire with the provider about customization capabilities.",
  },
  {
    id: 3,
    question: "How can AI benefit my business?",
    answer:
      "AI SaaS can enhance operational efficiency, automate tasks, improve decision-making with data insights, and provide personalized customer experiences.",
  },
];


interface StyleProps {
  style_2?: boolean;
}

export default function FaqHomeOne({ style_2 = false }: StyleProps) {
  const [activeId, setActiveId] = useState<number>(1); 

  const toggleFaq = (index: number) => {
      if (activeId === index) {
      setActiveId(-1);
    } else {
      setActiveId(index);
    }
  };

 



  return (
    <section className={` ${style_2 ? 'rk-theme-section-padding6' : 'rk-theme-section-padding pt-0'}`}>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div
              className="rk-theme-default-content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2>Freely ask us for more information</h2>
              <p>
                Our AI SaaS solutions can be quickly deployed, enabling users to
                start benefiting from AI capabilities without lengthy setup and
                development times in fast-paced industries.
              </p>
              <div className="mt-50">
                <Link
                  className="rk-theme-default-btn btn2"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="/faq"
                  data-text="Ask you questions"
                >
                  <span className="button-wraper">Ask you questions</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ items */}
          <div className="col-lg-5 offset-lg-1">
            <div
              className="azzle-faq-wrap1"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {faq_data.map((faq) => (
                <div
                  key={faq.id}
                  className={`azzle-faq-item ${
                    activeId === faq.id ? "open" : ""
                  }`}
                >
                  <div
                    className="azzle-faq-header"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{faq.question}</h3>
                    <div className="azzle-active-icon">
                      <img
                        src="assets/images/home1/+.svg"
                        alt="toggle"
                        style={{
                          transform:
                            activeId === faq.id ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                  {activeId === faq.id && (
                    <div className="azzle-faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
