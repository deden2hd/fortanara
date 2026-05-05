import Image from "next/image";
import { ShieldCheck, Upload } from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Reveal } from "./motion-primitives";

function HeroBadge() {
  return (
    <SectionBadge icon={ShieldCheck} variant="dark" className="mx-auto">
      Top Security Indonesia
    </SectionBadge>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-[30px] bg-gradient-to-r from-white/35 via-white/10 to-white/25 p-px shadow-2xl shadow-black/40">
      <div className="relative overflow-hidden rounded-[29px] bg-[#080808] p-3">
        <Image
          src="/images/hero-section.png"
          alt="Fortanara security operations center monitoring cybersecurity recovery"
          width={1600}
          height={900}
          priority
          className="aspect-[16/9] w-full rounded-[22px] object-cover"
        />
        <div className="pointer-events-none absolute inset-x-3 bottom-3 h-1/3 rounded-b-[22px] bg-gradient-to-t from-black/45 to-transparent" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[72rem] -translate-x-1/2 rounded-full bg-red-600/14 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_50%_100%,rgba(220,38,38,0.22),transparent_62%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 text-center sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <Reveal>
          <HeroBadge />
          <h1 className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-medium leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            Solusi Cyber Security Terintegrasi untuk Keamanan
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            Kami melindungi aset digital bisnis Anda dari ancaman cyber global. Mulai dari pemulihan data pasca serangan
            hingga kepatuhan standar internasional. Kami adalah mitra keamanan IT terpercaya Anda.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kontak"
              className="w-full rounded-lg bg-red-600 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-lg hover:shadow-red-950/30 sm:w-auto"
            >
              Konsultasi Sekarang
            </a>
            <a
              href="#upload-sample"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.04] sm:w-auto"
            >
              <Upload aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              <span>Upload Sample</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
