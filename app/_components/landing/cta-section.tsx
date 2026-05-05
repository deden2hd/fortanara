import { ArrowRight, Upload } from "lucide-react";
import { Reveal } from "./motion-primitives";

export function CTASection() {
  return (
    <section id="kontak" className="bg-white px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#080808] px-6 py-20 text-center text-white shadow-[0_28px_100px_rgba(15,23,42,0.18)] sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.32),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,rgba(220,38,38,0.12))]" />
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />
          <div className="relative mx-auto max-w-4xl">
            <p className="text-2xl font-medium tracking-tight text-white">Fortamira</p>
            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-medium leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Siap mengambil kembali kendali keamanan digital Anda?
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#kontak"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href="#upload-sample"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-center text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 sm:w-auto"
              >
                <Upload aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                <span>Upload Sample</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
