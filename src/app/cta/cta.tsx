import { FileDown, Mail } from "lucide-react";
import { LINKS } from "../links/linksData";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section id="cv" className="scroll-mt-24 py-8 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-4 sm:p-6 md:p-8"
      >
        <h3 className="text-lg sm:text-xl font-semibold">Télécharge mon CV et voyons un projet ensemble</h3>
        <p className="mt-2 max-w-prose text-sm sm:text-base text-neutral-300">
          Disponible pour des missions full‑stack, cloud et DevOps. J&apos;apprends vite et j&apos;adore livrer.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={LINKS.cv} className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white">
            <FileDown className="mr-2 h-4 w-4" /> Télécharger le CV
          </a>
          <a href={LINKS.email} className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Mail className="mr-2 h-4 w-4" /> Me contacter
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;