// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { gsap } from "gsap";

// // const TABS = [
// //   {
// //     id: "transportation",
// //     label: "Transportation",
// //     number: "1",
// //     content: (
// //       <div className="gs-content">
// //         <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">
// //           Transportation
// //         </h2>
// //         <p className="gs-body COLOR_TEXT_RED Font_YV">
// //           Transfers will be arranged for all guests between the hotels and wedding events, including airport shuttles
// //         </p>
// //         <p className="gs-body COLOR_TEXT_RED Font_YV">
// //          The closest airport is Marrakech Menara Airport (RAK), approximately 25 minutes from the hotel. Casablanca (CMN) is also a good option for those flying in from further afield — from there, a short domestic flight or a 2.5-hour drive will get you to Marrakech.

// //         </p>
// //         <div className="gs-body COLOR_TEXT_RED Font_YV">
// //           For any questions about transportation, please reach out to our planning team at{" "}
// //           <p href="mailto:" className="mt-5">
// //             wedding@laiqarabeel.com
// //           </p>

// //         </div>

// //       </div>
// //     ),
// //   },
// //   {
// //     id: "style-guide",
// //     label: "Style Guide",
// //     number: "2",
// //     content: (
// //       <div className="gs-content">
// //         <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">Style Guide</h2>
// //         <p className="gs-body COLOR_TEXT_RED Font_YV">
// //           A wardrobe guide covering dress codes and outfit inspiration for each event will be shared closer to the date.

// //         </p>
// //       </div>
// //     ),
// //   },
// //   {
// //     id: "hair-makeup",
// //     label: "Hair & Makeup",
// //     number: "3",
// //     content: (
// //       <div className="gs-content">
// //         <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">
// //           Hair & Makeup
// //         </h2>
// //         <p className="gs-body COLOR_TEXT_RED Font_YV">

// // A private salon offering hair and makeup services will be available on November 14th and 15th, located at The Oberoi Marrakech. Booking details will be shared closer to the date.

// //         </p>
// //       </div>
// //     ),
// //   },
// // ];

// // export default function GuestServices() {
// //   const [active, setActive] = useState(0);
// //   const [animating, setAnimating] = useState(false);

// //   const heroTitleRef = useRef(null);
// //   const heroSubRef = useRef(null);
// //   const heroEyebrowRef = useRef(null);
// //   const heroLineRef = useRef(null);
// //   const tabsBarRef = useRef(null);
// //   const contentPanelRef = useRef(null);
// //   const underlineRef = useRef(null);
// //   const tabRefs = useRef([]);

// //   const moveUnderline = (index, animate = true) => {
// //     const tabEl = tabRefs.current[index];
// //     if (!tabEl || !underlineRef.current) return;
// //     gsap.to(underlineRef.current, {
// //       x: tabEl.offsetLeft,
// //       width: tabEl.offsetWidth,
// //       duration: animate ? 0.45 : 0,
// //       ease: "power3.inOut",
// //     });
// //   };

// //   useEffect(() => {
// //     const tl = gsap.timeline({ delay: 0.25, defaults: { ease: "power3.out" } });
// //     tl.fromTo(
// //       heroEyebrowRef.current,
// //       { opacity: 0, y: 10 },
// //       { opacity: 1, y: 0, duration: 0.55 },
// //     )
// //       .fromTo(
// //         heroLineRef.current,
// //         { scaleX: 0 },
// //         { scaleX: 1, duration: 1.0, ease: "power4.inOut" },
// //         "-=0.3",
// //       )
// //       .fromTo(
// //         heroTitleRef.current,
// //         { opacity: 0, y: 36 },
// //         { opacity: 1, y: 0, duration: 0.6 },
// //         "-=0.5",
// //       )
// //       .fromTo(
// //         heroSubRef.current,
// //         { opacity: 0, y: 14 },
// //         { opacity: 1, y: 0, duration: 0.6 },
// //         "-=0.5",
// //       )
// //       .fromTo(
// //         tabsBarRef.current.querySelectorAll(".gs-tab"),
// //         { opacity: 0, y: 14 },
// //         { opacity: 1, y: 0, stagger: 0.09, duration: 0.48 },
// //         "-=0.35",
// //       )
// //       .fromTo(
// //         contentPanelRef.current,
// //         { opacity: 0, y: 22 },
// //         { opacity: 1, y: 0, duration: 0.6 },
// //         "-=0.25",
// //       );

// //     setTimeout(() => moveUnderline(0, false), 60);
// //   }, []);

// //   // Re-position underline on window resize
// //   useEffect(() => {
// //     const handleResize = () => moveUnderline(active, false);
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, [active]);

// //   const switchTab = (i) => {
// //     if (i === active || animating) return;
// //     setAnimating(true);
// //     moveUnderline(i);
// //     gsap.to(contentPanelRef.current, {
// //       opacity: 0,
// //       y: 14,
// //       duration: 0.2,
// //       ease: "power2.in",
// //       onComplete: () => {
// //         setActive(i);
// //         setAnimating(false);
// //         gsap.fromTo(
// //           contentPanelRef.current,
// //           { opacity: 0, y: 14 },
// //           { opacity: 1, y: 0, duration: 0.42, ease: "power3.out" },
// //         );
// //       },
// //     });
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

// //         /* ── Page shell ── */
// //         .gs-page {
// //           min-height: 100vh;
// //           // background: #ffffff;
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         /* ── Top accent ── */
// //         .gs-edge-top {
// //           height: 2px;
// //         //   background: linear-gradient(90deg, transparent 0%, #1e3a8a 30%, #93c5fd 65%, transparent 100%);
// //           flex-shrink: 0;
// //         }
// //         .gs-edge-bottom {
// //           height: 2px;
// //         //   background: linear-gradient(90deg, transparent 0%, #93c5fd 30%, #1e3a8a 65%, transparent 100%);
// //           flex-shrink: 0;
// //           margin-top: auto;
// //         }

// //         /* ── Hero ── */
// //         .gs-hero {
// //           position: relative;
// //           overflow: hidden;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //           padding: 5rem 1.5rem 4rem;
// //         }

// //         /* Ambient blobs — pointer-events off so they never block taps */
// //         .gs-blob {
// //           position: absolute;
// //           border-radius: 50%;
// //           pointer-events: none;
// //           z-index: 0;
// //         }
// //         .gs-blob-1 {
// //           top: -200px; right: -140px;
// //           width: 480px; height: 480px;
// //         //   background: radial-gradient(circle, #eff6ff 0%, transparent 70%);
// //         }
// //         .gs-blob-2 {
// //           bottom: -130px; left: -90px;
// //           width: 380px; height: 380px;
// //         //   background: radial-gradient(circle, #dbeafe 0%, transparent 70%);
// //         }

// //         .gs-hero-eyebrow {

// //           font-size: clamp(0.6rem, 1.5vw, 0.7rem);
// //           letter-spacing: 0.3em;
// //           text-transform: uppercase;
// //           color: #60a5fa;
// //           margin-bottom: 1.4rem;
// //           display: flex;
// //           align-items: center;
// //           gap: 12px;
// //           position: relative;
// //           z-index: 1;
// //           opacity: 0;
// //         }
// //         .gs-eyebrow-line {
// //           display: inline-block;
// //           width: 36px;
// //           height: 1px;
// //           background: #93c5fd;
// //           flex-shrink: 0;
// //         }

// //         .gs-hero-line {
// //           width: 56px;
// //           height: 1.5px;
// //           background: linear-gradient(90deg, #1e3a8a, #60a5fa);
// //           transform-origin: left;
// //           margin-bottom: 1.6rem;
// //           position: relative;
// //           z-index: 1;
// //         }

// //         .gs-hero-title {

// //           font-size: clamp(2.6rem, 8vw, 6rem);
// //           font-weight: 400;
// //           letter-spacing: -0.025em;
// //           line-height: 1.06;
// //           margin-bottom: 1rem;
// //           position: relative;
// //           z-index: 1;
// //           opacity: 0;
// //         }

// //         .gs-hero-sub {

// //           // font-size: clamp(0.95rem, 2.5vw, 1.1rem);
// //           color: #5b7ec9;
// //           // letter-spacing: 0.06em;
// //           position: relative;
// //           z-index: 1;
// //           opacity: 0;
// //           max-width: 480px;
// //           line-height: 1.7;
// //         }

// //         /* ── Tab bar ── */
// //         .gs-tabs-outer {
// //           width: 100%;
// //           max-width: 900px;
// //           margin: 2.5rem auto 0;
// //           padding: 0 1.5rem;
// //         }

// //         /* On small screens, allow horizontal scroll for tabs */
// //         .gs-tabs-scroll {
// //           overflow-x: auto;
// //           -webkit-overflow-scrolling: touch;
// //           scrollbar-width: none;
// //         }
// //         .gs-tabs-scroll::-webkit-scrollbar { display: none; }

// //         .gs-tabs-bar {
// //           position: relative;
// //           display: flex;
// //           align-items: flex-end;
// //           border-bottom: 1px solid #dbeafe;
// //           min-width: max-content; /* keep tabs in one line, scroll parent */
// //         }

// //         .gs-tab {
// //           position: relative;
// //           display: flex;
// //           align-items: center;
// //           gap: 6px;
// //           padding: 0.9rem 1.4rem 1.1rem;
// //           cursor: pointer;
// //           background: none;
// //           border: none;
// //           outline: none;
// //           opacity: 0;
// //           -webkit-tap-highlight-color: transparent;
// //           touch-action: manipulation;
// //         }

// //         .gs-tab-num {

// //           font-size: clamp(1rem, 1rem, 1rem);
// //           letter-spacing: 0.1em;

// //           font-weight: 500;
// //           line-height: 1;
// //           margin-top: 2px;
// //           transition: color 0.3s;
// //         }
// //         .gs-tab.is-active .gs-tab-num {  }

// //         .gs-tab-label {

// //           font-size: clamp(0.8rem, 2vw, 0.95rem);
// //           letter-spacing: 0.09em;
// //           text-transform: uppercase;
// //           font-weight: 500;

// //           transition: color 0.3s;
// //           white-space: nowrap;
// //         }
// //         .gs-tab.is-active .gs-tab-label { color: #0c1f5c; }

// //         .gs-tab-underline {
// //           position: absolute;
// //           bottom: -1px;
// //           left: 0;
// //           height: 2px;
// //           background: linear-gradient(90deg, #1e3a8a, #3b82f6);
// //           border-radius: 99px;
// //           pointer-events: none;
// //           width: 0;
// //         }

// //         /* ── Content panel ── */
// //         .gs-panel {
// //           width: 100%;
// //           max-width: 900px;
// //           margin: 0 auto;
// //           padding: 3rem 1.5rem 5rem;
// //         }

// //         .gs-content {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 1.4rem;
// //         }

// //         .gs-section-title {

// //           font-size: clamp(1.7rem, 4vw, 2.8rem);
// //           font-weight: 400;

// //           letter-spacing: -0.015em;
// //           line-height: 1.1;
// //           padding-bottom: 0.65rem;
// //           border-bottom: 1px solid #e8f0fe;
// //           margin-bottom: 0.3rem;
// //         }

// //         .gs-body {

// //           // font-size: clamp(1.2rem, 2.5vw, 1.15rem);
// //           font-weight: 300;

// //           // line-height: 1.9;
// //           // letter-spacing: 0.01em;
// //         }

// //         .gs-link {
// //           color: #2563eb;
// //           text-decoration: none;
// //           border-bottom: 1px solid #bfdbfe;
// //           padding-bottom: 1px;
// //           transition: color 0.2s, border-color 0.2s;
// //           word-break: break-word;
// //         }
// //         .gs-link:hover { color: #1e40af; border-color: #1e40af; }

// //         .gs-divider {
// //           height: 1px;
// //           background: linear-gradient(90deg, #dbeafe 0%, transparent 80%);
// //           margin: 0.4rem 0;
// //         }

// //         /* ── Footer ── */
// //         .gs-footer {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 10px;
// //           padding: 1rem 1.5rem 3rem;
// //         }
// //         .gs-footer-ornament {
// //           display: flex;
// //           align-items: center;
// //           gap: 14px;
// //           color: #bfdbfe;
// //         }
// //         .gs-footer-ornament-line { width: 32px; height: 1px; background: #dbeafe; }
// //         .gs-footer-note {

// //           font-size: 0.9rem;
// //           color: #93c5fd;
// //           font-style: italic;
// //           letter-spacing: 0.05em;
// //           text-align: center;
// //         }

// //         /* ── Responsive breakpoints ── */

// //         /* 480px and below — very small phones */
// //         @media (max-width: 480px) {
// //           .gs-hero { padding: 3.5rem 1rem 3rem; }
// //           .gs-blob-1 { width: 280px; height: 280px; top: -100px; right: -80px; }
// //           .gs-blob-2 { width: 220px; height: 220px; bottom: -80px; left: -60px; }
// //           .gs-tabs-outer { padding: 0 0.75rem; }
// //           .gs-tab { padding: 0.75rem 0.9rem 0.95rem; gap: 4px; }
// //           .gs-tab-num { display: none; } /* hide numbers on tiny screens */
// //           .gs-panel { padding: 2rem 1rem 4rem; }
// //           .gs-footer { padding: 0.75rem 1rem 2.5rem; }
// //         }

// //         /* 481–768px — large phones / small tablets */
// //         @media (min-width: 481px) and (max-width: 768px) {
// //           .gs-hero { padding: 4rem 1.25rem 3.5rem; }
// //           .gs-tabs-outer { padding: 0 1rem; }
// //           .gs-tab { padding: 0.85rem 1.1rem 1rem; }
// //           .gs-panel { padding: 2.5rem 1.25rem 4.5rem; }
// //         }

// //         /* 769px+ — tablet and desktop: blobs can be full size */
// //         @media (min-width: 769px) {
// //           .gs-hero { padding: 5.5rem 2rem 4.5rem; }
// //           .gs-tabs-outer { padding: 0 2rem; }
// //           .gs-tab { padding: 0.95rem 1.6rem 1.15rem; }
// //           .gs-panel { padding: 3.5rem 2rem 5rem; }
// //         }

// //         /* 1024px+ — large screens: constrain and center nicely */
// //         @media (min-width: 1024px) {
// //           .gs-hero { padding: 6rem 2rem 5rem; }
// //         }
// //       `}</style>

// //       <div className="gs-page pt-[10vh] relative">

// //       <div className ="w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden">
// //         <img src={`/allPageImg/sky.png`} alt="img" className="w-full h-full object-cover object-center opacity-50" />
// //       </div>

// //         <div className="gs-edge-top" />

// //         {/* ── HERO ── */}
// //         <header className="gs-hero">
// //           <div className="gs-blob gs-blob-1" />
// //           <div className="gs-blob gs-blob-2" />

// //           <h1
// //             ref={heroTitleRef}
// //             className="gs-hero-title text-center COLOR_TEXT_RED Font_Q "
// //           >
// //             Guest <br className="md:hidden" /> Services
// //           </h1>

// //           <p ref={heroSubRef} className="gs-hero-sub COLOR_TEXT_RED Font_YV">
// //             Everything arranged, so you can be fully present for every
// //             celebration.
// //           </p>
// //         </header>

// //         {/* ── TABS ── */}
// //         <div className="gs-tabs-outer flex justify-center items-center">
// //           <div className="gs-tabs-scroll">
// //             <div ref={tabsBarRef} className="gs-tabs-bar" role="tablist">
// //               {TABS.map((tab, i) => (
// //                 <button
// //                   key={tab.id}
// //                   ref={(el) => (tabRefs.current[i] = el)}
// //                   className={`gs-tab${active === i ? " is-active" : ""}`}
// //                   role="tab"
// //                   aria-selected={active === i}
// //                   aria-controls={`panel-${tab.id}`}
// //                   onClick={() => switchTab(i)}
// //                 >
// //                   <span className="gs-tab-num COLOR_TEXT_RED Font_YV">
// //                     {tab.number}
// //                   </span>
// //                   <span className="gs-tab-label COLOR_TEXT_RED Font_YV">
// //                     {tab.label}
// //                   </span>
// //                 </button>
// //               ))}
// //               <div ref={underlineRef} className="gs-tab-underline" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* ── PANEL ── */}
// //         <div
// //           ref={contentPanelRef}
// //           className="gs-panel text-center "
// //           role="tabpanel"
// //           id={`panel-${TABS[active].id}`}
// //         >
// //           {TABS[active].content}
// //         </div>

// //         {/* ── FOOTER ──
// //         <div className="gs-footer">
// //           <div className="gs-footer-ornament">
// //             <div className="gs-footer-ornament-line" />
// //             <span>✦</span>
// //             <div className="gs-footer-ornament-line" />
// //           </div>
// //           <p className="gs-footer-note">More details will be shared closer to the date.</p>
// //         </div> */}

// //         {/* <div className="gs-edge-bottom" /> */}
// //       </div>
// //     </>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const EVENTS = [
//   {
//     id: "mehendi",
//     day: "Saturday, November 14th",
//     time: "12:00 PM",
//     venue: "Main Pool & Orchards",
//     name: "Mehendi",
//     theme: "Golden Hour",
//     dressCode: "Festive Fusion",
//     description:
//       "An afternoon of henna, music, and sun. Wear shades of orange and yellow in festive fusion: think embroidered co-ord sets, kurtas, and flowy silhouettes that move easily.",
//     colors: ["#E08D3C", "#D9531E", "#E8C547", "#D8CBB0"],
//     imgURL : `/imgs/MEHENDI.png`,
//   },
//   {
//     id: "sangeet",
//     day: "Saturday, November 14th",
//     time: "7:30 PM",
//     venue: "Secret Garden",
//     name: "Sangeet",
//     theme: "Jewels & Metallics",
//     dressCode: "Cocktail Glamour",
//     description:
//       "The night turns up — dress in rich jewel tones or metallics with cocktail glamour in mind: sequins, shimmer, and statement pieces welcome. Comfortable enough to dance in is the only rule.",
//     colors: ["#1F5C3E", "#6B3FA0", "#2A3F8F", "#A32357"],
//     imgURL : `/imgs/SANGEET.png`,
//   },
//   {
//     id: "nikkah",
//     day: "Sunday, November 15th",
//     time: "12:30 PM",
//     venue: "Grand Canal",
//     name: "Nikkah",
//     theme: "Pastels in Bloom",
//     dressCode: "South Asian Traditional",
//     description:
//       "A ceremony in soft color. Choose South Asian traditional wear in pastels: sarees, lehengas, salwar kameez, sherwanis, or kurta sets in beige, blush, sage, or powder blue.",
//     colors: ["#C9A876", "#E8B4C8", "#B8C99A", "#A9C7E0"],
//     imgURL : `/imgs/NIKKAH.png`
    
//   },
//   {
//     id: "reception",
//     day: "Sunday, November 15th",
//     time: "7:30 PM",
//     venue: "The Courtyard",
//     name: "Reception",
//     theme: "Timeless Formal",
//     dressCode: "Western Formal",
//     description:
//       "The final evening calls for floor length gowns for women, black tuxedos or suits for men. Kindly refrain from wearing red, as it is reserved for the bride.",
//     colors: [],
//     imgURL : `/imgs/RECEPTION.png`
//   },
// ];

// const TABS = [
//   {
//     id: "transportation",
//     label: "Transportation",
//     number: "1",
//     content: (
//       <div className="gs-content">
//         <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">
//           Transportation
//         </h2>
//         <p className="gs-body COLOR_TEXT_RED Font_YV">
//           Transfers will be arranged for all guests between the hotels and
//           wedding events, including airport shuttles
//         </p>
//         <p className="gs-body COLOR_TEXT_RED Font_YV">
//           The closest airport is Marrakech Menara Airport (RAK), approximately
//           25 minutes from the hotel. Casablanca (CMN) is also a good option for
//           those flying in from further afield — from there, a short domestic
//           flight or a 2.5-hour drive will get you to Marrakech.
//         </p>
//         <div className="gs-body COLOR_TEXT_RED Font_YV">
//           For any questions about transportation, please reach out to our
//           planning team at{" "}
//           <p href="mailto:" className="mt-5">
//             wedding@laiqarabeel.com
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "style-guide",
//     label: "Style Guide",
//     number: "2",
//     content: (
//       <div className="gs-content">
//         <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">Style Guide</h2>
//         <p className="gs-body COLOR_TEXT_RED Font_YV gs-wardrobe-intro">
//           To help with outfit planning, we&apos;ve put together this style guide
//           for each celebration. Think of it as inspiration — we&apos;d love for
//           you to add your own personal touch. We can&apos;t wait to celebrate
//           with you!
//         </p>

//         <div className="gs-events-grid">
//           {EVENTS.map((event) => (
//             <div className="gs-event-card" key={event.id}>
//               <div className="gs-event-header">
//                 <span className=" COLOR_TEXT_RED Font_YV">
//                   {event.day} &middot; {event.time} &middot; {event.venue}
//                 </span>
//                 <h3 className="gs-event-name COLOR_TEXT_RED Font_Q">
//                   {event.name}
//                 </h3>
//               </div>

//               {event.colors.length > 0 && (
//                 <div className="gs-swatches" aria-hidden="true">
//                   {event.colors.map((color, idx) => (
//                     <span
//                       key={idx}
//                       className="gs-swatch"
//                       style={{ backgroundColor: color }}
//                     />
//                   ))}
//                 </div>
//               )}

//               <p className="  COLOR_TEXT_RED Font_YV font-light">
//                 Dress Code: <span>{event.dressCode}</span>
//               </p>
//               <p className="gs-event-name uppercase COLOR_TEXT_RED Font_Q mt-5">
//                 {event.theme}
//               </p>
//               <p className=" COLOR_TEXT_RED Font_YV font-light opacity-90">
//                 {event.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <a href="/PDF/LRWG.pdf" target="blank">
//           <div className=" px-5 py-2 bg-[#044BB2] hover:bg-[#07357a] sm:w-fit mt-2 mx-auto Font_YV flex justify-center items-center uppercase cursor-pointer text-white">
//             View PDF
//           </div>
//         </a>
//       </div>
//     ),
//   },
//   {
//     id: "hair-makeup",
//     label: "Hair & Makeup",
//     number: "3",
//     content: (
//       <div className="gs-content">
//         <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">
//           Hair & Makeup
//         </h2>
//         <p className="gs-body COLOR_TEXT_RED Font_YV">
//           A private salon offering hair and makeup services will be available on
//           November 14th and 15th, located at The Oberoi Marrakech. Booking
//           details will be shared closer to the date.
//         </p>
//       </div>
//     ),
//   },
// ];

// export default function GuestServices() {
//   const [active, setActive] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const heroTitleRef = useRef(null);
//   const heroSubRef = useRef(null);
//   const heroEyebrowRef = useRef(null);
//   const heroLineRef = useRef(null);
//   const tabsBarRef = useRef(null);
//   const contentPanelRef = useRef(null);
//   const underlineRef = useRef(null);
//   const tabRefs = useRef([]);

//   const moveUnderline = (index, animate = true) => {
//     const tabEl = tabRefs.current[index];
//     if (!tabEl || !underlineRef.current) return;
//     gsap.to(underlineRef.current, {
//       x: tabEl.offsetLeft,
//       width: tabEl.offsetWidth,
//       duration: animate ? 0.45 : 0,
//       ease: "power3.inOut",
//     });
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.25, defaults: { ease: "power3.out" } });
//     tl.fromTo(
//       heroEyebrowRef.current,
//       { opacity: 0, y: 10 },
//       { opacity: 1, y: 0, duration: 0.55 },
//     )
//       .fromTo(
//         heroLineRef.current,
//         { scaleX: 0 },
//         { scaleX: 1, duration: 1.0, ease: "power4.inOut" },
//         "-=0.3",
//       )
//       .fromTo(
//         heroTitleRef.current,
//         { opacity: 0, y: 36 },
//         { opacity: 1, y: 0, duration: 0.6 },
//         "-=0.5",
//       )
//       .fromTo(
//         heroSubRef.current,
//         { opacity: 0, y: 14 },
//         { opacity: 1, y: 0, duration: 0.6 },
//         "-=0.5",
//       )
//       .fromTo(
//         tabsBarRef.current.querySelectorAll(".gs-tab"),
//         { opacity: 0, y: 14 },
//         { opacity: 1, y: 0, stagger: 0.09, duration: 0.48 },
//         "-=0.35",
//       )
//       .fromTo(
//         contentPanelRef.current,
//         { opacity: 0, y: 22 },
//         { opacity: 1, y: 0, duration: 0.6 },
//         "-=0.25",
//       );

//     setTimeout(() => moveUnderline(0, false), 60);
//   }, []);

//   // Re-position underline on window resize
//   useEffect(() => {
//     const handleResize = () => moveUnderline(active, false);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [active]);

//   const switchTab = (i) => {
//     if (i === active || animating) return;
//     setAnimating(true);
//     moveUnderline(i);
//     gsap.to(contentPanelRef.current, {
//       opacity: 0,
//       y: 14,
//       duration: 0.2,
//       ease: "power2.in",
//       onComplete: () => {
//         setActive(i);
//         setAnimating(false);
//         gsap.fromTo(
//           contentPanelRef.current,
//           { opacity: 0, y: 14 },
//           { opacity: 1, y: 0, duration: 0.42, ease: "power3.out" },
//         );
//       },
//     });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

        

//         /* ── Page shell ── */
//         .gs-page {
//           min-height: 100vh;
//           // background: #ffffff;
//           display: flex;
//           flex-direction: column;
//         }

//         /* ── Top accent ── */
//         .gs-edge-top {
//           height: 2px;
//         //   background: linear-gradient(90deg, transparent 0%, #1e3a8a 30%, #93c5fd 65%, transparent 100%);
//           flex-shrink: 0;
//         }
//         .gs-edge-bottom {
//           height: 2px;
//         //   background: linear-gradient(90deg, transparent 0%, #93c5fd 30%, #1e3a8a 65%, transparent 100%);
//           flex-shrink: 0;
//           margin-top: auto;
//         }

//         /* ── Hero ── */
//         .gs-hero {
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           padding: 5rem 1.5rem 4rem;
//         }

//         /* Ambient blobs — pointer-events off so they never block taps */
//         .gs-blob {
//           position: absolute;
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 0;
//         }
//         .gs-blob-1 {
//           top: -200px; right: -140px;
//           width: 480px; height: 480px;
//         //   background: radial-gradient(circle, #eff6ff 0%, transparent 70%);
//         }
//         .gs-blob-2 {
//           bottom: -130px; left: -90px;
//           width: 380px; height: 380px;
//         //   background: radial-gradient(circle, #dbeafe 0%, transparent 70%);
//         }

//         .gs-hero-eyebrow {
         
//           font-size: clamp(0.6rem, 1.5vw, 0.7rem);
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: #60a5fa;
//           margin-bottom: 1.4rem;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           position: relative;
//           z-index: 1;
//           opacity: 0;
//         }
//         .gs-eyebrow-line {
//           display: inline-block;
//           width: 36px;
//           height: 1px;
//           background: #93c5fd;
//           flex-shrink: 0;
//         }

//         .gs-hero-line {
//           width: 56px;
//           height: 1.5px;
//           background: linear-gradient(90deg, #1e3a8a, #60a5fa);
//           transform-origin: left;
//           margin-bottom: 1.6rem;
//           position: relative;
//           z-index: 1;
//         }

//         .gs-hero-title {
         
//           font-size: clamp(2.6rem, 8vw, 6rem);
//           font-weight: 400;
//           letter-spacing: -0.025em;
//           line-height: 1.06;
//           margin-bottom: 1rem;
//           position: relative;
//           z-index: 1;
//           opacity: 0;
//         }


//         .gs-hero-sub {
         
//           // font-size: clamp(0.95rem, 2.5vw, 1.1rem);
//           color: #5b7ec9;
//           // letter-spacing: 0.06em;
//           position: relative;
//           z-index: 1;
//           opacity: 0;
//           max-width: 480px;
//           line-height: 1.7;
//         }

//         /* ── Tab bar ── */
//         .gs-tabs-outer {
//           width: 100%;
//           max-width: 900px;
//           margin: 2.5rem auto 0;
//           padding: 0 1.5rem;
//         }

//         /* On small screens, allow horizontal scroll for tabs */
//         .gs-tabs-scroll {
//           overflow-x: auto;
//           -webkit-overflow-scrolling: touch;
//           scrollbar-width: none;
//         }
//         .gs-tabs-scroll::-webkit-scrollbar { display: none; }

//         .gs-tabs-bar {
//           position: relative;
//           display: flex;
//           align-items: flex-end;
//           border-bottom: 1px solid #dbeafe;
//           min-width: max-content; /* keep tabs in one line, scroll parent */
//         }

//         .gs-tab {
//           position: relative;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 0.9rem 1.4rem 1.1rem;
//           cursor: pointer;
//           background: none;
//           border: none;
//           outline: none;
//           opacity: 0;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }

//         .gs-tab-num {
         
//           font-size: clamp(1rem, 1rem, 1rem);
//           letter-spacing: 0.1em;
          
//           font-weight: 500;
//           line-height: 1;
//           margin-top: 2px;
//           transition: color 0.3s;
//         }
//         .gs-tab.is-active .gs-tab-num {  }

//         .gs-tab-label {
         
//           font-size: clamp(0.8rem, 2vw, 0.95rem);
//           letter-spacing: 0.09em;
//           text-transform: uppercase;
//           font-weight: 500;
          
//           transition: color 0.3s;
//           white-space: nowrap;
//         }
//         .gs-tab.is-active .gs-tab-label { color: #0c1f5c; }

//         .gs-tab-underline {
//           position: absolute;
//           bottom: -1px;
//           left: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #1e3a8a, #3b82f6);
//           border-radius: 99px;
//           pointer-events: none;
//           width: 0;
//         }

//         /* ── Content panel ── */
//         .gs-panel {
//           width: 100%;
//           max-width: 900px;
//           margin: 0 auto;
//           padding: 3rem 1.5rem 5rem;
//         }

//         .gs-content {
//           display: flex;
//           flex-direction: column;
//           gap: 1.4rem;
//         }

//         .gs-section-title {
         
//           font-size: clamp(1.7rem, 4vw, 2.8rem);
//           font-weight: 400;
      
//           letter-spacing: -0.015em;
//           line-height: 1.1;
//           padding-bottom: 0.65rem;
//           border-bottom: 1px solid #e8f0fe;
//           margin-bottom: 0.3rem;
//         }

//         .gs-body {
         
//           // font-size: clamp(1.2rem, 2.5vw, 1.15rem);
//           font-weight: 300;
        
//           // line-height: 1.9;
//           // letter-spacing: 0.01em;
//         }

//         .gs-link {
//           color: #2563eb;
//           text-decoration: none;
//           border-bottom: 1px solid #bfdbfe;
//           padding-bottom: 1px;
//           transition: color 0.2s, border-color 0.2s;
//           word-break: break-word;
//         }
//         .gs-link:hover { color: #1e40af; border-color: #1e40af; }

//         .gs-divider {
//           height: 1px;
//           background: linear-gradient(90deg, #dbeafe 0%, transparent 80%);
//           margin: 0.4rem 0;
//         }

//         /* ── Style Guide / Wardrobe Planner ── */
//         .gs-wardrobe-intro {
//           max-width: 620px;
//           margin: 0 auto 0.6rem;
//         }

//         .gs-events-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 1.25rem;
//           text-align: left;
//         }

//         .gs-event-card {
//           border: 1px solid #e8f0fe;
          
//           padding: 1.6rem 1.5rem;
//           display: flex;
//           flex-direction: column;
//           gap: 0.55rem;
//           background: rgba(255, 255, 255, 0.55);
//           transition: border-color 0.25s, transform 0.25s;
//         }
//         .gs-event-card:hover {
//           border-color: #bfdbfe;
//           transform: translateY(-2px);
//         }

//         .gs-event-header {
//           display: flex;
//           flex-direction: column;
//           gap: 0.3rem;
//           margin-bottom: 0.2rem;
//         }

//         .gs-event-date {
//           font-size: 0.72rem;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #60a5fa;
//         }

//         .gs-event-name {
//           font-size: clamp(1.3rem, 3vw, 1.7rem);
//           font-weight: 400;
//           letter-spacing: 0.02em;
//         }

//         .gs-swatches {
//           display: flex;
//           gap: 8px;
//           margin: 0.2rem 0 0.1rem;
//         }

//         .gs-swatch {
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           display: inline-block;
//           box-shadow: 0 0 0 1px rgba(0,0,0,0.06) inset;
//         }

//         .gs-dresscode {
//           font-size: 0.85rem;
//           letter-spacing: 0.03em;
//           text-transform: uppercase;
//           opacity: 0.75;
//         }
//         .gs-dresscode span {
//           font-weight: 500;
//           opacity: 1;
//         }

//         .gs-event-theme {
//           font-size: clamp(1rem, 2.4vw, 1.2rem);
//           font-weight: 500;
//           letter-spacing: 0.03em;
//         }

//         .gs-event-desc {
//           font-size: 0.95rem;
//           font-weight: 300;
//           line-height: 1.65;
//         }

//         @media (max-width: 640px) {
//           .gs-events-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* ── Footer ── */
//         .gs-footer {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           padding: 1rem 1.5rem 3rem;
//         }
//         .gs-footer-ornament {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           color: #bfdbfe;
//         }
//         .gs-footer-ornament-line { width: 32px; height: 1px; background: #dbeafe; }
//         .gs-footer-note {
         
//           font-size: 0.9rem;
//           color: #93c5fd;
//           font-style: italic;
//           letter-spacing: 0.05em;
//           text-align: center;
//         }

//         /* ── Responsive breakpoints ── */

//         /* 480px and below — very small phones */
//         @media (max-width: 480px) {
//           .gs-hero { padding: 3.5rem 1rem 3rem; }
//           .gs-blob-1 { width: 280px; height: 280px; top: -100px; right: -80px; }
//           .gs-blob-2 { width: 220px; height: 220px; bottom: -80px; left: -60px; }
//           .gs-tabs-outer { padding: 0 0.75rem; }
//           .gs-tab { padding: 0.75rem 0.9rem 0.95rem; gap: 4px; }
//           .gs-tab-num { display: none; } /* hide numbers on tiny screens */
//           .gs-panel { padding: 2rem 1rem 4rem; }
//           .gs-footer { padding: 0.75rem 1rem 2.5rem; }
//         }

//         /* 481–768px — large phones / small tablets */
//         @media (min-width: 481px) and (max-width: 768px) {
//           .gs-hero { padding: 4rem 1.25rem 3.5rem; }
//           .gs-tabs-outer { padding: 0 1rem; }
//           .gs-tab { padding: 0.85rem 1.1rem 1rem; }
//           .gs-panel { padding: 2.5rem 1.25rem 4.5rem; }
//         }

//         /* 769px+ — tablet and desktop: blobs can be full size */
//         @media (min-width: 769px) {
//           .gs-hero { padding: 5.5rem 2rem 4.5rem; }
//           .gs-tabs-outer { padding: 0 2rem; }
//           .gs-tab { padding: 0.95rem 1.6rem 1.15rem; }
//           .gs-panel { padding: 3.5rem 2rem 5rem; }
//         }

//         /* 1024px+ — large screens: constrain and center nicely */
//         @media (min-width: 1024px) {
//           .gs-hero { padding: 6rem 2rem 5rem; }
//         }
//       `}</style>

//       <div className="gs-page pt-[10vh] relative">
//         <div className="w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden">
//           <img
//             src={`/allPageImg/sky.png`}
//             alt="img"
//             className="w-full h-full object-cover object-center opacity-50"
//           />
//         </div>

//         <div className="gs-edge-top" />

//         {/* ── HERO ── */}
//         <header className="gs-hero">
//           <div className="gs-blob gs-blob-1" />
//           <div className="gs-blob gs-blob-2" />

//           <h1
//             ref={heroTitleRef}
//             className="gs-hero-title text-center COLOR_TEXT_RED Font_Q "
//           >
//             Guest <br className="md:hidden" /> Services
//           </h1>

//           <p ref={heroSubRef} className="gs-hero-sub COLOR_TEXT_RED Font_YV">
//             Everything arranged, so you can be fully present for every
//             celebration.
//           </p>
//         </header>

//         {/* ── TABS ── */}
//         <div className="gs-tabs-outer flex justify-center items-center">
//           <div className="gs-tabs-scroll">
//             <div ref={tabsBarRef} className="gs-tabs-bar" role="tablist">
//               {TABS.map((tab, i) => (
//                 <button
//                   key={tab.id}
//                   ref={(el) => (tabRefs.current[i] = el)}
//                   className={`gs-tab${active === i ? " is-active" : ""}`}
//                   role="tab"
//                   aria-selected={active === i}
//                   aria-controls={`panel-${tab.id}`}
//                   onClick={() => switchTab(i)}
//                 >
//                   <span className="gs-tab-num COLOR_TEXT_RED Font_YV">
//                     {tab.number}
//                   </span>
//                   <span className="gs-tab-label COLOR_TEXT_RED Font_YV">
//                     {tab.label}
//                   </span>
//                 </button>
//               ))}
//               <div ref={underlineRef} className="gs-tab-underline" />
//             </div>
//           </div>
//         </div>

//         {/* ── PANEL ── */}
//         <div
//           ref={contentPanelRef}
//           className="gs-panel text-center "
//           role="tabpanel"
//           id={`panel-${TABS[active].id}`}
//         >
//           {TABS[active].content}
//         </div>

//         {/* ── FOOTER ──
//         <div className="gs-footer">
//           <div className="gs-footer-ornament">
//             <div className="gs-footer-ornament-line" />
//             <span>✦</span>
//             <div className="gs-footer-ornament-line" />
//           </div>
//           <p className="gs-footer-note">More details will be shared closer to the date.</p>
//         </div> */}

//         {/* <div className="gs-edge-bottom" /> */}
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const EVENTS = [
  {
    id: "mehendi",
    day: "Saturday, November 14th",
    time: "12:00 PM",
    venue: "Main Pool & Orchards",
    name: "Mehendi",
    theme: "Golden Hour",
    dressCode: "Festive Fusion",
    description:
      "An afternoon of henna, music, and sun. Wear shades of orange and yellow in festive fusion: think embroidered co-ord sets, kurtas, and flowy silhouettes that move easily.",
    colors: ["#E08D3C", "#D9531E", "#E8C547", "#D8CBB0"],
    imgURL: `/imgs/MEHENDI.png`,
  },
  {
    id: "sangeet",
    day: "Saturday, November 14th",
    time: "7:30 PM",
    venue: "Secret Garden",
    name: "Sangeet",
    theme: "Jewels & Metallics",
    dressCode: "Cocktail Glamour",
    description:
      "The night turns up — dress in rich jewel tones or metallics with cocktail glamour in mind: sequins, shimmer, and statement pieces welcome. Comfortable enough to dance in is the only rule.",
    colors: ["#1F5C3E", "#6B3FA0", "#2A3F8F", "#A32357"],
    imgURL: `/imgs/SANGEET.png`,
  },
  {
    id: "nikkah",
    day: "Sunday, November 15th",
    time: "12:30 PM",
    venue: "Grand Canal",
    name: "Nikkah",
    theme: "Pastels in Bloom",
    dressCode: "South Asian Traditional",
    description:
      "A ceremony in soft color. Choose South Asian traditional wear in pastels: sarees, lehengas, salwar kameez, sherwanis, or kurta sets in beige, blush, sage, or powder blue.",
    colors: ["#C9A876", "#E8B4C8", "#B8C99A", "#A9C7E0"],
    imgURL: `/imgs/NIKKAH.png`,
  },
  {
    id: "reception",
    day: "Sunday, November 15th",
    time: "7:30 PM",
    venue: "The Courtyard",
    name: "Reception",
    theme: "Timeless Formal",
    dressCode: "Western Formal",
    description:
      "The final evening calls for floor length gowns for women, black tuxedos or suits for men. Kindly refrain from wearing red, as it is reserved for the bride.",
    colors: [],
    imgURL: `/imgs/RECEPTION.png`,
  },
];

const TABS = [
  {
    id: "transportation",
    label: "Transportation",
    number: "1",
    content: (
      <div className="gs-content">
        <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">
          Transportation
        </h2>
        <p className="gs-body COLOR_TEXT_RED Font_YV">
          Transfers will be arranged for all guests between the hotels and
          wedding events, including airport shuttles
        </p>
        <p className="gs-body COLOR_TEXT_RED Font_YV">
          The closest airport is Marrakech Menara Airport (RAK), approximately
          25 minutes from the hotel. Casablanca (CMN) is also a good option for
          those flying in from further afield — from there, a short domestic
          flight or a 2.5-hour drive will get you to Marrakech.
        </p>
        <div className="gs-body COLOR_TEXT_RED Font_YV">
          For any questions about transportation, please reach out to our
          planning team at{" "}
          <p href="mailto:" className="mt-5">
            wedding@laiqarabeel.com
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "style-guide",
    label: "Style Guide",
    number: "2",
    content: (
      <div className="gs-content">
        <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">Style Guide</h2>
        <p className="gs-body COLOR_TEXT_RED Font_YV gs-wardrobe-intro">
          To help with outfit planning, we&apos;ve put together this style guide
          for each celebration. Think of it as inspiration — we&apos;d love for
          you to add your own personal touch. We can&apos;t wait to celebrate
          with you!
        </p>

        <div className="gs-events-grid">
          {EVENTS.map((event) => (
            <div className="gs-event-card" key={event.id}>
              {event.imgURL && (
                <div className="gs-event-img-wrap flex justify-center items-center">
                  <img
                    src={event.imgURL}
                    alt={event.name}
                    className=" w-[80%] object-cover object-center"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="gs-event-header">
                <span className=" COLOR_TEXT_RED Font_YV">
                  {event.day} &middot; {event.time} &middot; {event.venue}
                </span>
                <h3 className="gs-event-name COLOR_TEXT_RED Font_Q">
                  {event.name}
                </h3>
              </div>

              {event.colors.length > 0 && (
                <div className="gs-swatches" aria-hidden="true">
                  {event.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="gs-swatch"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}

              <p className="  COLOR_TEXT_RED Font_YV font-light">
                Dress Code: <span>{event.dressCode}</span>
              </p>
              <p className="gs-event-name uppercase COLOR_TEXT_RED Font_Q mt-5">
                {event.theme}
              </p>
              <p className=" COLOR_TEXT_RED Font_YV font-light opacity-90">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <a href="/PDF/LRWG.pdf" target="blank">
          <div className=" px-5 py-2 bg-[#044BB2] hover:bg-[#07357a] sm:w-fit mt-2 mx-auto Font_YV flex justify-center items-center uppercase cursor-pointer text-white">
            View PDF
          </div>
        </a>
      </div>
    ),
  },
  {
    id: "hair-makeup",
    label: "Hair & Makeup",
    number: "3",
    content: (
      <div className="gs-content">
        <h2 className="gs-section-title COLOR_TEXT_RED Font_Q">
          Hair & Makeup
        </h2>
        <p className="gs-body COLOR_TEXT_RED Font_YV">
          A private salon offering hair and makeup services will be available on
          November 14th and 15th, located at The Oberoi Marrakech. Booking
          details will be shared closer to the date.
        </p>
      </div>
    ),
  },
];

export default function GuestServices() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroLineRef = useRef(null);
  const tabsBarRef = useRef(null);
  const contentPanelRef = useRef(null);
  const underlineRef = useRef(null);
  const tabRefs = useRef([]);

  const moveUnderline = (index, animate = true) => {
    const tabEl = tabRefs.current[index];
    if (!tabEl || !underlineRef.current) return;
    gsap.to(underlineRef.current, {
      x: tabEl.offsetLeft,
      width: tabEl.offsetWidth,
      duration: animate ? 0.45 : 0,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25, defaults: { ease: "power3.out" } });
    tl.fromTo(
      heroEyebrowRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.55 },
    )
      .fromTo(
        heroLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.0, ease: "power4.inOut" },
        "-=0.3",
      )
      .fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.5",
      )
      .fromTo(
        heroSubRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.5",
      )
      .fromTo(
        tabsBarRef.current.querySelectorAll(".gs-tab"),
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.48 },
        "-=0.35",
      )
      .fromTo(
        contentPanelRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.25",
      );

    setTimeout(() => moveUnderline(0, false), 60);
  }, []);

  // Re-position underline on window resize
  useEffect(() => {
    const handleResize = () => moveUnderline(active, false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  const switchTab = (i) => {
    if (i === active || animating) return;
    setAnimating(true);
    moveUnderline(i);
    gsap.to(contentPanelRef.current, {
      opacity: 0,
      y: 14,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActive(i);
        setAnimating(false);
        gsap.fromTo(
          contentPanelRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.42, ease: "power3.out" },
        );
      },
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

        

        /* ── Page shell ── */
        .gs-page {
          min-height: 100vh;
          // background: #ffffff;
          display: flex;
          flex-direction: column;
        }

        /* ── Top accent ── */
        .gs-edge-top {
          height: 2px;
        //   background: linear-gradient(90deg, transparent 0%, #1e3a8a 30%, #93c5fd 65%, transparent 100%);
          flex-shrink: 0;
        }
        .gs-edge-bottom {
          height: 2px;
        //   background: linear-gradient(90deg, transparent 0%, #93c5fd 30%, #1e3a8a 65%, transparent 100%);
          flex-shrink: 0;
          margin-top: auto;
        }

        /* ── Hero ── */
        .gs-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 5rem 1.5rem 4rem;
        }

        /* Ambient blobs — pointer-events off so they never block taps */
        .gs-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .gs-blob-1 {
          top: -200px; right: -140px;
          width: 480px; height: 480px;
        //   background: radial-gradient(circle, #eff6ff 0%, transparent 70%);
        }
        .gs-blob-2 {
          bottom: -130px; left: -90px;
          width: 380px; height: 380px;
        //   background: radial-gradient(circle, #dbeafe 0%, transparent 70%);
        }

        .gs-hero-eyebrow {
         
          font-size: clamp(0.6rem, 1.5vw, 0.7rem);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 1.4rem;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
          opacity: 0;
        }
        .gs-eyebrow-line {
          display: inline-block;
          width: 36px;
          height: 1px;
          background: #93c5fd;
          flex-shrink: 0;
        }

        .gs-hero-line {
          width: 56px;
          height: 1.5px;
          background: linear-gradient(90deg, #1e3a8a, #60a5fa);
          transform-origin: left;
          margin-bottom: 1.6rem;
          position: relative;
          z-index: 1;
        }

        .gs-hero-title {
         
          font-size: clamp(2.6rem, 8vw, 6rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.06;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
          opacity: 0;
        }


        .gs-hero-sub {
         
          // font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: #5b7ec9;
          // letter-spacing: 0.06em;
          position: relative;
          z-index: 1;
          opacity: 0;
          max-width: 480px;
          line-height: 1.7;
        }

        /* ── Tab bar ── */
        .gs-tabs-outer {
          width: 100%;
          max-width: 900px;
          margin: 2.5rem auto 0;
          padding: 0 1.5rem;
        }

        /* On small screens, allow horizontal scroll for tabs */
        .gs-tabs-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .gs-tabs-scroll::-webkit-scrollbar { display: none; }

        .gs-tabs-bar {
          position: relative;
          display: flex;
          align-items: flex-end;
          border-bottom: 1px solid #dbeafe;
          min-width: max-content; /* keep tabs in one line, scroll parent */
        }

        .gs-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.9rem 1.4rem 1.1rem;
          cursor: pointer;
          background: none;
          border: none;
          outline: none;
          opacity: 0;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        .gs-tab-num {
         
          font-size: clamp(1rem, 1rem, 1rem);
          letter-spacing: 0.1em;
          
          font-weight: 500;
          line-height: 1;
          margin-top: 2px;
          transition: color 0.3s;
        }
        .gs-tab.is-active .gs-tab-num {  }

        .gs-tab-label {
         
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          font-weight: 500;
          
          transition: color 0.3s;
          white-space: nowrap;
        }
        .gs-tab.is-active .gs-tab-label { color: #0c1f5c; }

        .gs-tab-underline {
          position: absolute;
          bottom: -1px;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          border-radius: 99px;
          pointer-events: none;
          width: 0;
        }

        /* ── Content panel ── */
        .gs-panel {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 1.5rem 5rem;
        }

        .gs-content {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .gs-section-title {
         
          font-size: clamp(1.7rem, 4vw, 2.8rem);
          font-weight: 400;
      
          letter-spacing: -0.015em;
          line-height: 1.1;
          padding-bottom: 0.65rem;
          border-bottom: 1px solid #e8f0fe;
          margin-bottom: 0.3rem;
        }

        .gs-body {
         
          // font-size: clamp(1.2rem, 2.5vw, 1.15rem);
          font-weight: 300;
        
          // line-height: 1.9;
          // letter-spacing: 0.01em;
        }

        .gs-link {
          color: #2563eb;
          text-decoration: none;
          border-bottom: 1px solid #bfdbfe;
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
          word-break: break-word;
        }
        .gs-link:hover { color: #1e40af; border-color: #1e40af; }

        .gs-divider {
          height: 1px;
          background: linear-gradient(90deg, #dbeafe 0%, transparent 80%);
          margin: 0.4rem 0;
        }

        /* ── Style Guide / Wardrobe Planner ── */
        .gs-wardrobe-intro {
          max-width: 620px;
          margin: 0 auto 0.6rem;
        }

        .gs-events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          text-align: left;
        }

        .gs-event-card {
          border: 1px solid #e8f0fe;
          
          padding: 1.6rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          background: rgba(255, 255, 255, 0.55);
          transition: border-color 0.25s, transform 0.25s;
        }
        .gs-event-card:hover {
          border-color: #bfdbfe;
          transform: translateY(-2px);
        }

        /* ── Event image ── */
        .gs-event-img-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          margin: -1.6rem -1.5rem 0.6rem;
          width: calc(100% + 3rem);
        }

        .gs-event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        .gs-event-card:hover .gs-event-img {
          transform: scale(1.04);
        }

        .gs-event-header {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 0.2rem;
        }

        .gs-event-date {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #60a5fa;
        }

        .gs-event-name {
          font-size: clamp(1.3rem, 3vw, 1.7rem);
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .gs-swatches {
          display: flex;
          gap: 8px;
          margin: 0.2rem 0 0.1rem;
        }

        .gs-swatch {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.06) inset;
        }

        .gs-dresscode {
          font-size: 0.85rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          opacity: 0.75;
        }
        .gs-dresscode span {
          font-weight: 500;
          opacity: 1;
        }

        .gs-event-theme {
          font-size: clamp(1rem, 2.4vw, 1.2rem);
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .gs-event-desc {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.65;
        }

        @media (max-width: 640px) {
          .gs-events-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Footer ── */
        .gs-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 1rem 1.5rem 3rem;
        }
        .gs-footer-ornament {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #bfdbfe;
        }
        .gs-footer-ornament-line { width: 32px; height: 1px; background: #dbeafe; }
        .gs-footer-note {
         
          font-size: 0.9rem;
          color: #93c5fd;
          font-style: italic;
          letter-spacing: 0.05em;
          text-align: center;
        }

        /* ── Responsive breakpoints ── */

        /* 480px and below — very small phones */
        @media (max-width: 480px) {
          .gs-hero { padding: 3.5rem 1rem 3rem; }
          .gs-blob-1 { width: 280px; height: 280px; top: -100px; right: -80px; }
          .gs-blob-2 { width: 220px; height: 220px; bottom: -80px; left: -60px; }
          .gs-tabs-outer { padding: 0 0.75rem; }
          .gs-tab { padding: 0.75rem 0.9rem 0.95rem; gap: 4px; }
          .gs-tab-num { display: none; } /* hide numbers on tiny screens */
          .gs-panel { padding: 2rem 1rem 4rem; }
          .gs-footer { padding: 0.75rem 1rem 2.5rem; }
        }

        /* 481–768px — large phones / small tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .gs-hero { padding: 4rem 1.25rem 3.5rem; }
          .gs-tabs-outer { padding: 0 1rem; }
          .gs-tab { padding: 0.85rem 1.1rem 1rem; }
          .gs-panel { padding: 2.5rem 1.25rem 4.5rem; }
        }

        /* 769px+ — tablet and desktop: blobs can be full size */
        @media (min-width: 769px) {
          .gs-hero { padding: 5.5rem 2rem 4.5rem; }
          .gs-tabs-outer { padding: 0 2rem; }
          .gs-tab { padding: 0.95rem 1.6rem 1.15rem; }
          .gs-panel { padding: 3.5rem 2rem 5rem; }
        }

        /* 1024px+ — large screens: constrain and center nicely */
        @media (min-width: 1024px) {
          .gs-hero { padding: 6rem 2rem 5rem; }
        }
      `}</style>

      <div className="gs-page pt-[10vh] relative">
        <div className="w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden">
          <img
            src={`/allPageImg/sky.png`}
            alt="img"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        <div className="gs-edge-top" />

        {/* ── HERO ── */}
        <header className="gs-hero">
          <div className="gs-blob gs-blob-1" />
          <div className="gs-blob gs-blob-2" />

          <h1
            ref={heroTitleRef}
            className="gs-hero-title text-center COLOR_TEXT_RED Font_Q "
          >
            Guest <br className="md:hidden" /> Services
          </h1>

          <p ref={heroSubRef} className="gs-hero-sub COLOR_TEXT_RED Font_YV">
            Everything arranged, so you can be fully present for every
            celebration.
          </p>
        </header>

        {/* ── TABS ── */}
        <div className="gs-tabs-outer flex justify-center items-center">
          <div className="gs-tabs-scroll">
            <div ref={tabsBarRef} className="gs-tabs-bar" role="tablist">
              {TABS.map((tab, i) => (
                <button
                  key={tab.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  className={`gs-tab${active === i ? " is-active" : ""}`}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => switchTab(i)}
                >
                  <span className="gs-tab-num COLOR_TEXT_RED Font_YV">
                    {tab.number}
                  </span>
                  <span className="gs-tab-label COLOR_TEXT_RED Font_YV">
                    {tab.label}
                  </span>
                </button>
              ))}
              <div ref={underlineRef} className="gs-tab-underline" />
            </div>
          </div>
        </div>

        {/* ── PANEL ── */}
        <div
          ref={contentPanelRef}
          className="gs-panel text-center "
          role="tabpanel"
          id={`panel-${TABS[active].id}`}
        >
          {TABS[active].content}
        </div>

        {/* ── FOOTER ──
        <div className="gs-footer">
          <div className="gs-footer-ornament">
            <div className="gs-footer-ornament-line" />
            <span>✦</span>
            <div className="gs-footer-ornament-line" />
          </div>
          <p className="gs-footer-note">More details will be shared closer to the date.</p>
        </div> */}

        {/* <div className="gs-edge-bottom" /> */}
      </div>
    </>
  );
}
