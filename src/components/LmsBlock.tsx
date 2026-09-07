import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";

const COURSES = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LmsBlock() {
  return (
    <section
      aria-labelledby="lms-heading"
      className="bg-canvas lg:pb-10 lg:pt-10"
    >
      <div className="flex flex-col gap-6 bg-brand/10 px-6 pt-6 pb-10 lg:flex-row lg:items-center lg:gap-20 lg:px-16 lg:py-12">
        <Image
          src="/images/lms-left-image.png"
          alt="Tobams Group Learning Management System preview"
          width={557}
          height={568}
          priority
          className="h-[327px] w-[327px] shrink-0 object-cover lg:h-[568px] lg:w-[556.88px]"
        />

        <div className="flex w-full flex-col gap-6 lg:h-[516px] lg:w-[675.12px] lg:max-w-[675.12px]">
          <h2
            id="lms-heading"
            className="text-xl font-semibold leading-[30px] tracking-[0.6px] text-brand lg:text-[40px] lg:leading-[60px] lg:tracking-[1.2px]"
          >
            Learning Management System
          </h2>

          <div className="flex flex-col gap-5 rounded-lg bg-brand/10 p-6">
            <p className="text-sm leading-[21px] text-ink lg:text-lg lg:leading-[27px]">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&rsquo;s competitive
              tech landscape.
            </p>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold leading-6 text-brand lg:text-lg lg:leading-[27px]">
                Some of our courses include:
              </h3>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm leading-[21px] text-ink lg:grid-cols-3 lg:gap-x-3 lg:gap-y-3 lg:text-base lg:leading-6">
                {COURSES.map((course) => (
                  <li key={course} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-[5px] w-[5px] shrink-0 rounded-full bg-brand"
                    />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#contact"
            className="flex h-12 w-fit items-center gap-2 rounded bg-brand px-6 text-sm font-semibold leading-[21px] text-white transition-opacity hover:opacity-90 lg:text-lg lg:leading-[27px]"
          >
            Learn More
            <ArrowUpRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}