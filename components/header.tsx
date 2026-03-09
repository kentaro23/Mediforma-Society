"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-gray-200 bg-white">
      <div className="container-standard flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 leading-none">
          <Image
            src="/mediforma_logo_only.svg"
            alt="Mediforma logo"
            width={44}
            height={44}
            className="block h-11 w-11 object-contain"
            priority
          />
          <span className="font-[var(--font-inter)] text-[18px] font-semibold text-navy">Mediforma Society</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[var(--font-inter)] text-[14px] text-text transition-opacity hover:opacity-90"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-teal px-4 py-2 font-[var(--font-inter)] text-[14px] text-white transition-opacity hover:opacity-90"
          >
            資料請求
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-sm border border-gray-200 px-3 py-2 font-[var(--font-inter)] text-[13px] text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          メニュー
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-gray-200 bg-white md:hidden">
          <div className="container-standard py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-inter)] text-[14px] text-text"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 inline-flex w-fit rounded-sm bg-teal px-4 py-2 font-[var(--font-inter)] text-[14px] text-white"
                onClick={() => setOpen(false)}
              >
                資料請求
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
