import { safeNextPath } from "@/lib/siteAuth";
import PasswordForm from "./PasswordForm";

export const metadata = {
  title: "Laiqa & Rabeel",
  robots: { index: false, follow: false },
};

export default async function PasswordPage({ searchParams }) {
  const { next } = await searchParams;

  return (
    <main className="w-full min-h-[100svh] bg-white flex flex-col justify-center items-center px-6 py-16 text-center">
      <img src="/svgs/CustomLogo.svg" alt="Laiqa & Rabeel" className="h-[90px] max-md:h-[70px] object-contain mb-10" />

      <h1 className="Font_Q COLOR_TEXT_RED text-[5vw] max-lg:text-[8vw] max-md:text-[11vw] leading-none tracking-tighter">
        Laiqa &amp; Rabeel
      </h1>

      <p className="Font_YV COLOR_TEXT_RED mt-6 mb-12 max-w-[420px] opacity-80">
        Please enter the password from your invitation to view our wedding website.
      </p>

      <PasswordForm next={safeNextPath(next)} />
    </main>
  );
}
