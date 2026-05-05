import { ArrowRight, Database, FileCheck2, Flame, PowerOff, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { SectionBadge } from "./section-badge";
import { Reveal, StaggerItem, StaggerReveal } from "./motion-primitives";

type ImpactCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
  iconBoxClassName: string;
};

const impactCards: ImpactCard[] = [
  {
    title: "Operasional Terhenti",
    description:
      "Sistem inti, endpoint, dan aplikasi bisnis bisa berhenti dalam hitungan menit saat akses dikunci oleh ransomware.",
    icon: PowerOff,
    iconClassName: "text-red-600",
    iconBoxClassName: "bg-red-50",
  },
  {
    title: "Kerugian Finansial",
    description:
      "Downtime, pemulihan darurat, kehilangan transaksi, dan potensi tebusan membuat biaya serangan cepat membesar.",
    icon: TrendingDown,
    iconClassName: "text-emerald-600",
    iconBoxClassName: "bg-emerald-50",
  },
  {
    title: "Risiko Kebocoran Data",
    description:
      "Data pelanggan, dokumen internal, dan kredensial dapat dieksfiltrasi sebelum sistem terenkripsi sepenuhnya.",
    icon: Database,
    iconClassName: "text-blue-600",
    iconBoxClassName: "bg-blue-50",
  },
  {
    title: "Kewajiban Kepatuhan",
    description:
      "Insiden perlu ditangani dengan bukti, timeline, dan laporan yang memadai untuk kebutuhan audit serta regulator.",
    icon: FileCheck2,
    iconClassName: "text-red-600",
    iconBoxClassName: "bg-red-50",
  },
];

function ImpactButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 ${className}`}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4 text-white" strokeWidth={2} />
    </a>
  );
}

export function AttackImpactSection() {
  return (
    <section id="dampak-serangan" className="bg-white px-5 py-24 text-zinc-950 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <SectionBadge icon={Flame} variant="light">
            Dampak Serangan
          </SectionBadge>
          <h2 className="mt-7 max-w-4xl text-3xl font-medium leading-[1.1] tracking-normal text-zinc-950 sm:text-4xl lg:text-5xl">
            Diserang ransomware, kami pulihkan secara sistematis tanpa panik.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-7 text-zinc-600">
            Serangan ransomware bukan hanya masalah file terenkripsi. Dampaknya menyentuh operasional, finansial,
            reputasi, dan kepatuhan. Fortanara membantu Anda mengambil keputusan cepat dengan proses pemulihan yang
            terukur.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ImpactButton href="#kontak" className="bg-red-600 hover:bg-red-500">
              Konsultasi Darurat
            </ImpactButton>
            <ImpactButton href="#layanan" className="bg-zinc-950 hover:bg-zinc-800">
              Pelajari Layanan
            </ImpactButton>
          </div>
        </Reveal>

        <StaggerReveal className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactCards.map((card) => {
            const Icon = card.icon;

            return (
              <StaggerItem key={card.title}>
              <article className="min-h-[300px] rounded-[24px] border border-zinc-200 bg-zinc-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconBoxClassName}`}>
                  <Icon aria-hidden="true" className={`h-6 w-6 ${card.iconClassName}`} strokeWidth={1.8} />
                </div>
                <div className="mt-20">
                  <h3 className="text-2xl font-medium leading-tight text-zinc-950">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">{card.description}</p>
                </div>
              </article>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
