import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionBadge } from "./section-badge";

const faqs = [
  {
    question: "Apakah semua kasus ransomware bisa dipulihkan?",
    answer:
      "Tidak semua kasus memiliki kondisi yang sama. Kami perlu memeriksa varian ransomware, kondisi backup, tingkat kerusakan, dan bukti teknis sebelum menentukan peluang recovery yang aman.",
  },
  {
    question: "Berapa cepat tim Fortanara bisa merespons insiden?",
    answer:
      "Untuk kondisi darurat, tim kami membantu triase awal secepat mungkin agar sistem terdampak dapat diisolasi, risiko penyebaran ditekan, dan prioritas pemulihan bisa ditentukan.",
  },
  {
    question: "Apakah data perusahaan tetap rahasia selama proses analisis?",
    answer:
      "Ya. Proses analisis dilakukan dengan prinsip kerahasiaan, akses terbatas, dan penanganan bukti yang terkontrol agar data sensitif tetap terlindungi selama investigasi.",
  },
  {
    question: "Apa saja yang perlu disiapkan sebelum konsultasi?",
    answer:
      "Siapkan kronologi singkat insiden, sample file terenkripsi bila aman, ransom note, daftar sistem terdampak, status backup, dan kontak teknis yang memahami infrastruktur Anda.",
  },
  {
    question: "Apakah Fortanara hanya menangani recovery setelah serangan?",
    answer:
      "Tidak. Selain recovery dan respons insiden, Fortanara juga membantu pentest, hardening, audit keamanan, monitoring, dan pendampingan kepatuhan untuk mencegah insiden berulang.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white px-5 py-24 text-zinc-950 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,36%)_minmax(0,64%)] lg:gap-14">
          <div className="space-y-5">
            <SectionBadge icon={HelpCircle} variant="light">
              FAQ
            </SectionBadge>
            <div className="space-y-4">
              <h2 className="max-w-[440px] text-3xl font-medium leading-[1.1] tracking-normal text-zinc-950 sm:text-4xl lg:text-5xl">
                Pertanyaan yang paling sering muncul.
              </h2>
              <p className="max-w-[500px] text-lg leading-7 text-zinc-600">
                Jawaban singkat untuk membantu Anda memahami proses recovery, respons insiden, dan layanan keamanan
                Fortanara sebelum mengambil langkah berikutnya.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group relative z-10 rounded-xl border border-zinc-200 bg-white transition duration-200 hover:border-zinc-300"
                open={index === 0}
              >
                <summary className="flex w-full touch-manipulation cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-5 text-left text-[17px] font-medium leading-7 text-zinc-950 transition duration-200 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:text-lg">
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-zinc-950 transition duration-200 group-open:rotate-180"
                    strokeWidth={1.8}
                  />
                </summary>
                <div className="faq-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                      <p className="max-w-3xl text-[17px] font-normal leading-8 text-zinc-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
