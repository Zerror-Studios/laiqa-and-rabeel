"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const faqs = [
  {
    id: 1,
    question: "When should I arrive?",
    answer:
      `We recommend arriving by the morning of Saturday, November 14. Celebrations begin at noon.
`,
  },
  {
    id: 2,
    question: "Where will I stay?",
    answer:
      `The Shariff and Jawaid families are hosting all guests for both nights across The Oberoi Marrakech and the nearby Park Hyatt Marrakech. 
`,
  },
  {
    id: 3,
    question: "When should I depart?",
    answer: `The weekend closes with a Farewell Breakfast on Monday, November 16. Guests are welcome to depart that afternoon.`,
  },
  {
    id: 4,
    question: "Where will the wedding events take place? ",
    answer:
      `All events will be held at The Oberoi Marrakech unless otherwise noted.
`,
  },
  {
    id: 5,
    question: "Which airport should I fly into?",
    answer:
      `The closest airport is Marrakech Menara Airport (RAK), approximately 25 minutes from the hotel. Casablanca is also an option for those with more international connections — from there, a short domestic flight or a 2-hour drive will get you to Marrakech.

`,
  },
  {
    id: 6,
    question: "Will transportation be provided?",
    answer:
     `Transfers will be arranged for all guests between the hotels and wedding events, including airport shuttles.
`,
  },
  {
    id: 12,
    question: "What should I keep in mind about visas and entry requirements? ",
    answer:
      `Keep in mind that Morocco requires passports to have 6 month validity upon entry . The official site for the Morocco e-visa process is here (e.g., for Indian passport holders). Please reach out to our wedding planning team [WEDDING TEAM EMAIL] if you have questions and to receive hotel confirmation details for the application. Please note that it is advised you apply for the e-visa 2 weeks ahead for sufficient processing time.

`,
  },
  {
    id: 7,
    question: "What is the dress code?",
    answer:
      `Dress codes vary by event. A wardrobe guide will be shared closer to the date.

`,
  },
  {
    id: 8,
    question: "What will the weather be like?",
    answer:
      `November is one of the best times to visit Marrakech — warm sunny days (21–24°C / 70–75°F) and cooler evenings. A light layer is recommended for nighttime events.
`,
  },
  {
    id: 10,
    question: "Can I extend my stay?",
    answer: `If you'd like to arrive early or stay on after the festivities, we've arranged preferential rates at both hotels. Please reach out to our planning team at laiqaandrabeel@gmail.com for details.

`,
    LINK: `https://indianvisaonline.gov.in/evisa/tvoa.html`,
  },
  {
    id: 9,
    question: "Can I bring a guest?",
    answer:
      `Invitations are extended to named guests only. We appreciate your understanding.

`,
  },
  
  {
    id: 11,
    question: "Who should I contact with questions? ",
    answer:
      `Please reach out to our wedding planning team at laiqaandrabeel@gmail.com.

`,
  },
  
  
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="FAQ"
      className="min-h-screen max-md:min-h-fit  flex items-center relative justify-center max-md:py-[20vw] py-[20vh]"
    >

       
      
      <div className ="w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden">
        <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full object-cover object-center opacity-50" />
      </div>
      


      <div className="w-[80%] max-md:w-full px-6 max-md:px-[20px] flex flex-col gap-20 relative z-50">
        <h2 className="text-center Font_Q flex flex-col justify-center items-center max-md:justify-start max-md:mt-10 COLOR_TEXT_RED">
          FAQ
         
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-[#55130121] pb-6 group relative"
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="group w-full flex items-center justify-between text-left"
              >
                <span className="tracking-wide uppercase COLOR_TEXT_RED Font_YV text-[1.5rem] max-md:text-[1.1rem] md:text-base">
                  {faq.question}
                </span>

                {/* ICON */}
                <span
                  className={`relative w-5 h-5 transition-transform duration-500 ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  <img
                    src="/svgs/IconPlusnew.svg"
                    alt="icon"
                    className="absolute inset-0 w-full h-full"
                  />
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_CREAM" />
                </span>
              </button>

              {/* CONTENT */}
              <div
                ref={(el) => (contentRefs.current[faq.id] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  height:
                    openId === faq.id
                      ? `${contentRefs.current[faq.id]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="mt-4 Font_YV text-[18px] text-[#044ab291]">
                  {faq.answer}

                  {/* {(faq.id === 14 || faq.id === 15) && (
                    <Link
                      href="/explore"
                      className="COLOR_TEXT_RED underline ml-2"
                    >
                      Know More
                    </Link>
                  )}
                 
                  {faq.id === 10 && faq.LINK && (
                    <a
                      href={faq.LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 COLOR_TEXT_RED underline"
                    >
                      Apply for Indian e-Tourist Visa
                    </a>
                  )} */}
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="w-0 h-px bg-[#044BB2] group-hover:w-full absolute bottom-0 left-0 transition-all duration-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
