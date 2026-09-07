"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MenuIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "About", dropdown: true },
  { label: "What We Do", dropdown: true },
  { label: "Jobs", dropdown: true },
  { label: "Projects" },
  { label: "TG Academy" },
  { label: "Strategic Partnership" },
  { label: "Pricing" },
  { label: "Book a Consultation" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="hidden h-26 items-center justify-between border-b border-mist px-16 lg:flex">
        <Link href="/" aria-label="Tobams Group home">
          <Image
            src="/images/logo.png"
            alt=""
            width={200}
            height={78}
            priority
          />
        </Link>
        <div className="flex items-center gap-7">
          <button type="button" className="flex items-center">
            <Image
              src="/images/account-button.png"
              alt="Account"
              width={210}
              height={60}
              priority
            />
          </button>
          <button type="button" className="flex items-center">
            <Image
              src="/images/take-assessment-button.png"
              alt="Take Assessment"
              width={231}
              height={60}
              priority
            />
          </button>
        </div>
      </div>

      <div className="flex h-[76px] items-center justify-between px-6 bg-canvas shadow-[0_0_2px_0_rgba(0,0,0,0.25)] lg:hidden">
        <Image
          src="/images/logo.png"
          alt="Tobams Group"
          width={144}
          height={48}
          priority
        />
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-8 w-8 items-center justify-center rounded text-ink"
        >
          <MenuIcon className="h-8 w-8" />
        </button>
      </div>

      <nav aria-label="Main navigation" className="hidden lg:block">
        <div className="flex h-[69px] items-center px-16">
          <ul className="mx-auto flex items-center gap-8 2xl:gap-[32px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`group inline-flex items-center gap-1 text-[20px] leading-[30px] transition-colors hover:text-brand ${
                    link.label === "About"
                      ? "font-semibold text-brand"
                      : "font-normal text-ink"
                  }`}
                >
                  <span className="group-hover:underline">{link.label}</span>
                  {link.dropdown && <ChevronDown className="h-5 w-5 text-brand" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div className="bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-[20px] leading-[30px] text-ink"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="text-brand" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <button type="button" className="flex h-auto w-fit items-center">
              <Image
                src="/images/account-button.png"
                alt="Account"
                width={210}
                height={60}
              />
            </button>
            <button type="button" className="flex h-auto w-fit items-center">
              <Image
                src="/images/take-assessment-button.png"
                alt="Take Assessment"
                width={231}
                height={60}
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}