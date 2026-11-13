import { waLink, waMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

/** Tombol WhatsApp mengambang, tampil di seluruh halaman. */
export function WhatsappFloat() {
  return (
    <a
      href={waLink(waMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-green px-4 py-3 text-[#07130a] shadow-lg shadow-green/30 transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#07130a]/25 [animation-duration:2.4s]" />
        <WhatsappIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:block">Konsultasi</span>
    </a>
  );
}
