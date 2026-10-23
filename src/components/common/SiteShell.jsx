"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Footer from "@/components/common/Footer";
import NavBar from "./NavBar";
import LenisScroll from "./LenisScroll";

gsap.registerPlugin(ScrollTrigger);

export default function SiteShell({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  // The password gate is a standalone screen, without the nav or footer.
  if (pathname === "/password") {
    return children;
  }

  return (
    <LenisScroll>
      <NavBar />

      {children}

      <Footer />
    </LenisScroll>
  );
}
