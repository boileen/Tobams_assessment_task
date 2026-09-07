import { ArrowUp, ArrowUpRight } from "@/components/icons";

const HEADING = "Training The Consultant";

const MOBILE_TAGLINE = "Maximize Your Potential as a Certified Trainer:";
const DESKTOP_TAGLINE = "Maximise Your Potential as a Certified Trainer:";

const MOBILE_PARAGRAPH =
  "With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified trainer. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in Business Analysis while also developing the abilities to mentor and encourage others in their career advancement.";

const DESKTOP_PARAGRAPH =
  "With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.";

const FEATURES = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

function FeatureCard({
  title,
  description,
  gridClassName,
}: {
  title: string;
  description: string;
  gridClassName: string;
}) {
  return (
    <div className={gridClassName}>
      <h3 className="text-base font-bold leading-6 text-white lg:text-lg lg:leading-[27px]">
        {title}
      </h3>
      <p className="text-sm leading-[21px] text-white lg:text-lg lg:leading-[27px]">
        {description}
      </p>
    </div>
  );
}

export default function ConsultantSection() {
  return (
    <section
      aria-labelledby="training-the-consultant-heading"
      className="bg-brand/10 px-6 py-6 lg:max-w-none lg:px-16 lg:py-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 lg:gap-[56px]">
        <div className="flex flex-col gap-[62px] lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-8 lg:gap-[32px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h2
                  id="training-the-consultant-heading"
                  className="text-2xl font-semibold leading-[31.2px] text-brand lg:text-[40px] lg:leading-[52px]"
                >
                  {HEADING}
                </h2>
                <p className="text-base font-semibold leading-6 text-brand lg:hidden">
                  {MOBILE_TAGLINE}
                </p>
                <p className="hidden text-lg font-semibold leading-[27px] text-brand lg:block">
                  {DESKTOP_TAGLINE}
                </p>
              </div>

              <p className="text-sm leading-[21px] text-ink lg:hidden">
                {MOBILE_PARAGRAPH}
              </p>
              <p className="hidden text-lg leading-[27px] text-ink lg:block">
                {DESKTOP_PARAGRAPH}
              </p>
            </div>

            <div className="flex flex-col gap-5 rounded-lg bg-brand p-6 lg:flex-row lg:gap-5 lg:p-6">
              <div className="flex flex-1 flex-col gap-5">
                <FeatureCard
                  {...FEATURES[0]}
                  gridClassName="flex flex-col gap-3"
                />
                <FeatureCard
                  {...FEATURES[1]}
                  gridClassName="flex flex-col gap-3"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5">
                <FeatureCard
                  {...FEATURES[2]}
                  gridClassName="flex flex-col gap-3"
                />
                <FeatureCard
                  {...FEATURES[3]}
                  gridClassName="flex flex-col gap-3"
                />
              </div>
            </div>

            <a
              href="#contact"
              className="flex h-14 w-fit items-center gap-2 rounded-lg bg-brand px-6 text-sm font-semibold leading-[21px] text-white lg:h-12 lg:rounded lg:px-6 lg:text-lg lg:leading-[27px]"
            >
              <span className="lg:hidden">Learn more</span>
              <span className="hidden lg:inline">Learn More</span>
              <ArrowUp className="h-8 w-8 shrink-0 lg:hidden" />
              <ArrowUpRight className="hidden h-6 w-6 shrink-0 lg:block" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}