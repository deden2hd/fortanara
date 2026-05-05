import { ArrowRight, DatabaseBackup, RotateCcw, ShieldCheck } from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Reveal, StaggerItem, StaggerReveal } from "./motion-primitives";

const recoverySteps = [
  {
    title: "Forensic Analysis",
    description:
      "Identifikasi payload dari varian ransomware LockBit, BlackCat, Phobos, dan indikasi awal untuk memastikan kunci pemulihan yang tepat.",
  },
  {
    title: "02 System Hardening",
    description:
      "Proses dekripsi dilakukan setelah lingkungan berhasil distabilkan untuk menjaga integritas data dan mencegah reinfeksi.",
  },
  {
    title: "03 Safe Decryption & Initial Access Closure",
    description:
      "Kami menutup celah masuk awal agar serangan serupa tidak berulang setelah sistem kembali pulih.",
  },
];

function RecoveryVisual() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(244,244,245,0.9),rgba(39,39,42,0.18)_45%,rgba(239,68,68,0.3))]" />
        <div className="absolute left-8 top-10 h-40 w-56 rotate-[-10deg] rounded-2xl border border-white/20 bg-white/70 shadow-2xl" />
        <div className="absolute left-24 top-20 h-44 w-64 rotate-[8deg] rounded-2xl border border-zinc-300/60 bg-zinc-200/80 shadow-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-8 left-7 rounded-2xl bg-black/20 p-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600/90">
              <RotateCcw aria-hidden="true" className="h-5 w-5 text-white" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Recovery Progress</p>
              <p className="mt-1 text-xs text-zinc-200">Saving Recovery</p>
            </div>
          </div>
          <p className="mt-3 font-mono text-sm text-white">70.3 GB / 91.4 GB</p>
        </div>

        <div className="absolute right-6 top-16 w-[260px] rounded-[22px] border border-zinc-200 bg-white p-6 shadow-2xl sm:right-10">
          <p className="text-lg font-medium text-zinc-950">Recovery System</p>
          <div className="relative mx-auto mt-7 h-32 w-44">
            <div className="absolute inset-x-0 top-0 h-24 rounded-t-full border-[14px] border-b-0 border-red-100" />
            <div className="absolute inset-x-0 top-0 h-24 rounded-t-full border-[14px] border-b-0 border-red-600 [clip-path:inset(0_18%_0_0)]" />
            <div className="absolute inset-x-0 bottom-1 text-center text-4xl font-medium text-zinc-950">84%</div>
          </div>
          <a href="#kontak" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600">
            Safe Recovery Details
            <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function RecoverySection() {
  return (
    <section id="pendekatan-recovery" className="bg-white px-5 pb-24 pt-8 text-zinc-950 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)]">
          <div>
            <p className="max-w-xl text-lg lg:pt-18 leading-7 text-zinc-600">
              Fortanara pulih dengan respons cepat, recovery terukur, dan sistem yang keluar lebih kuat dari sebelumnya
              menggunakan pendekatan forensik terstruktur di setiap tahap.
            </p>
          </div>

          <div>
            <SectionBadge icon={RotateCcw} variant="light">
              Pendekatan Recovery
            </SectionBadge>
            <h2 className="mt-7 max-w-4xl text-3xl font-medium leading-[1.1] tracking-normal text-zinc-950 sm:text-4xl lg:text-5xl">
              Kami Pulihkan Sistematis. Berbasis Forensik. Tanpa Panik.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)]">
          <Reveal>
            <RecoveryVisual />
          </Reveal>

          <StaggerReveal className="divide-y divide-zinc-200 border-y border-zinc-200">
            {recoverySteps.map((step, index) => (
              <StaggerItem key={step.title}>
              <div className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100">
                  {index === 0 ? (
                    <DatabaseBackup aria-hidden="true" className="h-5 w-5 text-red-600" strokeWidth={1.8} />
                  ) : (
                    <ShieldCheck aria-hidden="true" className="h-5 w-5 text-zinc-700" strokeWidth={1.8} />
                  )}
                </span>
                <div>
                  <h3 className="text-xl font-medium leading-tight text-zinc-950">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">{step.description}</p>
                </div>
              </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
