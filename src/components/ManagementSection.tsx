import Image from "next/image";
import { Bolt } from "@/components/icons";

const HEADING = "Management Development Program";

const BENEFITS = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

const DESCRIPTION =
  "Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high -performing leaders they need to thrive. Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.";

export default function ManagementSection() {
  return (
    <section
      aria-labelledby="management-development-heading"
      className="bg-canvas px-6 lg:bg-white lg:px-16 lg:py-16"
    >
      <div className="flex flex-col gap-10">
        <div className="rounded-[20px] bg-berry-800 px-5 py-4 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
            <h2
              id="management-development-heading"
              className="order-1 text-2xl font-bold leading-9 tracking-[0.72px] text-white lg:hidden"
            >
              {HEADING}
            </h2>

            <div className="relative order-2 aspect-[287/232] w-full shrink-0 lg:order-none lg:aspect-auto lg:h-[639px] lg:w-[592px]">
              <Image
                src="/images/management-img.png"
                fill
                sizes="(max-width: 1023px) 100vw, 592px"
                alt="Professionals participating in the Management Development Program"
                className="object-cover"
              />
            </div>

            <div className="order-3 flex flex-1 flex-col gap-8 lg:order-none">
              <div className="flex flex-col gap-5">
                <h2
                  className="hidden text-[40px] font-semibold leading-[60px] tracking-[1.2px] text-white lg:block"
                >
                  {HEADING}
                </h2>
                <p className="text-sm leading-[21px] text-white lg:text-lg lg:leading-[27px]">
                  {DESCRIPTION}
                </p>
              </div>

              <ul className="flex flex-col gap-[25px] lg:px-4 lg:pt-2">
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex h-10 w-full items-center gap-2 rounded-lg bg-berry-400 px-2 py-1"
                  >
                    <Bolt className="h-[15px] w-auto shrink-0 lg:h-[19px]" />
                    <span className="text-sm font-normal leading-[21px] text-white lg:text-lg lg:font-semibold lg:leading-[27px]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}