import Image from "next/image";
import { ArrowRight, BulletIcon } from "@/components/icons";

type Block = {
  id: string;
  heading: string;
  mobileTracking: string;
  description: string;
  bullets: string[];
  bodyGap: string;
  imageWrapper: string;
  layers: string[];
  alt: string;
  position: "left" | "right";
  gap: string;
};

const BLOCKS: Block[] = [
  {
    id: "corporate-trainings",
    heading: "Corporate Trainings",
    mobileTracking: "",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    bodyGap: "gap-5 lg:gap-[19px]",
    imageWrapper:
      "aspect-[327/229] lg:aspect-auto lg:h-[346px] lg:w-[602px]",
    layers: ["/images/corporate-trainings.png"],
    alt: "Professionals collaborating during a corporate training session",
    position: "right",
    gap: "lg:gap-16",
  },
  {
    id: "personalised-individual-training",
    heading: "Personalised Individual Training",
    mobileTracking: "tracking-[0.6px]",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group\u2019s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today\u2019s professionals.",
    bullets: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    bodyGap: "gap-[19px] lg:gap-[19px]",
    imageWrapper:
      "aspect-[327/240] lg:aspect-auto lg:h-[378px] lg:w-[599px]",
    layers: [
      "/images/individual-training.png",
      "/images/individual-training-2.png",
    ],
    alt: "Individual learner advancing their professional skills",
    position: "left",
    gap: "lg:gap-[81px]",
  },
  {
    id: "capacity-development",
    heading: "Capacity Development",
    mobileTracking: "tracking-[0.6px]",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    bullets: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    bodyGap: "gap-[19px] lg:gap-[19px]",
    imageWrapper:
      "aspect-[324/232] lg:aspect-auto lg:h-[405px] lg:w-[601px]",
    layers: ["/images/individual-training.png", "/images/capacity-dev.png"],
    alt: "Capacity development and mentorship through Tobams Group",
    position: "right",
    gap: "lg:gap-16",
  },
];

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 lg:gap-1.5 lg:px-[30px]">
      {bullets.map((bullet) => (
        <li
          key={bullet}
          className="flex items-center gap-[14px] text-sm leading-[21px] text-slate-60 lg:text-lg lg:leading-[27px]"
        >
          <BulletIcon className="h-4 w-[12.4444px] shrink-0" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TrainingSection() {
  return (
    <section
      aria-labelledby="corporate-trainings-heading"
      className="bg-canvas px-6 lg:bg-white lg:px-16 lg:py-16"
    >
      <div className="flex flex-col gap-6 bg-white py-6 lg:gap-[120px] lg:bg-transparent lg:py-0">
        {BLOCKS.map((block) => {
          const isCorporate = block.id === "corporate-trainings";

          const image = (
            <div
              className={`relative order-2 w-full shrink-0 overflow-hidden lg:order-none ${block.imageWrapper}`}
            >
              {block.layers.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  fill
                  sizes="(max-width: 1023px) 100vw, 620px"
                  alt={i === block.layers.length - 1 ? block.alt : ""}
                  className="object-cover"
                />
              ))}
            </div>
          );

          const cta = isCorporate ? (
            <a
              href="#contact"
              className="order-4 flex h-12 w-fit items-center gap-2 rounded bg-brand px-6 text-base font-semibold leading-6 text-white transition-opacity hover:opacity-90 lg:hidden"
            >
              Learn More
              <ArrowRight className="h-6 w-6" />
            </a>
          ) : null;

          return (
            <div
              key={block.id}
              className={`flex flex-col gap-6 lg:flex-row lg:items-center ${block.gap}`}
            >
              {block.position === "left" ? image : null}

              <div className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-[21px]">
                <h3
                  id={isCorporate ? "corporate-trainings-heading" : undefined}
                  className={`order-1 text-xl font-semibold leading-[30px] ${block.mobileTracking} text-ink lg:text-[40px] lg:leading-[60px] lg:tracking-[1.2px]`}
                >
                  {block.heading}
                </h3>
                <div className={`order-3 flex flex-col ${block.bodyGap}`}>
                  <p className="text-sm leading-[21px] text-slate-60 lg:text-lg lg:leading-[27px]">
                    {block.description}
                  </p>
                  <BulletList bullets={block.bullets} />
                </div>
                {cta}
              </div>

              {block.position === "right" ? image : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}