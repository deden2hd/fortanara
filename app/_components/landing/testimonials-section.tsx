import { ArrowRight, MessageSquareQuote, Star } from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Reveal, StaggerItem, StaggerReveal } from "./motion-primitives";

const avatars = ["DH", "MA", "RS", "CT"];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-5 py-24 text-zinc-950 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] lg:gap-10">
          <div>
            <SectionBadge icon={MessageSquareQuote} variant="light">
              Testimonials
            </SectionBadge>
            <h2 className="mt-7 max-w-3xl text-3xl font-medium leading-[1.1] tracking-normal text-zinc-950 sm:text-4xl lg:text-5xl">
              Kepercayaan yang kami tanamkan terhadap klien.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-7 text-zinc-600 lg:ml-auto lg:pt-20">
            Dengarkan bagaimana mitra bisnis kami merasakan kendali dan ketenangan melalui solusi recovery, pentest,
            dan respons insiden yang terstruktur bersama tim Fortanara.
          </p>
        </Reveal>

        <StaggerReveal className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.55fr_0.8fr]">
          <StaggerItem>
          <article className="rounded-[28px] border border-zinc-200 bg-[#191514] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
            <p className="text-6xl font-medium leading-none">98%</p>
            <p className="mt-8 text-sm leading-6 text-zinc-300">
              Klien merasa lebih siap menghadapi insiden setelah mendapatkan assessment, rencana pemulihan, dan
              rekomendasi prioritas dari Fortanara.
            </p>
            <div className="mt-12 flex -space-x-3">
              {avatars.map((avatar) => (
                <span
                  key={avatar}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#191514] bg-zinc-100 text-xs font-semibold text-zinc-900"
                >
                  {avatar}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-red-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" strokeWidth={1.8} />
              ))}
            </div>
            <p className="mt-2 text-sm text-zinc-300">4.8 dari Review Customer</p>
          </article>
          </StaggerItem>

          <StaggerItem>
          <article className="relative rounded-[28px] border border-zinc-200 bg-zinc-50 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
            <span className="absolute right-10 top-4 text-[120px] font-medium leading-none text-zinc-200">&ldquo;</span>
            <p className="relative max-w-3xl text-2xl font-medium leading-snug text-zinc-900">
              Laporan pentest dari Fortanara bukan sekadar daftar bug. Mereka memberikan analisis risiko yang strategis
              dan actionable. Kami berhasil menutup celah kritis sebelum produk kami masuk ke pasar global.
            </p>
            <div className="mt-20 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">
                  DH
                </span>
                <div>
                  <p className="text-lg font-medium text-zinc-950">Dazzle Hadler</p>
                  <p className="mt-1 text-sm text-zinc-500">Head of Engineering, Unicorn Tech Startup</p>
                </div>
              </div>
              <button
                type="button"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-950 transition-colors hover:border-zinc-950"
                aria-label="Testimonial berikutnya"
              >
                <ArrowRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </article>
          </StaggerItem>

          <StaggerItem>
          <article className="rounded-[28px] border border-red-100 bg-red-50 p-6 shadow-[0_24px_80px_rgba(220,38,38,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(220,38,38,0.12)]">
            <p className="text-sm font-medium text-red-500">Risk reduction</p>
            <div className="mt-8 h-28">
              <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 110" fill="none">
                <path
                  d="M4 22C31 15 41 70 69 64C94 59 94 30 119 40C147 51 150 89 179 72C201 59 204 24 231 44C244 54 249 84 256 68"
                  stroke="#ef4444"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="mt-7 text-6xl font-medium leading-none text-red-600">-93%</p>
            <p className="mt-6 text-sm leading-6 text-red-950/70">
              Hasil nyata dari implementasi best-practice keamanan informasi: risiko eksploitasi berkurang signifikan
              dalam siklus perbaikan pertama.
            </p>
          </article>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
