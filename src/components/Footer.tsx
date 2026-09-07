import type { ReactNode } from "react";
import Image from "next/image";
import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TwitterXIcon,
} from "@/components/icons";

const BRAND_DESCRIPTION =
  "Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.";

const WHAT_WE_DO_DESKTOP = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
];

const WHAT_WE_DO_MOBILE = WHAT_WE_DO_DESKTOP;

const COMPANY_LINKS = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const SOLUTION_DESKTOP = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

const SOLUTION_MOBILE = SOLUTION_DESKTOP;

const SOCIALS = [
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Twitter", Icon: TwitterXIcon },
];

function LinkColumn({
  heading,
  links,
  className,
}: {
  heading: string;
  links: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-lg font-bold leading-[27px] text-white font-sans lg:font-nunito lg:text-xl lg:leading-[27.28px]">
        {heading}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm leading-[21px] text-white hover:text-white lg:font-nunito lg:text-base lg:leading-6 lg:tracking-[0.48px]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InformationRow({
  icon,
  children,
  href,
}: {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  const className =
    "flex items-center gap-4 text-sm leading-[21px] text-white lg:font-nunito lg:text-base lg:leading-6";
  if (href) {
    return (
      <a href={href} className={className}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }
  return (
    <div className={className}>
      {icon}
      <span>{children}</span>
    </div>
  );
}

function RcChip() {
  return (
    <div className="w-fit rounded-lg bg-white/5 px-4 py-1">
      <span className="text-base font-medium leading-6 text-white font-nunito">
        RC 1048722
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#11040E]">
      <div
        id="contact"
        className="border-t border-b border-[#C4C4C4] bg-berry-900 px-6 py-6 lg:px-16 lg:py-10"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-10">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-[10px]">
            <p className="text-sm leading-[21px] text-white lg:hidden font-sans">
              Ready to be a part of something extraordinary?
            </p>
            <p className="hidden text-lg leading-[27px] text-white lg:block font-sans">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="text-center text-xl font-semibold leading-[26px] text-white font-nunito lg:text-left lg:text-[32px] lg:leading-[41.6px]">
              Let&rsquo;s work together to create a difference
            </h2>
          </div>
          <a
            href="#"
            className="flex h-10 w-[125px] items-center justify-center rounded bg-brand text-sm font-semibold leading-[16.8px] text-white font-nunito hover:bg-brand/90 lg:h-12 lg:w-[151px] lg:text-lg lg:leading-[21.6px]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="px-6 py-6 lg:px-16 lg:py-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
            <div className="flex flex-col gap-6 lg:max-w-[356px]">
              <Image
                src="/images/logo.png"
                width={188}
                height={73}
                alt="Tobams Group"
                className="h-auto w-auto"
              />
              <p className="text-sm leading-[21px] text-[#F8F8F8] lg:font-nunito lg:text-base lg:leading-6 lg:tracking-[0.48px]">
                {BRAND_DESCRIPTION}
              </p>
              <ul className="flex gap-5">
                {SOCIALS.map(({ label, Icon }) => (
                  <li key={label}>
                    <a
                      href="#"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-mist"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <LinkColumn
              heading="What We Do"
              links={WHAT_WE_DO_MOBILE}
              className="lg:hidden"
            />
            <LinkColumn
              heading="What We Do"
              links={WHAT_WE_DO_DESKTOP}
              className="hidden lg:block"
            />
            <LinkColumn heading="Company" links={COMPANY_LINKS} />
            <LinkColumn
              heading="Solution"
              links={SOLUTION_MOBILE}
              className="lg:hidden"
            />
            <LinkColumn
              heading="Solution"
              links={SOLUTION_DESKTOP}
              className="hidden lg:block"
            />
          </div>

          <div className="mt-10 hidden items-stretch justify-between gap-6 rounded-lg bg-white/[0.06] px-6 py-6 lg:flex">
            <div className="flex flex-1 flex-col gap-[10px]">
              <h3 className="text-xl font-bold leading-[27.28px] text-white font-nunito">
                Registered Offices
              </h3>
              <div className="flex items-stretch gap-6">
                <p className="text-base leading-6 text-white font-sans">
                  <span className="text-accent">United Kingdom</span>
                  <br />
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
                <div aria-hidden="true" className="w-px bg-mist" />
                <p className="text-base leading-6 text-white font-sans">
                  <span className="text-accent">Nigeria</span>
                  <br />
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="w-px bg-mist"
            />

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-xl font-bold leading-[27.28px] text-white font-nunito">
                Contact Information
              </h3>
              <InformationRow
                href="mailto:theteam@tobamsgroup.com"
                icon={<MailIcon />}
              >
                theteam@tobamsgroup.com
              </InformationRow>
              <InformationRow href="tel:+447886600748" icon={<PhoneIcon />}>
                +447886600748
              </InformationRow>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-6 rounded-lg bg-white/[0.06] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-lg font-bold leading-[27px] text-white font-sans">
                Contact Information
              </h3>
              <InformationRow
                href="mailto:theteam@tobamsgroup.com"
                icon={<MailIcon />}
              >
                theteam@tobamsgroup.com
              </InformationRow>
              <InformationRow href="tel:+447886600748" icon={<PhoneIcon />}>
                +447886600748
              </InformationRow>
              <InformationRow icon={<PinIcon />}>
                <span className="font-bold font-nunito lg:tracking-[0.48px]">United Kingdom (HQ)</span>
                <span className="mt-1 block font-nunito">
                  64 Nile Street, International House, London N1 7SR
                </span>
              </InformationRow>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-base leading-[21px] tracking-[0.42px] text-[#C4C4C4]/40 font-nunito">
                Branch
              </span>
              <span className="text-base font-bold leading-[21px] tracking-[0.42px] text-white font-nunito">
                Nigeria
              </span>
              <span className="text-base leading-[21px] tracking-[0.48px] text-white font-nunito">
                Company registration No.:
              </span>
              <RcChip />
            </div>

            <div className="flex flex-col gap-[10px] pt-2">
              <h3 className="text-lg font-bold leading-[27px] text-white font-sans">
                Registered Offices
              </h3>
              <p className="text-base leading-6 text-white">
                United Kingdom
                <br />
                07451196 (Registered by Company House)
                <br />
                Vine Cottages, 215 North Street, Romford, Essex, United
                Kingdom, RM1 4QA
              </p>
              <div aria-hidden="true" className="h-px bg-mist" />
              <p className="text-base leading-6 text-white">
                Nigeria
                <br />
                RC 1048722 (Registered by the Corporate Affairs Commission)
                <br />
                4, Muaz Close, Angwar-Rimi
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="mt-10 h-[2px] w-full bg-mist"
          />

          <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row lg:justify-between lg:gap-10">
            <p className="text-sm font-light leading-6 text-white font-nunito lg:text-base">
              Copyright &copy; Tobams Group, 2024. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center gap-[40px]">
              {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light leading-9 text-white font-nunito underline lg:text-base"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}