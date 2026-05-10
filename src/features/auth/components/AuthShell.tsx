import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import authImage from "../images/authimage.png";
import logoImage from "../images/logo.png";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen overflow-hidden bg-[#f7f8f9] p-3 font-[var(--font-body)] sm:p-4 lg:p-5">
      <div className="mx-auto grid h-full w-full max-w-6xl overflow-hidden rounded-[1.625rem] bg-white lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative min-h-[25rem] overflow-hidden rounded-[1.625rem] bg-[#3f4454] lg:min-h-full">
          <Image
            src={authImage}
            alt="Abstract authentication background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,24,34,0.35),rgba(20,24,34,0.12))]" />

          <div className="absolute left-6 top-5 z-10 flex items-center gap-2">
            <Link href="/" aria-label="Go to homepage" className="inline-flex">
              <Image
                src={logoImage}
                alt="Shiko logo"
                width={120}
                height={40}
                className="h-auto w-28"
                priority
              />
            </Link>
          </div>
        </aside>

        <section className="flex items-center justify-center rounded-r-[1.625rem] bg-white px-4 py-8 sm:px-8 lg:px-12">
          {children}
        </section>
      </div>
    </main>
  );
}