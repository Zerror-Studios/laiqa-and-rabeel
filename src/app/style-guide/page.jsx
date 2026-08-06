"use client";

import { useEffect, useRef } from "react";
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

export default function StyleGuide() {
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const contentPanelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25, defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      heroSubRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(
      contentPanelRef.current,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.25"
    );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

        /* ── Page shell ── */
        .gs-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .gs-edge-top {
          height: 2px;
          flex-shrink: 0;
        }

        /* ── Hero ── */
        .gs-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 5rem 1.5rem 2rem;
        }

        .gs-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .gs-blob-1 {
          top: -200px; right: -140px;
          width: 480px; height: 480px;
        }
        .gs-blob-2 {
          bottom: -130px; left: -90px;
          width: 380px; height: 380px;
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
          color: #5b7ec9;
          position: relative;
          z-index: 1;
          opacity: 0;
          max-width: 620px;
          line-height: 1.7;
          margin: 0 auto;
        }

        /* ── Content panel ── */
        .gs-panel {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem 1.5rem 5rem;
        }

        .gs-content {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        /* ── Style Guide / Wardrobe Planner ── */
        .gs-events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          text-align: left;
          margin-top: 1.5rem;
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

        @media (max-width: 640px) {
          .gs-events-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 480px) {
          .gs-hero { padding: 3.5rem 1rem 2rem; }
          .gs-blob-1 { width: 280px; height: 280px; top: -100px; right: -80px; }
          .gs-blob-2 { width: 220px; height: 220px; bottom: -80px; left: -60px; }
          .gs-panel { padding: 1rem 1rem 4rem; }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .gs-hero { padding: 4rem 1.25rem 2rem; }
          .gs-panel { padding: 1.5rem 1.25rem 4.5rem; }
        }

        @media (min-width: 769px) {
          .gs-hero { padding: 5.5rem 2rem 3rem; }
          .gs-panel { padding: 2.5rem 2rem 5rem; }
        }

        @media (min-width: 1024px) {
          .gs-hero { padding: 6rem 2rem 4rem; }
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

        <header className="gs-hero">
          <div className="gs-blob gs-blob-1" />
          <div className="gs-blob gs-blob-2" />

          <h1
            ref={heroTitleRef}
            className="gs-hero-title text-center COLOR_TEXT_RED Font_Q "
          >
            Style Guide
          </h1>

          <p ref={heroSubRef} className="gs-hero-sub COLOR_TEXT_RED Font_YV">
            To help with outfit planning, we&apos;ve put together this style guide
            for each celebration. Think of it as inspiration — we&apos;d love for
            you to add your own personal touch. We can&apos;t wait to celebrate
            with you!
          </p>
        </header>

        <div ref={contentPanelRef} className="gs-panel text-center">
          <div className="gs-content">
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
        </div>
      </div>
    </>
  );
}