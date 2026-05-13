
 "use client";
import Countdown from "@/components/sections/home/Countdown";
import Lamp from "@/components/sections/newhome/Lamp";
import LoveStory from "@/components/sections/newhome/LoveStory";
import TextAnimation from "@/components/sections/newhome/TextAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function home2() {

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
        xPercent: -250,
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
        xPercent: 250,
        filter: "blur(10px)",
        scale: 2,
        ease: "none",
      },
      "a1",
    );

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




    // ==========================================
    

      // =========================================
       const Pre = gsap.timeline();
    Pre.to(".relMain", {
      opacity: 1,
      duration: 1,
      ease: "none",
    });

    // ==============================================
      const lamps = gsap.utils.toArray(".DemoAllItem");
    const floatAnims = [];
    lamps.forEach((lamp, i) => {
      gsap.fromTo(
        lamp,
        { x: "-100vw" }, // start from left
        {
          x: "100vw", // move to right
          duration: 10, // ✅ fixed 10 seconds
          ease: "none",
          repeat: -1,
        },
      );
    });

    lamps.forEach((lamp, i) => {
      const anim = gsap.to(lamp, {
        y: "+=40",
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });

      floatAnims.push(anim);
    });

    // ===============================
      const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Normalize (-1 to 1)
      const x = (mouseX - centerX) / centerX;
      const y = (mouseY - centerY) / centerY;

      // Move opposite direction (invert)
      const moveX = -x * 5;
      const moveY = -y * 5;

      gsap.to(".stickyAnimation", {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(".LTM, .RTM, .GatImg, .DemoAllItem, .NAMEWED", {
        // x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      <div className="w-full h-[200vh] relative relMain opacity-0">
        <div className="w-full h-screen sticky flex top-0 left-0 overflow-hidden z-20 stickyAnimation scale-[1.1]">
          {/* back Building */}
          <div className=" absolute top-0 left-0 w-full h-screen z-10 overflow-hidden">
            <img
              src={`/home/SandBG.jpg`}
              alt="BGIMG"
              className="w-full h-full BGBLD  scale-[1.2] object-top object-center"
            />

            <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#ffffff]/60 to-[#ffffff] z-40" />
            <div className=" absolute bottom-2 left-0 w-full h-fit flex justify-center items-center Font_Q COLOR_TEXT_RED text-[8vw] z-50 NAMEWED tracking-tighter">
              LAIQA & RABEEL
            </div>

            <Lamp
              top="10%"
              left="50%"
              translateX="-50%"
              translateY="-50%"
              rotation="20deg"
              URL={`/gif/bird.gif`}
              name={"DemoAllItem scale-[0.8]  z-10 opacity-80 "}
            />
            <Lamp
              top="14%"
              left="50%"
              translateX="-50%"
              translateY="-50%"
              rotation="20deg"
              URL={`/gif/bird.gif`}
              name={"DemoAllItem scale-[0.4]  z-10 opacity-80 "}
            />
          </div>

          <div className="w-1/2 h-screen left flex justify-end items-center LTM relative z-20  overflow-x-visible">
            <img
              src={`/home/Left.png`}
              alt="left"
              className="h-full object-cover object-center z-10 GatImg  "
            />

            <img
              src={`/home/L_N_Wall.png`}
              alt="left"
              className="h-full w-screen object-cover scale-[1] object-center flex absolute top-0 left-0 z-[-1]  "
            />
          </div>
          <div className="w-1/2 h-screen left flex justify-start items-center RTM z-20 overflow-x-visible">
            <img
              src={`/home/Right.png`}
              alt="Right"
              className="h-full object-cover object-center z-10 GatImg"
            />
            <img
              src={`/home/L_N_Wall.png`}
              alt="left"
              className="w-full h-screen object-cover scale-x-[-1] flip object-center flex absolute top-0 right-0 z-[-1]  "
            />
          </div>
        </div>
      </div>

      <TextAnimation />
      <Countdown />

      <div className="w-full h-screen overflow-hidden  mx-auto"> 
        <img src={`/lastP.png`} className="w-full h-full object-center object-cover" alt="IMG" />
      </div>

      

    </>
  );
};


