import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Reveal, StaggerItem, StaggerReveal } from "./motion-primitives";

function AboutVisuals() {
  return (
    <StaggerReveal className="mt-14 grid gap-5 lg:grid-cols-[1.85fr_1fr]">
      <StaggerItem className="h-full">
        <article className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.14)]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.22),rgba(24,24,27,0.22)_42%,rgba(220,38,38,0.28))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.22),transparent_24%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="relative flex h-full min-h-[312px] flex-col justify-between">
            <div className="flex items-start justify-between gap-5">
              <p className="text-xl font-medium tracking-tight">Fortamira</p>
            </div>

            <div className="max-w-xl">
              <h3 className="text-3xl font-medium leading-tight text-white">Menyatukan kepercayaan dan keamanan tangguh</h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-300">
                Kami membantu organisasi membaca risiko, memperkuat sistem, dan menjaga operasional tetap siap menghadapi
                ancaman modern.
              </p>
            </div>
          </div>
        </article>
      </StaggerItem>

      <StaggerItem className="h-full">
        <article className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-red-950/40 bg-[#120506] text-white shadow-[0_24px_80px_rgba(127,29,29,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(127,29,29,0.22)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.22),transparent_42%)]" />
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/about-certificates.png"
              alt="Premium cybersecurity certification chips"
              width={900}
              height={506}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative mt-auto px-5 pb-6 pt-6">
            <h3 className="text-2xl font-medium leading-tight text-white">Didukung sertifikasi IT security internasional</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Metodologi kami mengacu pada praktik global agar setiap rekomendasi dapat diterapkan dengan jelas dan
              terukur.
            </p>
          </div>
        </article>
      </StaggerItem>
    </StaggerReveal>
  );
}

export function AboutSection() {
  return (
    <section id="tentang-kami" className="bg-white px-5 pb-24 pt-20 text-zinc-950 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)]">
          <div>
            <SectionBadge icon={Building2} variant="light">
              Tentang Kami
            </SectionBadge>
            <h2 className="mt-5 max-w-xl text-3xl font-medium leading-[1.1] tracking-normal text-zinc-950 sm:text-4xl lg:text-5xl">
              Benteng Digital untuk Masa Depan Bisnis Anda
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-7 text-zinc-600">
              Fortamira membantu perusahaan membangun postur keamanan yang tangguh melalui audit, monitoring,
              perlindungan endpoint, respons insiden, dan pendampingan kepatuhan. Setiap solusi dirancang agar tim
              Anda dapat bergerak cepat tanpa mengorbankan kontrol dan visibilitas.
            </p>
            <a
              href="#tentang-kami"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-red-600 py-2.5 pl-5 pr-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              <span>Selengkapnya</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-white" strokeWidth={2} />
            </a>
          </div>
        </Reveal>

        <AboutVisuals />
      </div>
    </section>
  );
}
