"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    label: "Gardens, Palaces & Medina",
    items: [
      {
        title: "Jardin Majorelle",
        img: "/imgs/newExplorMarK/JM.webp",
        link: `https://www.jardinmajorelle.com/en/`,
        desc: `Yves Saint Laurent's former garden, now one of the most visited spots in Morocco. Cobalt blue walls, towering cacti, and a quiet that feels worlds away from the medina just outside.`,
      },
      {
        title: "Yves Saint Laurent Museum",
        img: "/imgs/newExplorMarK/YSL.webp",
        link: `https://www.museeyslmarrakech.com/en/`,
        desc: `Next door to Jardin Majorelle, opened in 2017. A permanent collection from the designer's forty-year career, housed in a terracotta building by Studio KO.`,
      },
      {
        title: "Bahia Palace",
        img: "/imgs/newExplorMarK/BP.webp",
        link: `https://bahiapalace.com/`,
        desc: `A 19th-century palace built to be paradise. Intricate tilework, painted cedar ceilings, and courtyard after courtyard — it's easy to lose track of time here.`,
      },
      {
        title: "El Badi Palace Jemma el Fna ",
        img: "/imgs/newExplorMarK/EB.webp",
        link: `https://badipalace.com/`,
        desc: `The ruins of a 16th-century sultan's palace. Sunken gardens, weathered walls, and storks nesting in the parapets.`,
      },
      {
        title: "Ben Youssef Madrasa",
        img: "/imgs/newExplorMarK/BY.webp",
        link: `https://www.medersabenyoussef.ma/en/`,
        desc: `A 14th-century Quranic school, recently restored. Carved cedar, marble, and zellige across every surface — one of the most beautiful interiors in the city.`,
      },
      {
        title: "Koutoubia Mosque",
        img: "/imgs/newExplorMarK/EE1.jpg",
        link: `https://www.feelmorocco.travel/destinations/marrakech/koutoubia-mosque/`,
        desc: `Marrakech's most iconic silhouette and the tallest landmark in the city. The surrounding gardens are worth a visit — particularly at dusk when the call to prayer fills the air.`,
      },
      {
        title: "Place Jemaa el-Fna",
        img: "/imgs/newExplorMarK/JF.webp",
        link: `https://ich.unesco.org/en/RL/cultural-space-of-jemaa-el-fna-square-00014`,
        desc: `The beating heart of the medina. Calm by day, electric by night — snake charmers, storytellers, food stalls, and a crowd that doesn't quit until well past midnight.`,
      },
      {
        title: "The Souks of the Medina",
        img: "/imgs/newExplorMarK/SOM.webp",
        link: `https://moroccanjourneys.com/the-souks-of-marrakech/`,
        desc: `Leather, lanterns, spices, silk. Best navigated without a plan — wander, get lost, and take your time.`,
      },
      {
        title: "Le Jardin Secret",
        img: "/imgs/newExplorMarK/LJS.webp",
        link: `https://www.lejardinsecretmarrakech.com/en/`,
        desc: `A restored riad garden tucked deep in the medina. Two gardens side by side, one Islamic, one exotic. A quiet pause from the souks just steps away.`,
      },
    ],
  },
  {
    label: "Souks & Shops",
    items: [
      {
        title: "Mustapha Blaoui",
        img: "/imgs/newExplorMarK/MB.webp",
        link: `https://www.maisonblaoui.ma/welcome`,
        desc: `A timeless Moroccan design house known for handcrafted rugs, lanterns, ceramics, and rich medina-inspired interiors.`,
      },
      {
        title: "33 Rue Majorelle",
        img: "/imgs/newExplorMarK/33RM.webp",
        link: `https://33ruemajorelle.com/`,
        desc: `A concept store on Rue Yves Saint Laurent stocking contemporary Moroccan designers — clothing, accessories, ceramics, and books.`,
      },
      {
        title: "Sidi Ghanem",
        img: "/imgs/newExplorMarK/SG.webp",
        link: `https://el-fenn.com/sidi-ghanem-the-design-district-of-marrakech/`,
        desc: `The city's design district, just outside the medina. Workshops and showrooms for ceramics, textiles, and furniture.`,
      },
    ],
  },
  {
    label: "Eat, Drink & Linger",
    items: [
      {
        title: "El Fenn",
        img: "/imgs/newExplorMarK/EF.webp",
        link: `https://el-fenn.com/`,
        desc: `A boutique riad-hotel in the medina owned by Vanessa Branson. Rooftop bar, art-filled corridors, and one of the loveliest places in the city for a drink.`,
      },
      {
        title: "La Mamounia",
        img: "/imgs/newExplorMarK/LM.webp",
        link: `https://mamounia.com/en/`,
        desc: `The legendary 1923 hotel. Stop in for afternoon tea, a drink at the bar, or a walk through the olive and citrus gardens.`,
      },
      {
        title: "La Famille",
        img: "/imgs/newExplorMarK/LF.webp",
        link: `https://www.lafamillemarrakech.com/`,
        desc: `A garden restaurant in the heart of the medina serving Mediterranean-meets-Moroccan vegetarian dishes. The menu changes daily.`,
      },
      {
        title: "Café Le Studio",
        img: "/imgs/newExplorMarK/CLS.webp",
        link: `https://www.museeyslmarrakech.com/en/votre-visite/cafe-le-studio/`,
        desc: `Tucked inside the Yves Saint Laurent Museum, the perfect coffee break between sights.`,
      },
      {
        title: "Bacha Coffee",
        img: "/imgs/newExplorMarK/BACF.webp",
        link: `https://www.instagram.com/reel/DAnht-byYze/?hl=en`,
        desc: `The original, founded in 1910 inside Dar El Bacha palace, where it once served Churchill, Roosevelt, and Josephine Baker. Over 200 single-origin coffees, served in the original Art Deco coffee room. `,
      },
      {
        title: "Riad Yima",
        img: "/imgs/newExplorMarK/RYI.webp",
        link: `https://www.instagram.com/`,
        desc: `Photographer Hassan Hajjaj's tucked-away medina café, gallery, and boutique. Sun-drenched courtyard, his work on the walls, and house tea blends to take home.
 `,
      },
    ],
  },
  {
    label: "Beyond the City",
    items: [
      {
        title: "The Agafay Desert",
        img: "/imgs/newExplorMarK/AD.webp",
        link: `https://www.theadventuremanual.com/best-agafay-desert-tours-morocco`,
        desc: `A rocky desert just outside the city, with the Atlas Mountains stretching across the horizon. Half a day is enough to explore its beauty.`,
      },
      {
        title: "The Atlas Mountains / Ourika Valley",
        img: "/imgs/newExplorMarK/AM.webp",
        link: `https://moroccanzest.com/ourika-valley-the-complete-travel-guide/`,
        desc: `An hour from Marrakech. Berber villages, river waterfalls, and a complete change of scenery.`,
      },
    ],
  },
];

// ─── ACTIVITIES GRID SECTION ──────────────────────────────────────────────────

const ActivitiesGrid = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".activity-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.8,
          delay: (i % 3) * 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    const heading = sectionRef.current.querySelector(".activities-heading");
    if (heading) {
      gsap.fromTo(
        heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
        },
      );
    }

    const categoryHeadings =
      sectionRef.current.querySelectorAll(".category-heading");
    categoryHeadings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.9,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
        },
      );
    });
  });


  return (
    <div
      ref={sectionRef}
      className="relative py-[20vh] max-md:pb-[10vh] max-2xl:px-5"
    >
      <div className="w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden">
        <img
          src={`/allPageImg/sky.png`}
          alt="img"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center pb-[10vh] ">
        <p className="uppercase Font_YV COLOR_TEXT_RED contA6"></p>
        {/* <h4 className="text-[8vw] leading-[8vw] max-md:text-[12vw] max-md:leading-[12vw] Font_Q contA6 COLOR_TEXT_RED text-center uppercase">
          Marrakech
        </h4> */}
        <div className="w-[90%] max-w-[740px] flex flex-col contA6 justify-center items-center gap-6">
          <div className="text-[#395238] text-[1.1vw] leading-[1.1vw] max-md:text-[18px] max-md:leading-[18px] contA6 COLOR_TEXT_RED text-center Font_YV gap-2">
            <h3 className="Font_Q max-sm:flex max-sm:flex-col">
              A visit to Marrakech was a great shock to me. This city taught me
              color.{" "}
              <p className="COLOR_TEXT_RED text-center text-[1.1vw] leading-[1.1vw] max-sm:mt-2 max-md:text-[18px] max-md:leading-[18px] Font_YV">
                {" "}
                — Yves Saint Laurent
              </p>{" "}
            </h3>
            <p className="mt-4">
              "Marrakech is a living mood board — pink walls under endless blue
              skies, lush green palm trees, and the rich hues of spices and
              textiles. A city where creativity, culture, and heritage flow
              seamlessly.To help you make the most of your time here, we've put
              together a list of our favourite places to explore. For bookings,
              please reach out to our experiences partner:
            </p>
            <p className="mt-4">
              Marrakech Travel Experts — Driss Zidani Alaoui{" "}
            </p>
            {/* <br /> */}
            <p className="mt-1">
              <a href="mailto:driss@marrakeshtravelexperts.com" className="">
                driss@marrakeshtravelexperts.com
              </a>{" "}
              |{" "}
              <a href="tel:+212661222557" className="">
                {" "}
                +212 661 222 557
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-[10vh] max-md:p-5">
        {CATEGORIES.map((category, catIdx) => (
          <div key={catIdx} className="mb-[10vh]">
            {/* Category heading */}
            <div className="category-heading flex items-center gap-6 mb-10">
              <div className="h-px bg-[#1727b9] flex-1" />
              <h5 className="text-[1vw] max-md:text-[14px] Font_YV uppercase tracking-widest text-[#1727b9] font-semibold whitespace-nowrap">
                {category.label}
              </h5>
              <div className="h-px bg-[#1727b9] flex-1" />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {category.items.map((act, id) => (
                <ActivityCard key={id} act={act} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActivityCard = ({ act }) => (
  <a rel="stylesheet" href={act.link} target="_blank">
    <div className="activity-card group flex flex-col gap-4 cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden aspect-[3/2.4] w-full relative">
        <Image
          src={act.img}
          alt={act.title}
          width={800}
          height={640}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#1727b9] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      </div>

      {/* Label */}
      <div className="flex items-center gap-4">
        <div className="w-6 h-px bg-[#1727b9] flex-shrink-0 group-hover:w-10 transition-all duration-300" />
        <span className="text-[16px] font-semibold tracking-tight Font_YV uppercase text-[#1727b9] font-medium">
          {act.title}
        </span>
      </div>
      <span className="text-[14px] leading-[18px] text-justify tracking-tight Font_YV uppercase text-[#1727b9]/70 font-medium">
        {act.desc}
      </span>
    </div>
  </a>
);

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

const Explore = () => {
  return (
    <>
      <ActivitiesGrid />
    </>
  );
};

export default Explore;
