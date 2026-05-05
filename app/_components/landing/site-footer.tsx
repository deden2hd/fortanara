import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, StaggerItem, StaggerReveal } from "./motion-primitives";

const serviceLinks = ["Incident Response", "Ransomware Recovery", "Penetration Testing", "Security Hardening"];
const resourceLinks = ["Insight Keamanan", "Studi Kasus", "Panduan Recovery", "FAQ"];
const companyLinks = ["Tentang Kami", "Portofolio", "Karier", "Kontak"];

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-medium text-white">{title}</p>
      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="block text-sm leading-6 text-zinc-500 transition-colors hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(127,29,29,0.28),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(69,10,10,0.42),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[54rem] -translate-x-1/2 rounded-full bg-red-950/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <StaggerReveal className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
          <StaggerItem>
          <div>
            <p className="text-2xl font-medium tracking-tight">Fortanara</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              Fortanara membantu perusahaan menghadapi insiden siber dengan tenang: mulai dari triase awal, analisis
              forensik, pemulihan data, sampai penguatan sistem agar bisnis dapat kembali berjalan dengan lebih aman.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-zinc-500">
              <a href="mailto:response@fortanara.id" className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail aria-hidden="true" className="h-4 w-4 text-red-500" strokeWidth={1.8} />
                response@fortanara.id
              </a>
              <a href="tel:+622150988101" className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone aria-hidden="true" className="h-4 w-4 text-red-500" strokeWidth={1.8} />
                +62 21 5098 8101
              </a>
              <p className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-4 w-4 text-red-500" strokeWidth={1.8} />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
          </StaggerItem>

          <StaggerItem>
            <FooterColumn title="Layanan" links={serviceLinks} />
          </StaggerItem>
          <StaggerItem>
            <FooterColumn title="Resource" links={resourceLinks} />
          </StaggerItem>
          <StaggerItem>
            <FooterColumn title="Perusahaan" links={companyLinks} />
          </StaggerItem>
        </StaggerReveal>

        <Reveal className="mt-14 grid gap-5 border-y border-white/10 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-lg font-medium text-white">Butuh respons cepat untuk insiden aktif?</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Kirim kronologi singkat, status sistem terdampak, dan kontak teknis. Tim kami akan membantu menentukan
              langkah pertama yang paling aman.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-red-600 py-3 pl-5 pr-4 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            Konsultasi Darurat
            <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2026 Fortanara. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>ISO 27001-ready advisory</span>
            <span>Forensic-led recovery</span>
            <span>Confidential incident handling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
