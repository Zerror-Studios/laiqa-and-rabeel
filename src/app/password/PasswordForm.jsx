"use client";

import { useActionState } from "react";
import { unlock } from "./actions";

export default function PasswordForm({ next }) {
  const [state, formAction, pending] = useActionState(unlock, null);

  return (
    <form action={formAction} className="w-full max-w-[360px] flex flex-col items-center gap-6">
      <input type="hidden" name="next" value={next} />

      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        placeholder="Password"
        aria-invalid={state?.error ? true : undefined}
        aria-describedby={state?.error ? "password-error" : undefined}
        className="w-full bg-transparent border-b border-[#044BB2]/40 focus:border-[#044BB2] outline-none py-3 text-center Font_YV COLOR_TEXT_RED text-[1.25rem] tracking-[0.15em] placeholder:text-[#044BB2]/40 placeholder:tracking-[0.25em] placeholder:uppercase placeholder:text-[0.85rem] transition-colors duration-300"
      />

      {state?.error && (
        <p id="password-error" role="alert" className="Font_YV text-[#551301] !text-[15px] !leading-[20px] text-center -mt-2">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-[#044BB2] hover:bg-[#0b397e] disabled:opacity-60 text-white Font_YV uppercase tracking-[0.25em] text-[0.85rem] px-10 py-3 transition-colors duration-300 cursor-pointer disabled:cursor-wait"
      >
        {pending ? "Opening…" : "Enter"}
      </button>
    </form>
  );
}
