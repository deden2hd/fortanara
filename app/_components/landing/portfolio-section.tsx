"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, CircleDot } from "lucide-react";
import { SectionBadge } from "./section-badge";

const portfolioItems = [
  {
    title: "Recovery BlackCat Ransomware",
    description: "Ransomware Data Recovery: PT Manufacturing Indonesia",
    accent: "from-red-600/60 via-zinc-900/20 to-black/70",
  },
  {
    title: "22 TB Data Restoration",
    description: "Enterprise Backup Recovery: Grup Logistik Nasional",
    accent: "from-blue-600/45 via-zinc-900/20 to-black/70",
  },
  {
    title: "LockBit Incident Response",
    description: "Forensic Recovery: Perusahaan Finansial Regional",
    accent: "from-red-700/55 via-zinc-900/20 to-black/70",
  },
  {
    title: "Cloud Breach Containment",
    description: "Infrastructure Hardening: Penyedia SaaS Indonesia",
    accent: "from-emerald-600/35 via-zinc-900/20 to-black/70",
  },
];

function PortfolioVisual({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.28),transparent_20%)]" />
      <div className="absolute left-8 top-8 h-32 w-48 rotate-[-8deg] rounded-2xl border border-white/20 bg-white/20 backdrop-blur-sm" />
      <div className="absolute right-10 top-16 h-40 w-56 rotate-[10deg] rounded-2xl border border-white/15 bg-black/20 backdrop-blur-sm" />
      <div className="absolute bottom-24 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
    </div>
  );
}

export function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollPortfolio(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector<HTMLElement>("[data-portfolio-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 520;
    const gap = 20;

    carousel.scrollBy({
      behavior: "smooth",
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
    });
  }

  return (
    <section id="portofolio" className="overflow-hidden bg-white px-5 py-24 text-zinc-950 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
          <div>
            <SectionBadge icon={BriefcaseBusiness} variant="light">
              Portofolio
            </SectionBadge>
            <h2 className="mt-5 text-3xl font-medium leading-[1.1] tracking-normal text-zinc-950 sm:text-4xl lg:text-5xl">
              Rekam jejak Fortanara dalam menjaga kepercayaan.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-7 text-zinc-600">
              Setiap insiden punya konteks berbeda. Portofolio kami merangkum bagaimana Fortanara membantu bisnis
              memulihkan data, menutup celah, dan kembali beroperasi dengan bukti yang dapat dipertanggungjawabkan.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#portfolio-card-1"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-950 transition-colors hover:border-zinc-950 sm:hidden"
                aria-label="Portofolio sebelumnya"
              >
                <ArrowLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </a>
              <a
                href="#portfolio-card-2"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-950 transition-colors hover:border-zinc-950 sm:hidden"
                aria-label="Portofolio berikutnya"
              >
                <ArrowRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </a>
              <button
                type="button"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-950 transition-colors hover:border-zinc-950 sm:flex"
                aria-label="Portofolio sebelumnya"
                onClick={() => scrollPortfolio("previous")}
              >
                <ArrowLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-950 transition-colors hover:border-zinc-950 sm:flex"
                aria-label="Portofolio berikutnya"
                onClick={() => scrollPortfolio("next")}
              >
                <ArrowRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-white to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-white to-transparent sm:block" />
        <div
          ref={carouselRef}
          className="scrollbar-hide snap-x snap-mandatory scroll-smooth overflow-x-auto px-5 pb-2 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          <div className="flex gap-5">
            {portfolioItems.map((item, index) => (
              <div key={item.title} className="shrink-0">
                <article
                  id={`portfolio-card-${index + 1}`}
                  data-portfolio-card
                  className="relative aspect-[4/3] w-[330px] scroll-ml-5 snap-start overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-950 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.18)] sm:w-[430px] lg:w-[520px]"
                >
                  <PortfolioVisual accent={item.accent} />
                  <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/20 bg-white/12 p-5 text-white shadow-2xl backdrop-blur-xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-xs text-zinc-200">
                      <CircleDot aria-hidden="true" className="h-3 w-3 fill-red-500 text-red-500" strokeWidth={1.8} />
                      Case Study
                    </div>
                    <h3 className="text-2xl font-medium leading-tight text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-200">{item.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
