"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, FileUp, KeyRound, Radar, SearchCheck, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionBadge } from "./section-badge";

type StageCard = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const stages: StageCard[] = [
  {
    number: "#1",
    title: "Unggah File Sample",
    description:
      "Kirimkan sample terenkripsi dan catatan ransom agar tim kami dapat mengidentifikasi pola serangan awal.",
    icon: FileUp,
  },
  {
    number: "#2",
    title: "Kami Akan Menghubungi Anda",
    description:
      "Analis Fortanara menghubungi tim Anda untuk mengumpulkan konteks insiden dan memvalidasi prioritas sistem.",
    icon: Radar,
  },
  {
    number: "#3",
    title: "Proses Analisis Ransomware",
    description:
      "Kami memeriksa varian, indikator kompromi, dan peluang recovery sebelum menentukan jalur pemulihan.",
    icon: SearchCheck,
  },
  {
    number: "#4",
    title: "Pengiriman Hasil Analisis & Recovery ID",
    description:
      "Hasil analisis dikirimkan bersama rekomendasi tindakan dan identitas recovery untuk proses berikutnya.",
    icon: KeyRound,
  },
  {
    number: "#5",
    title: "Pemulihan Aman dan Hardening",
    description:
      "Data dipulihkan secara bertahap, akses awal ditutup, dan sistem diperkuat agar insiden tidak berulang.",
    icon: ShieldAlert,
  },
];

function CarouselControls({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) {
  return (
    <div className="mt-7 flex items-center justify-end gap-3">
      <a
        href="#stage-card-1"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:hidden"
        aria-label="Tahapan sebelumnya"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </a>
      <a
        href="#stage-card-2"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:hidden"
        aria-label="Tahapan berikutnya"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </a>
      <button
        type="button"
        className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:flex"
        aria-label="Tahapan sebelumnya"
        onClick={onPrevious}
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </button>
      <button
        type="button"
        className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:flex"
        aria-label="Tahapan berikutnya"
        onClick={onNext}
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </button>
    </div>
  );
}

export function RecoveryStagesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollStages(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector<HTMLElement>("[data-stage-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 340;
    const gap = 20;

    carousel.scrollBy({
      behavior: "smooth",
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
    });
  }

  return (
    <section id="tahapan-recovery" className="relative overflow-hidden bg-[#050505] px-5 pb-44 pt-24 text-white sm:px-6 sm:pb-52 sm:pt-28 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-72 justify-center">
        <svg
          aria-hidden="true"
          className="absolute bottom-[-54px] h-[300px] w-[880px] max-w-[104vw]"
          viewBox="0 0 880 300"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <defs>
            <radialGradient id="moon-glow" cx="50%" cy="69%" r="45%">
              <stop offset="0%" stopColor="white" stopOpacity="0.24" />
              <stop offset="38%" stopColor="white" stopOpacity="0.08" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="moon-rim" x1="176" x2="704" y1="194" y2="194" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="23%" stopColor="white" stopOpacity="0.34" />
              <stop offset="50%" stopColor="white" stopOpacity="0.9" />
              <stop offset="77%" stopColor="white" stopOpacity="0.34" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <filter id="moon-soft-light" x="112" y="56" width="656" height="250" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          <ellipse cx="440" cy="248" rx="292" ry="86" fill="url(#moon-glow)" />
          <path d="M132 300A360 360 0 0 1 748 300L748 300H132Z" fill="black" fillOpacity="0.96" />
          <path
            d="M132 300A360 360 0 0 1 748 300"
            stroke="white"
            strokeOpacity="0.28"
            strokeWidth="15"
            filter="url(#moon-soft-light)"
            strokeLinecap="round"
          />
          <path d="M132 300A360 360 0 0 1 748 300" stroke="url(#moon-rim)" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
          <div>
            <SectionBadge icon={FileUp} variant="dark">
              Tahapan Recovery
            </SectionBadge>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.1] tracking-normal text-white sm:text-4xl lg:text-5xl">
              Prosedur recovery presisi dari krisis hingga pemulihan.
            </h2>
          </div>

          <div className="text-left lg:pt-3 lg:text-right">
            <p className="ml-auto max-w-xl text-lg leading-7 text-zinc-400">
              Kami mengikuti protokol kerja ketat untuk memastikan data, bukti, dan sistem recovery bergerak dalam
              urutan yang tepat tanpa menambah risiko pada lingkungan yang sedang kritis.
            </p>
            <CarouselControls onNext={() => scrollStages("next")} onPrevious={() => scrollStages("previous")} />
          </div>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050505] to-transparent" />
        <div
          ref={carouselRef}
          className="scrollbar-hide snap-x snap-mandatory scroll-smooth overflow-x-auto px-5 pb-2 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          <div className="flex gap-5">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div key={stage.number} className="shrink-0">
                  <article
                    id={`stage-card-${Number(stage.number.replace("#", ""))}`}
                    data-stage-card
                    className="min-h-[290px] w-[300px] shrink-0 scroll-ml-5 snap-start rounded-[22px] border border-white/10 bg-[#171717] p-5 shadow-2xl shadow-black/30 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#1d1d1d] sm:w-[340px]"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#242424]">
                        <Icon aria-hidden="true" className="h-5 w-5 text-red-500" strokeWidth={1.8} />
                      </span>
                      <span className="font-mono text-xl font-medium text-zinc-300">{stage.number}</span>
                    </div>
                    <div className="mt-20">
                      <h3 className="text-xl font-medium leading-tight text-white">{stage.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-zinc-400">{stage.description}</p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-10 flex justify-center">
        <a href="#kontak" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500">
          Coba Recovery
        </a>
      </div>
    </section>
  );
}
