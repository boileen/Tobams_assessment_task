import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[317px] items-center justify-center overflow-hidden bg-black/70 py-10 text-center md:py-16 lg:min-h-[511px] lg:py-[112px]"
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 flex max-w-[1312px] flex-col items-center gap-8 px-6 md:gap-10 lg:gap-[40px] lg:px-16">
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <span className="inline-flex items-center rounded-full bg-white/10 px-8 py-[10px] text-xs font-semibold uppercase leading-[18px] tracking-[0.36px] text-white md:px-9 md:text-sm md:leading-[21px] lg:px-12 lg:py-3 lg:tracking-normal">
            What we do
          </span>
          <h1
            id="hero-heading"
            className="text-2xl font-bold leading-[31.2px] text-white font-nunito md:text-4xl md:leading-[52px] lg:text-[56px] lg:leading-[72.8px]"
          >
            <span className="md:hidden">Learning and Development</span>
            <span className="hidden md:inline">Training and Development</span>
          </h1>
          <p className="mt-2 max-w-[1077px] text-sm font-semibold leading-[21px] text-white md:mt-3 md:text-base md:leading-6 lg:mt-[15px] lg:text-lg lg:leading-[27px]">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers
            forward&nbsp;in today&rsquo;s ever-evolving landscape.
          </p>
        </div>
        <button
          type="button"
          className="flex h-10 items-center justify-center rounded bg-brand px-[22px] text-sm font-semibold leading-[21px] text-white transition-opacity hover:opacity-90 lg:h-12 lg:px-6 lg:text-lg lg:leading-[27px]"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}