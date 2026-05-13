"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiMenu4Fill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);

  const pathname = usePathname();

  // =========================== NAV UP ON SCROLL

  // useEffect(() => {
  //   if (!navRef.current) return;

  //   let lastScroll = 0;

  //   const trigger = ScrollTrigger.create({
  //     start: 0,
  //     end: "max",
  //     onUpdate: (self) => {
  //       const currentScroll = self.scroll();

  //       if (currentScroll > lastScroll && currentScroll > 100) {
  //         // Scroll DOWN → hide navbar
  //         gsap.to(navRef.current, {
  //           y: "-300%",
  //           duration: 0.4,
  //           ease: "power3.out",
  //         });
  //       } else {
  //         // Scroll UP → show navbar
  //         gsap.to(navRef.current, {
  //           y: "0%",
  //           duration: 0.4,
  //           ease: "power3.out",
  //         });
  //       }

  //       lastScroll = currentScroll;
  //     },
  //   });

  //   return () => {
  //     trigger.kill();
  //   };
  // }, []);

  const [isNavOpen, SetIsNavOpen] = useState(false);

  const clickCheck = () => {
    if (isNavOpen == false) {
      const NT = gsap.timeline();
      NT.to(
        ".MOBILENAV",
        {
          left: "0%",
          duration: 0.2,
          ease: "none",
          // onComplete: () => SetIsNavOpen(true)
        },
        "a11",
      );
      NT.to(
        ".smNavItem",
        {
          opacity: 1,
          stagger: {
            each: 0.09,
            ease: "none",
          },
          duration: 0.2,
          ease: "none",
          // onComplete: () => SetIsNavOpen(true)
        },
        "a11",
      );
      SetIsNavOpen(true);
    } else {
      const NTB = gsap.timeline();
      NTB.to(
        ".MOBILENAV",
        {
          left: "100%",
          duration: 0.2,
          ease: "none",
          // onComplete: () => SetIsNavOpen(false)
        },
        "a1a",
      );
      NTB.to(
        ".smNavItem",
        {
          opacity: 0,
          stagger: {
            each: 0.09,
            ease: "none",
          },
          duration: 0.2,
          ease: "none",
          // onComplete: () =>
        },
        "a1a",
      );
      SetIsNavOpen(false);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useLayoutEffect(() => {
    // kill old triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // OTHER PAGES
    if (pathname !== "/") {
      gsap.set(".NavMenuCont", { opacity: 1 });
      return;
    }

    // HOME PAGE
    gsap.set(".NavMenuCont", { opacity: 0 });

    const tween = gsap.to(".NavMenuCont", {
      opacity: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: navRef.current,
        start: "top top",
        end: "top -50%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={navRef}
      className="NavMenuCont w-full h-[46px] mt-10 flex gap-50 justify-between fixed top-0 left-0 items-center z-[100] px-20"
    >
      {/* Left */}
      <div className="w-1/3 h-full RVSPBTN items-center max-lg:hidden flex justify-between uppercase text-[14px] COLOR_TEXT_RED ">
        <Link href={`/wedding`}>
          <div
            className={`w-fit h-fit ${pathname === "/wedding" && " border-b border-[#044BB2]"}  flex flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer`}
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#044BB2]"></div>{" "}
            Itinerary
          </div>
        </Link>

        <Link href={`/venue`}>
          <div
            className={`w-fit h-fit ${pathname === "/venue" && " border-b border-[#044BB2]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#044BB2]"></div>
            Wedding Venue
          </div>
        </Link>

         <Link href={`/explore`}>
          <div
            className={`w-fit h-fit ${pathname === "/explore" && " border-b border-[#044BB2]"}  flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer`}
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#044BB2]"></div>
            Explore Marrakech
          </div>
        </Link>

       
      </div>

      {/* Logo */}
      <div className="w-fit h-[50px]  RVSPBTN absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <Link href={`/`}>
          <img
            src={`/svgs/CustomLogo.svg`}
            alt="Logo"
            className="h-full object-cover object-center"
          />
        </Link>
      </div>

      {/* Right */}
      <div className="w-1/3  h-full RVSPBTN items-center max-lg:hidden flex justify-between uppercase text-[14px]   COLOR_TEXT_RED">
        
         <Link href={`/guestservices`}>
          <div
            className={`w-fit h-fit ${pathname === "/guestservices" && " border-b border-[#044BB2]"}  flex flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer`}
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#044BB2]"></div>{" "}
            Services
          </div>
        </Link>

        
        <Link href={`/faq`}>
          <div
            className={`w-fit h-fit ${pathname === "/faq" && " border-b border-[#044BB2]"}  flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer`}
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[#044BB2]"></div>
            FAQs
          </div>
        </Link>
       

        <Link target="_blank" rel="noopener noreferrer" href={``}>
          <div className="w-fit h-[46px] RVSPBTN max-md:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[16px] text-white COLOR_BG_RED opacity-80 group ">
            <div className="w-fit text-[#1a6bbb] ">
              RSVP
              <div className="w-[0px] group-hover:w-full transition-all duration-150 ease-in h-[1px] bg-[#044BB2]"></div>
            </div>
          </div>
        </Link>
      </div>

      <div
        onClick={clickCheck}
        htmlFor="check"
        className=" absolute top-1 right-8 lg:hidden "
      >
        {isNavOpen == false ? (
          <>
            <RiMenu4Fill className="text-[2rem]  text-[#044BB2]" />
          </>
        ) : (
          <>
            <RiMenu3Line className="text-[2rem] text-[#044BB2] " />
          </>
        )}
      </div>

      {/* MOBILENAV */}
      <div className="w-full flex flex-col lg:hidden justify-center text-[1.5rem] leading-[1.5rem] z-100 uppercase gap-4 items-center MOBILENAV h-screen bg-white absolute -top-10 left-[150%] z-[-1]">
        <Link href={`/`}>
          <div
            onClick={clickCheck}
            className="w-fit h-fit flex flex-col smNavItem opacity-0 group relative COLOR_TEXT_RED  select-none cursor-pointer"
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]"></div>
            wedding
          </div>
        </Link>
        <Link href={`/wedding`}>
          <div
            onClick={clickCheck}
            className="w-fit h-fit flex smNavItem opacity-0 flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer"
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]"></div>{" "}
            Itinerary
          </div>
        </Link>
        <Link href={`/venue`}>
          <div
            onClick={clickCheck}
            className="w-fit h-fit flex smNavItem opacity-0 flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer"
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]"></div>{" "}
            Wedding Venue
          </div>
        </Link>
        <Link href={`/guestservices`}>
          <div
            onClick={clickCheck}
            className="w-fit h-fit flex smNavItem opacity-0 flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer"
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]"></div>{" "}
            Services
          </div>
        </Link>
        <Link href={`/explore`}>
          <div
            onClick={clickCheck}
            className="w-fit h-fit smNavItem opacity-0 flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer"
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]"></div>
            Explore Marrakech
          </div>
        </Link>
        <Link href={`/faq`}>
          <div
            onClick={clickCheck}
            className={`w-fit h-fit  flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer`}
          >
            {" "}
            <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out "></div>
            FAQ
          </div>
        </Link>

        {/* BTN */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://sonalandkush.rsvpify.com/rsvp-page-preview/1252849?signature=235b1d68860e41829c9570d80795912fa2bf5f030023fc95842583c3eca6cee8&securityToken=esXDu9juQOnJn9BH6C1HxIIu9kTXtrLv`}
        >
          <div className="w-fit h-[46px] lg:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[16px] mt-20 text-[white] COLOR_BG_RED">
            RSVP HERE
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
