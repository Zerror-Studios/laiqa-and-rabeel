"use client";
import Countdown from "@/components/sections/home/Countdown";
import Lamp from "@/components/sections/newhome/Lamp";
import LoveStory from "@/components/sections/newhome/LoveStory";
import TextAnimation from "@/components/sections/newhome/TextAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  useEffect(() => {
    const A = gsap.timeline({
      scrollTrigger: {
        trigger: ".relMain",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
    A.fromTo(
      ".LTM",
      {
        xPercent: 0,
        filter: "blur(0px)",
        scale: 1,
      },
      {
        xPercent: -280,
        filter: "blur(10px)",
        scale: 2,
        ease: "none",
      },
      "a1",
    );

    A.fromTo(
      ".RTM",
      {
        xPercent: 0,
        filter: "blur(0px)",
        scale: 1,
      },
      {
        xPercent: 280,
        filter: "blur(10px)",
        scale: 2,
        ease: "none",
      },
      "a1",
    );

    if(window.innerWidth > 800){
      A.fromTo(
        ".GatImg",
        {
          scale: 1,
        },
        {
          scale: 2,
          ease: "none",
        },
        "a1",
      );
    }

   
    A.fromTo(
      ".NAMEWED",
      {
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        ease: "none",
      },
      "a1",
    );

    A.to(
      ".BGBLD",
      {
        scale: 1,
        ease: "none",
      },
      "a1",
    );
    
    A.to('.NavMenuCont',{
      opacity: 1
    },"<0.2")
   
  
    
   

    // ================================================
    const Pre = gsap.timeline();
    Pre.to(".relMain", {
      opacity: 1,
      duration: 1,
      ease: "none",
    });

    const lamps = gsap.utils.toArray(".DemoAllItem");

    lamps.forEach((lamp, i) => {
      const tl = gsap.timeline({
        repeat: -1,
      });
      tl.fromTo(
        lamp,
        { x: "-100vw", rotationY: 0 },
        {
          x: "100vw",
          duration: 10,
          ease: "none",
        },
      )
        .to(
          lamp,
          {
            rotationY: 180,

            ease: "power2.inOut",
          },
          "aa1",
        )
        .to(
          lamp,
          {
            x: "-100vw",
            y: "+=30vh",
            duration: 10,
            ease: "none",
          },
          "aa1",
        )
        .to(lamp, {
          rotationY: 360,
          duration: 0.6,
          ease: "power2.inOut",
        });
    });

    // =============================== ENVIROMENT MOVE ANIMATION
    // const handleMouseMove = (e) => {
    //   const { innerWidth, innerHeight } = window;

    //   const centerX = innerWidth / 2;
    //   const centerY = innerHeight / 2;

    //   const mouseX = e.clientX;
    //   const mouseY = e.clientY;

    //   // Normalize (-1 to 1)
    //   const x = (mouseX - centerX) / centerX;
    //   const y = (mouseY - centerY) / centerY;

    //   // Move opposite direction (invert)
    //   const moveX = -x * 5;
    //   const moveY = -y * 5;

    //   gsap.to(".stickyAnimation", {
    //     x: moveX,
    //     y: moveY,
    //     duration: 0.5,
    //     ease: "power2.out",
    //   });
    // };

    // window.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  });



  return (
    <>
      <div  className="w-full h-[200vh]  relative relMain opacity-0 ">
        <div className="w-full h-screen sticky flex top-0 left-0 overflow-hidden z-20   ">
          {/* back Building */}
          <div className=" absolute top-0 left-0 w-full h-screen z-10 stickyAnimation overflow-hidden">
            <img
              src={`/allPageImg/home/home.webp`}
              alt="BGIMG"
              className="w-full h-full  BGBLD   object-center object-cover"
            />

            <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#ffffff]/65 to-[#ffffff] z-40" />
           

            <Lamp
              top="10%"
              left="50%"
              translateX="-50%"
              translateY="-50%"
              rotation="20deg"
              URL={`/gif/bird.gif`}
              name={"DemoAllItem scale-[0.8]  z-10 opacity-80 "}
            />
          </div>

          <div className="w-1/2 h-screen   left flex justify-end items-center LTM relative z-50  overflow-x-visible max-md:overflow-hidden">

            <div className=" w-1/4 max-md:w-full h-[70vh]  absolute right-0 bottom-0 ">
              <img
                src={`/allPageImg/home/GL.png`}
                alt="left"
                className=" w-full sm:h-full object-cover object-top    flex max-md:object-left z-10 GatImg  "
              />
            </div>

            <img
              src={`/allPageImg/home/L.png`}
              alt="left"
              className="h-full w-screen object-cover scale-[1.03] max-sm:scale-[1.06] object-center max-md:object-right flex absolute top-0 left-0 z-[-1]  "
            />
          </div>
          <div className="w-1/2  h-screen left relative flex justify-start items-center RTM z-50 overflow-x-visible">
            <div className=" w-1/4 max-md:w-full h-[70vh]  absolute left-0 bottom-0 ">
              <img
                src={`/allPageImg/home/RL.png `}
                alt="Right"
                className=" w-full sm:h-full object-cover object-top    flex max-md:object-left z-10 GatImg"
              />
            </div>
            <img
              src={`/allPageImg/home/R.png`}
              alt="left"
              className="w-full h-full object-cover scale-[1.02] max-sm:scale-[1.06]  object-center max-md:object-left flex absolute top-0  right-0 z-[-1]  "
            />
          </div>
        </div>
      </div>

      <TextAnimation />
      <Countdown />

      <div className="w-full h-screen overflow-hidden  mx-auto">
        <img
          src={`/lastP.png`}
          className="w-full h-full max-md:object-[33%_0%] object-cover"
          alt="IMG"
        />
      </div>
    </>
  );
}
