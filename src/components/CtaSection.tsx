const MOBILE_TEXT =
  "Don\u2019t just dream it\u2014let\u2019s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.";

const DESKTOP_TEXT = [
  "Want to accelerate professional growth and development at your organisation?",
  "See how we can help.",
];

export default function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="bg-brand px-6 py-6">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="cta-heading"
            className="max-w-[280px] text-center text-base font-semibold leading-6 tracking-[0.48px] text-white sm:max-w-none sm:text-lg lg:hidden"
          >
            {MOBILE_TEXT}
          </h2>
          <p className="hidden text-center font-nunito text-xl font-semibold leading-[30px] tracking-[0.6px] text-white lg:block">
            {DESKTOP_TEXT[0]}
            <br />
            {DESKTOP_TEXT[1]}
          </p>
        </div>

        <a
          href="#contact"
          className="flex h-12 w-[185px] items-center justify-center text-base font-semibold leading-[24px] text-brand lg:w-[214px] lg:text-lg lg:leading-[27px]"
        >
          <span className="flex h-full w-full items-center justify-center rounded bg-white">
            Book a Consultation
          </span>
        </a>
      </div>
    </section>
  );
}