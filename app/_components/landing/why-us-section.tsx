import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Reveal, StaggerItem, StaggerReveal } from "./motion-primitives";

const reasons = [
  {
    title: "Global Standards",
    description:
      "Kami mendampingi audit mengacu pada ISO 27001, NIST, dan praktik keamanan global agar kontrol bisnis lebih matang.",
    className: "lg:col-span-1 lg:row-span-1",
    visual: "standards",
  },
  {
    title: "Proactive Defense",
    description:
      "Kami tidak menunggu serangan terjadi. Monitoring, hardening, dan threat review membantu menemukan risiko sebelum menjadi insiden.",
    className: "lg:col-span-1 lg:row-span-2",
    visual: "proactive",
  },
  {
    title: "Response Cepat 24/7",
    description:
      "Respons cepat untuk mengisolasi, menilai, dan memulihkan sistem yang tidak boleh berhenti terlalu lama.",
    className: "lg:col-span-1 lg:row-span-1",
    visual: "response",
  },
  {
    title: "Security-First Development",
    description:
      "Keamanan disisipkan sejak desain dan pengembangan agar produk siap menghadapi ancaman sejak hari pertama.",
    className: "lg:col-span-1 lg:row-span-1",
    visual: "development",
  },
  {
    title: "Human Intelligence",
    description:
      "Kombinasi keahlian analis, OSINT, dan pengalaman lapangan membantu membaca pola serangan yang sering luput dari otomatisasi.",
    className: "lg:col-span-1 lg:row-span-1",
    visual: "human",
  },
];

function BentoVisual({ type }: { type: string }) {
  if (type === "standards") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl bg-[#090909]">
        <Image
          src="/images/whyus-card1.png"
          alt="Global cybersecurity standards visual"
          width={720}
          height={420}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (type === "proactive") {
    return (
      <div className="relative h-full min-h-[410px] overflow-hidden rounded-2xl bg-[#090909]">
        <Image
          src="/images/whyus-card2.png"
          alt="Proactive cybersecurity defense visual"
          width={720}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (type === "response") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl bg-[#090909]">
        <Image
          src="/images/whyus-card3.png"
          alt="24/7 emergency response visual"
          width={720}
          height={420}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (type === "development") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl bg-[#090909]">
        <Image
          src="/images/whyus-card4.png"
          alt="Security-first development visual"
          width={720}
          height={420}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }


  return (
    <div className="relative h-44 overflow-hidden rounded-2xl bg-[#090909]">
      <Image
        src="/images/whyus-card5.png"
        alt="Human intelligence cybersecurity visual"
        width={720}
        height={420}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section id="kenapa-kami" className="bg-[#050505] px-5 py-24 text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionBadge icon={ShieldCheck} variant="dark">
            Kenapa Kami
          </SectionBadge>
          <h2 className="mx-auto mt-7 max-w-4xl text-3xl font-medium leading-[1.1] tracking-normal text-white sm:text-4xl lg:text-5xl">
            Kendalikan keamanan digital bersama ahli dari Fortanara.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-zinc-400">
            Dari respons darurat hingga penguatan sistem, Fortanara membantu bisnis mengambil kendali dengan proses
            yang jelas, bukti yang rapi, dan eksekusi yang tenang.
          </p>
        </Reveal>

        <StaggerReveal className="mt-16 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title} className={reason.className}>
            <article
              className="flex min-h-[320px] h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#121212]"
            >
              <BentoVisual type={reason.visual} />
              <div className="mt-auto px-6 pb-7 pt-7">
                <h3 className="text-2xl font-medium leading-tight text-white">{reason.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{reason.description}</p>
              </div>
            </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
