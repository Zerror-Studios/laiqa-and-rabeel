import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Wedding Events", href: "/wedding" },
  { label: "Wedding Venue", href: "/venue" },
  { label: "Guest Services", href: "/guestservices" },
  { label: "FAQ's", href: "faq" },
  { label: "Explore Marrakesh", href: "/explore" },
];

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <footer className="w-full COLOR_BG_CREAM border-t border-[#5513013b] group/footer">

      {/* ── Main footer body ── */}
      <div className="px-10 max-md:px-6 pt-12 pb-8 grid grid-cols-3 max-lg:grid-cols-1 gap-10 max-lg:gap-8">

        {/* Col 1 — Logo */}
        <div className="flex flex-col gap-4 max-lg:items-center max-lg:text-center">
          <Link href="/" className="w-fit transition-all duration-300 ease-in-out hover:opacity-75 hover:scale-[1.03] inline-block origin-left max-lg:origin-center">
            <img
              src="/svgs/CustomLogo.svg"
              alt="Logo"
              className="h-[52px] object-contain"
            />
          </Link>
        </div>

        {/* Col 2 — Navigation */}
        <div className="flex flex-col gap-3 max-lg:items-center max-lg:text-center">
          <span className="Font_Q COLOR_TEXT_RED text-[16px] tracking-[0.25em] uppercase font-semibold opacity-100 mb-1">
            Quick Links
          </span>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative group/link w-fit Font_YV text-[16px] tracking-wide max-lg:mx-auto transition-all duration-200 ease-in-out
                ${hoveredLink !== null && hoveredLink !== i
                  ? "COLOR_TEXT_RED opacity-35 translate-x-0"
                  : "COLOR_TEXT_RED opacity-100"
                }
                ${hoveredLink === i ? "translate-x-1" : "translate-x-0"}
              `}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`inline-block h-[1px] COLOR_BG_RED transition-all duration-200 ease-in-out ${
                    hoveredLink === i ? "w-3 opacity-100" : "w-0 opacity-0"
                  }`}
                />
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 COLOR_BG_RED transition-all duration-200 ease-in-out group-hover/link:w-full block" />
            </Link>
          ))}
        </div>

         {/* ── Ornamental divider ── */}
      <div className="flex items-center gap-4 px-10 max-md:px-6 sm:hidden">
        <div className="flex-1 h-[0.5px] bg-[#55130130]" />
        <span className="COLOR_TEXT_RED text-[10px] tracking-[0.3em] Font_YV uppercase select-none">✦</span>
        <div className="flex-1 h-[0.5px] bg-[#55130130]" />
      </div>


        {/* Col 3 — Contact */}
        <div className="flex flex-col gap-3 max-lg:items-center max-lg:text-center">
          <span className="Font_Q font-semibold COLOR_TEXT_RED text-[16px] tracking-[0.25em] uppercase font-semibold opacity-100 mb-1">
            Get in Touch
          </span>
          <span className="Font_YV COLOR_TEXT_RED text-[16px]  leading-relaxed">
            For any questions, reach out to the L&amp;R planning team:
          </span>

          {/* Email */}
          <a
            href="wedding@laiqarabeel.com"
            className="group/contact w-fit max-lg:mx-auto flex items-center justify-center gap-2 transition-all duration-200 ease-in-out hover:translate-x-1"
          >
            {/* mail icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] h-[14px] COLOR_TEXT_RED opacity-100  translate-y-[15%]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
            <span className="relative flex flex-col COLOR_TEXT_RED Font_YV  text-[16px] cursor-pointer select-none">
              wedding@laiqarabeel.com
              <span className="h-[1px] w-0 COLOR_BG_RED transition-all duration-200 ease-in-out group-hover/contact:w-full block" />
            </span>
          </a>

         
        </div>
      </div>

      {/* ── Ornamental divider ── */}
      <div className="flex items-center gap-4 px-10 max-md:px-6">
        <div className="flex-1 h-[0.5px] bg-[#55130130]" />
        <span className="COLOR_TEXT_RED text-[10px] tracking-[0.3em] Font_YV uppercase select-none">✦</span>
        <div className="flex-1 h-[0.5px] bg-[#55130130]" />
      </div>

      {/* ── Copyright bar ── */}
      <div className="px-10 max-md:px-6 py-5 flex max-md:flex-col max-md:gap-2 items-center justify-center">
        <span className=" font-serif COLOR_TEXT_RED text-[16px] tracking-[0.12em] max-sm:text-center opacity-100">
          © {new Date().getFullYear()} Laiqa &amp; Rabeel. <br className="sm:hidden" /> All rights reserved.
        </span>
      </div>

    </footer>
  );
};

export default Footer;