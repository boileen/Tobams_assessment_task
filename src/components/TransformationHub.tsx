import Image from "next/image";
import { ArrowUpRight, Bolt } from "@/components/icons";

const INFO_HEADING = "Learning With Our CEO:";
const INFO_TITLE = "Transformation Hub With Jite Newton";

const INFO_PARAGRAPH =
  "Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.";

const TOPICS = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

const TOPIC_GRID = [
  [TOPICS[0], TOPICS[1]],
  [TOPICS[2], TOPICS[3]],
  [TOPICS[4], TOPICS[5]],
];

export default function TransformationHub() {
  return (
    <section className="bg-white px-6 lg:px-16 lg:py-16">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <div className="flex flex-col items-stretch gap-6 rounded-2xl bg-accent/20 px-4 py-6 lg:gap-16 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-2 lg:gap-2">
            <p className="font-nunito text-sm italic font-semibold leading-[21px] text-royal lg:text-xl lg:leading-[26px]">
              {INFO_HEADING}
            </p>
            <p className="font-nunito text-xl italic font-semibold leading-[26px] text-brand lg:text-[32px] lg:leading-[41.6px]">
              {INFO_TITLE}
            </p>
          </div>

          <p className="text-sm leading-[21px] text-ink lg:text-lg lg:leading-[27px]">
            {INFO_PARAGRAPH}
          </p>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
            <div className="relative aspect-[295/232] w-full shrink-0 overflow-hidden rounded-lg lg:aspect-auto lg:h-[340px] lg:w-[560px]">
              <Image
                src="/images/what-ll-learn-img.png"
                fill
                sizes="(max-width: 1023px) 100vw, 560px"
                alt="Participants learning during a Transformation Hub webinar"
                className="object-cover"
              />
            </div>

            <div className="flex w-full flex-1 flex-col gap-6 rounded-lg bg-white/30 px-5 py-8">
              <div className="flex flex-col gap-3 lg:hidden">
                {TOPICS.map((topic) => (
                  <div
                    key={topic}
                    className="flex h-14 w-full items-center gap-[10px] rounded-xl bg-white px-4"
                  >
                    <Bolt
                      fill="#DDD0DA"
                      stroke="#571244"
                      strokeWidth={2}
                      className="h-6 w-6 shrink-0"
                    />
                    <span className="text-sm leading-[21px] text-ink">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

              <div className="hidden flex-col gap-3 lg:flex">
                {TOPIC_GRID.map((row, i) => (
                  <div key={i} className="flex gap-6">
                    {row.map((topic) => (
                      <div
                        key={topic}
                        className="flex h-[60px] flex-1 items-center gap-[10px] rounded-xl bg-white px-4"
                      >
                        <Bolt
                          fill="#DDD0DA"
                          stroke="#571244"
                          strokeWidth={2}
                          className="h-7 w-7 shrink-0"
                        />
                        <span className="text-lg leading-[27px] text-ink">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="flex h-12 w-fit items-center gap-2 rounded bg-brand px-6 text-sm font-semibold leading-[21px] text-white lg:text-lg lg:leading-[27px]"
              >
                Learn More
                <ArrowUpRight className="h-6 w-6 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}