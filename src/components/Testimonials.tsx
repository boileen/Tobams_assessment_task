import Image from "next/image";
import { ArrowLeft } from "@/components/icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatars: string[];
  alt: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatars: ["/images/img-5412a2bc.png"],
    alt: "Aisha Yusuf",
  },
  {
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatars: ["/images/img-1994067c.png"],
    alt: "John Davies",
  },
  {
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatars: ["/images/img-08e455fe.png"],
    alt: "Chinonso Nwankwo",
  },
  {
    quote:
      "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful \u2013 exactly what we needed for our projects.",
    name: "Rita Ahmed",
    role: "Creative Director, ArtInnovate Studios",
    avatars: ["/images/img-08e455fe.png", "/images/img-4f95a8a0.png"],
    alt: "Rita Ahmed",
  },
  {
    quote:
      "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
    name: "David Johnson",
    role: "Small Business Owner",
    avatars: ["/images/img-1994067c.png"],
    alt: "David Johnson",
  },
  {
    quote:
      "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable",
    name: "Femi Adekunle",
    role: "IT Professional",
    avatars: ["/images/img-5412a2bc.png"],
    alt: "Femi Adekunle",
  },
];

function AvatarStack({ avatars, alt }: { avatars: string[]; alt: string }) {
  return (
    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
      {avatars.map((src, i) => (
        <Image
          key={src}
          src={src}
          fill
          sizes="44px"
          alt={i === 0 ? alt : ""}
          aria-hidden={i > 0}
          className="object-cover"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-[#C4C4C4] px-6 py-6 lg:py-16 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <h2
          id="testimonials-heading"
          className="text-center text-xl font-bold leading-[26px] text-ink lg:text-[40px] lg:leading-[52px]"
        >
          Testimonials
        </h2>

        <div className="overflow-hidden">
          <div className="flex w-max gap-[23px]">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="flex h-[226px] w-[328px] flex-col gap-4 rounded-lg border-l border-accent bg-white px-5 py-5 lg:h-[244px] lg:w-[422px] lg:gap-6 lg:rounded-2xl lg:px-6 lg:pt-6 lg:pb-5"
              >
                <div className="flex items-center gap-[21px]">
                  <AvatarStack avatars={t.avatars} alt={t.alt} />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-[21px] text-ink lg:text-base lg:leading-6">
                      {t.name}
                    </span>
                    <span className="text-xs leading-[18px] text-slate-60 lg:text-sm lg:leading-[21px]">
                      {t.role}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-[21px] text-ink lg:text-lg lg:leading-[27px]">
                  {t.quote}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F04354]/10"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F04354]/10"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}