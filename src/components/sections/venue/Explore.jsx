// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import RSVP from "@/components/common/RSVP";
// import Shop from "@/components/common/Shop";
// gsap.registerPlugin(ScrollTrigger);

// const Explore = () => {
//   const mainContainer = useRef();
//   const scrollContainer = useRef();

//   useGSAP(() => {
//     if (!mainContainer.current || !scrollContainer.current) return;
//     const totalScrollWidth =
//       scrollContainer.current.scrollWidth - window.innerWidth;

//     var sliderTween = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainContainer.current,
//         start: "top top",
//         end: () => `+=${totalScrollWidth}`,
//         pin: true,
//         scrub: true,
//         // markers: true,
//       },
//     });

//     sliderTween.to(scrollContainer.current, {
//       x: -totalScrollWidth,
//       ease: "none",
//     });

//     const animate_child = document.querySelectorAll(".animate_child");

//     animate_child.forEach((child) => {
//       gsap.fromTo(
//         child,
//         { xPercent: 20 },
//         {
//           xPercent: 0,
//           ease: "power2.out",
//           duration: 1,
//           scrollTrigger: {
//             trigger: child,
//             containerAnimation: sliderTween,
//             start: "left right",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );
//     });
//   });

//   return (
//     <>
//       <div
//         ref={mainContainer}
//         className="w-full h-screen overflow-x-hidden flex relative COLOR_BG_CREAM"
//       >
//         <div className="w-2/10  h-fit fixed top-[-5%] left-[-5%] scale-x-[-1] z-100 ">
//           <img
//             src={`/assets/s01.png`}
//             alt="IMG"
//             className="w-full  object-center object-cover "
//           />
//         </div>

//         {/* <div className="w-2/10  h-fit fixed top-[80%] left-[75%] scale-x-[-1]  ">
//           <img
//             src={`/assets/s23.png`}
//             alt="IMG"
//             className="w-full  object-center object-cover "
//           />
//         </div> */}

//         <div
//           ref={scrollContainer}
//           className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
//         >
//           <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/newExplorMarK/11T.jpg`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={1000}
//                   height={1000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6"></p>
//               <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED text-center uppercase ">
//                 Marrakech
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   Marrakech is one of the most vibrant and culturally rich
//                   cities in Morocco. Known as the “Red City” because of its
//                   rose-colored buildings, it blends history, culture.
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
//               <Image
//                 src={`/imgs/newExplorMarK/AA2.jpg`}
//                 className="w-full h-full object-cover  object-center"
//                 width={1000}
//                 height={1000}
//                 alt="Img"
//               />
//             </div>
//           </div>

//           <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw] h-screen  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/newExplorMarK/BB1.webp`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6"></p>
//               <h4 className=" text-[80px]  leading-[80px] Font_Q text-center contA6 COLOR_TEXT_RED uppercase ">
//                 Jardin Majorelle
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   Originally designed by French painter Jacques Majorelle in the
//                   1920s and later rescued and restored by fashion icon Yves
//                   Saint Laurent, this botanical garden is one of Africa's most
//                   visited attractions.{" "}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
//               <Image
//                 src={`/imgs/newExplorMarK/BB2.jpg`}
//                 className="w-full h-full object-cover  object-center"
//                 width={1000}
//                 height={1000}
//                 alt="Img"
//               />
//             </div>
//           </div>

//           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw] h-fit  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/newExplorMarK/EE1.jpg`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6"></p>
//               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 text-center COLOR_TEXT_RED uppercase ">
//                 Bahia Palace
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   Built in the late 19th century, the Bahia Palace ("Palace of
//                   the Beautiful") was intended to be the grandest palace of its
//                   time.
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[70vw] h-screen flex overflow-hidden ">
//               <img
//                 src={`/imgs/newExplorMarK/CC2.jpg`}
//                 className="w-full h-full object-cover  object-center"
//                 alt="Img"
//               />
//             </div>
//           </div>

//           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/newExplorMarK/DD1.jpg`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6"></p>
//               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center  ">
//                 Koutoubia Mosque
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   The Koutoubia Mosque is Marrakech's most iconic landmark and
//                   the largest mosque in the city. Its soaring 70-metre minaret
//                   has dominated the skyline since the 12th century and served as
//                   the architectural inspiration
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
//               <Image
//                 src={`/imgs/newExplorMarK/DD2.jpg`}
//                 className="w-full h-full object-cover  object-center"
//                 width={1000}
//                 height={1000}
//                 alt="Img"
//               />
//               {/* </div> */}
//             </div>
//           </div>

//           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw] h-fit  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/newExplorMarK/EE1.jpg`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6"></p>
//               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
//                 The Souks of the Medina
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   Marrakech's old Medina is a living, breathing marketplace
//                   dating back centuries. The souks are organized loosely by
//                   trade — the dyers' souk (Souk Semmarine), the leather souk,
//                   the spice market,
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[70vw] h-screen flex overflow-hidden ">
//               <img
//                 src={`/imgs/newExplorMarK/EE2.jpg`}
//                 className="w-full h-full object-cover  object-center"
//                 alt="Img"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Explore;
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
        link: `https://www.instagram.com/`,
        desc: `Yves Saint Laurent's former garden, now one of the most visited spots in Morocco. Cobalt blue walls, towering cacti, and a quiet that feels worlds away from the medina just outside.`,
      },
      {
        title: "Yves Saint Laurent Museum",
        img: "/imgs/newExplorMarK/YSL.webp",
        link: `https://www.instagram.com/`,
        desc: `Next door to Jardin Majorelle, opened in 2017. A permanent collection from the designer's forty-year career, housed in a terracotta building by Studio KO.`,
      },
      {
        title: "Bahia Palace",
        img: "/imgs/newExplorMarK/BP.webp",
        link: `https://www.instagram.com/`,
        desc: `A 19th-century palace built to be paradise. Intricate tilework, painted cedar ceilings, and courtyard after courtyard — it's easy to lose track of time here.`,
      },
      {
        title: "El Badi Palace",
        img: "/imgs/newExplorMarK/EB.webp",
        link: `https://www.instagram.com/`,
        desc: `The ruins of a 16th-century sultan's palace. Sunken gardens, weathered walls, and storks nesting in the parapets.`,
      },
      {
        title: "Ben Youssef Madrasa",
        img: "/imgs/newExplorMarK/BY.webp",
        link: `https://www.instagram.com/`,
        desc: `A 14th-century Quranic school, recently restored. Carved cedar, marble, and zellige across every surface — one of the most beautiful interiors in the city.`,
      },
      {
        title: "Koutoubia Mosque",
        img: "/imgs/newExplorMarK/EE1.jpg",
        link: `https://www.instagram.com/`,
        desc: `Marrakech's most iconic silhouette and the tallest landmark in the city. The surrounding gardens are worth a visit — particularly at dusk when the call to prayer fills the air.`,
      },
      {
        title: "Place Jemaa el-Fna",
        img: "/imgs/newExplorMarK/JF.webp",
        link: `https://www.instagram.com/`,
        desc: `The beating heart of the medina. Calm by day, electric by night — snake charmers, storytellers, food stalls, and a crowd that doesn't quit until well past midnight.`,
      },
      {
        title: "The Souks of the Medina",
        img: "/imgs/newExplorMarK/DD1.jpg",
        link: `https://www.instagram.com/`,
        desc: `Leather, lanterns, spices, silk. Best navigated without a plan — wander, get lost, and take your time.`,
      },
      {
        title: "Le Jardin Secret",
        img: "/imgs/newExplorMarK/LJS.webp",
        link: `https://www.instagram.com/`,
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
        link: `https://www.instagram.com/`,
        desc: `A medina institution for rugs, lanterns, and interiors. Vanessa Branson of El Fenn shops here.`,
      },
      {
        title: "33 Rue Majorelle",
        img: "/imgs/newExplorMarK/33RM.webp",
        link: `https://www.instagram.com/`,
        desc: `A concept store on Rue Yves Saint Laurent stocking contemporary Moroccan designers — clothing, accessories, ceramics, and books.`,
      },
      {
        title: "Sidi Ghanem",
        img: "/imgs/newExplorMarK/SG.webp",
        link: `https://www.instagram.com/`,
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
        link: `https://www.instagram.com/`,
        desc: `A boutique riad-hotel in the medina owned by Vanessa Branson. Rooftop bar, art-filled corridors, and one of the loveliest places in the city for a drink.`,
      },
      {
        title: "La Mamounia",
        img: "/imgs/newExplorMarK/LM.webp",
        link: `https://www.instagram.com/`,
        desc: `The legendary 1923 hotel. Stop in for afternoon tea, a drink at the bar, or a walk through the olive and citrus gardens.`,
      },
      {
        title: "La Famille",
        img: "/imgs/newExplorMarK/LF.webp",
        link: `https://www.instagram.com/`,
        desc: `A garden restaurant in the heart of the medina serving Mediterranean-meets-Moroccan vegetarian dishes. The menu changes daily.`,
      },
      {
        title: "Café Le Studio",
        img: "/imgs/newExplorMarK/CLS.webp",
        link: `https://www.instagram.com/`,
        desc: `Tucked inside the Yves Saint Laurent Museum, the perfect coffee break between sights.`,
      },
    ],
  },
  {
    label: "Beyond the City",
    items: [
      {
        title: "The Agafay Desert",
        img: "/imgs/newExplorMarK/AD.webp",
        link: `https://www.instagram.com/`,
        desc: `A rocky desert just outside the city, with the Atlas Mountains in the distance. Half a day is enough.`,
      },
      {
        title: "The Atlas Mountains / Ourika Valley",
        img: "/imgs/newExplorMarK/AM.webp",
        link: `https://www.instagram.com/`,
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

    const categoryHeadings = sectionRef.current.querySelectorAll(".category-heading");
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
    <div ref={sectionRef}>
      <div className="w-full h-fit flex flex-col justify-center items-center py-[20vh] max-md:pb-[10vh]">
        <p className="uppercase Font_YV COLOR_TEXT_RED contA6"></p>
        <h4 className="text-[8vw] leading-[8vw] max-md:text-[12vw] max-md:leading-[12vw] Font_Q contA6 COLOR_TEXT_RED text-center uppercase">
          Marrakech
        </h4>
        <div className="w-[90%] max-w-[740px] flex flex-col contA6 justify-center items-center gap-6">
          <div className="text-[#395238] text-[1.1vw] leading-[1.1vw] max-md:text-[18px] max-md:leading-[18px] contA6 COLOR_TEXT_RED text-center Font_YV gap-2">
            The Red City. Rose-coloured walls, ancient souks, and a city where
            Berber, Arab, and French influences meet in a way that feels
            entirely its own.
            <p>
              <br />
              To help you make the most of your time here, we've put together a
              list of our favourite places to explore. For bookings, please reach
              out to our experiences partner:
            </p>
            <br />
            Marrakech Travel Experts — Driss Zidani Alaoui{" "}
            <p>
              <a href="">driss@marrakeshtravelexperts.com</a> |{" "}
              <a href=""> +212 661 222 557</a>
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
      <span className="text-[14px] text-justify tracking-tight Font_YV uppercase text-[#1727b9]/70 font-medium">
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