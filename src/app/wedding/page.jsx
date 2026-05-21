"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = () =>
  typeof window !== "undefined" && "ontouchstart" in window;

// Shared state manager — only one card open at a time on mobile
const CardGroup = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: activeIndex === index,
          onActivate: () => setActiveIndex(index),
          onDeactivate: () => setActiveIndex(null),
        })
      )}
    </>
  );
};

const FlipCard = ({ children, className, isActive, onActivate, onDeactivate }) => {
  const [hovered, setHovered] = useState(false);

  const revealed = isTouchDevice() ? isActive : hovered;

  const handleClick = () => {
    if (!isTouchDevice()) return;
    if (isActive) {
      onDeactivate();
    } else {
      onActivate(); // automatically closes previous via parent state
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice()) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) setHovered(false);
  };

  const childArray = React.Children.toArray(children);

  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <div className="relative w-full h-full">
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease",
            opacity: revealed ? 0 : 1,
            pointerEvents: revealed ? "none" : "auto",
          }}
        >
          {childArray[0]}
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease",
            opacity: revealed ? 1 : 0,
            pointerEvents: revealed ? "auto" : "none",
          }}
        >
          {childArray[1]}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();

      intro
        .from(".stickyAnimation2", {
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          ".MainTI",
          {
            y: "200%",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.8",
        );

      gsap.to(".stickyAnimation2", {
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".MMAINDDiv2",
          start: "top top",
          end: "top -100%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen relative MMAINDDiv overflow-x-hidden">
        <div className="w-full h-[100vh] relative z-[-90] MMAINDDiv2">
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[20vh]">
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">Wedding <span className="max-md:hidden ml-5"> Events</span></span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
              <span className="flex sm:hidden MainTI">Events</span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q w-fit h-fit tracking-tight overflow-hidden">
              <p className="Font_YV max-w-[600px] MainTI w-[90%] mx-auto pb-5 mt-4 flex justify-center items-center">
                Join us for two days in Marrakech, among the olive groves and Atlas Mountains, beginning with the Mehendi and Sangeet on Saturday, followed by the Wedding Ceremony and Reception on Sunday.
              </p>
            </div>
          </div>

          <div className="w-full h-full absolute top-[0%] left-0 z-[-1] overflow-x-hidden">
            <img
              src={`/allPageImg/wedding/wed1.webp`}
              alt="Img"
              className="w-full h-full object-cover object-bottom max-md:object-[80%_0%] stickyAnimation2"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#ffffff]/60 to-[#ffffff] z-100" />
        </div>

        {/* Cards Section */}
        <div className="w-full h-fit COLOR_BG_RED relative z-100 flex max-md:flex-col p-20 max-md:gap-10 gap-5 px-10 justify-center items-center">
          <CardGroup>

            {/* T1 — Mehndi Lunch */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-center max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                    Mehendi
                  </h1>
                  <span className="text-[14px] leading-[16px] max-md:text-center max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                    Saturday, November 14th, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                  <img src="/assets/s10.png" className="w-[70%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[#044BB2] overflow-hidden flex items-center justify-center p-5">
                <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1] opacity-50 object-center" />
                <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                  Timing ~ 12:00 PM <br /><br />
                  Main Pool & Orchards<br /><br />
                  Henna, lunch, and an afternoon in the orchards.
                </p>
              </div>
            </FlipCard>

            {/* T2 — Sangeet Dinner */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                    Sangeet
                  </h1>
                  <span className="text-[14px] leading-[16px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                    Saturday, November 14th, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                  <img src="/assets/s35.png" className="w-[70%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[#044BB2] overflow-hidden flex items-center justify-center p-5">
                <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1] opacity-50 object-center" />
                <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                  Timing ~ 7:30 PM <br /><br />
                  Secret Garden<br /><br />
                  Experience the magic of Marrakech with a night of music, dance, and two families coming together in celebration
                </p>
              </div>
            </FlipCard>

            {/* T3 — Nikkah Ceremony */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                    Nikkah
                  </h1>
                  <span className="text-[14px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                    Sunday, November 15th, 2026
                  </span>
                </div>
                <div className="w-full h-fit flex justify-end max-md:justify-center items-end">
                  <img src="/assets/s05.png" className="w-[45%] object-center object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[#044BB2] overflow-hidden flex items-center justify-center p-5">
                <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1] opacity-50 object-center" />
                <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                  Timing ~ 12:30 PM<br /><br />
                  Grand Canal<br /><br />
                  Amidst the olive groves and still waters of the Grand Canal, the wedding ceremony takes place
                </p>
              </div>
            </FlipCard>

            {/* T4 — Reception */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                    Reception Dinner
                  </h1>
                  <span className="text-[14px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                    Sunday, November 15th, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                  <img src="/assets/s19.png" className="w-[70%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[#044BB2] overflow-hidden flex items-center justify-center p-5">
                <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1] opacity-50 object-center" />
                <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                  Timing ~ 7:30 PM<br /><br />
                  The Courtyard<br /><br />
                  Beneath the arches of the Courtyard, an evening of dinner, toasts, and dancing
                </p>
              </div>
            </FlipCard>

            {/* T5 — Farewell Breakfast */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-center max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                    Farewell Breakfast
                  </h1>
                  <span className="text-[14px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                    Monday, November 16th, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                  <img src="/assets/s20.png" className="w-[70%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[#044BB2] overflow-hidden flex items-center justify-center p-5">
                <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1] opacity-50 object-center" />
                <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                  Timing ~ 11:00 AM<br /><br />
                  The Terraces<br /><br />
                  A final farewell over breakfast on the Terrace
                </p>
              </div>
            </FlipCard>

          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default page;