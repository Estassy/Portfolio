import { useState } from "react";
import TabButton from "../components/TabButton";
import { motion } from "framer-motion";
import SmoothLink from "../components/SmoothLink";

function PanelWithTabs() {
  const [tab, setTab] = useState<string>("diplomas");

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TabButton active={tab === "diplomas"} onClick={() => setTab("diplomas")}>
          Diplômes
        </TabButton>
        <TabButton active={tab === "langues"} onClick={() => setTab("langues")}>
          Langues
        </TabButton>
        <TabButton active={tab === "objective"} onClick={() => setTab("objective")}>
          Objectif
        </TabButton>
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.28 }}
        className="mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-neutral-300"
      >
        {tab === "objective" && (
          <div>
            <p className="mb-2 font-semibold text-neutral-200">Objectif 2025</p>
            <p>Monter en comp&eacute;tence Cloud & IA en partant d&apos;un socle Full‑Stack robuste.</p>
            <div className="mt-3 flex gap-2">
              <SmoothLink targetId="contact" className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-neutral-900">
                Contactez‑moi
              </SmoothLink>
            </div>
          </div>
        )}

        {tab === "diplomas" && (
          <div>
            <p className="mb-3 font-semibold text-neutral-200">Diplômes</p>
            <ul className="space-y-4 text-neutral-300">
              <li>
                <div className="font-medium text-white">Master : Informatique - Ingénierie des données</div>
                <div className="mt-1 text-xs text-neutral-400">Université Aix-Marseille, MIAGE | 2023 - 2025</div>
                <div className="mt-1 text-xs text-green-400">Erasmus | TalTech, Estonie | Cursus intégralement en anglais | Sept 2023 - Janv 2024</div>
              </li>

              <li>
                <div className="font-medium text-white">Licence : Informatique</div>
                <div className="mt-1 text-xs text-neutral-400">Université Aix-Marseille, UFR Sciences, MIAGE | 2020 - 2023</div>
              </li>
            </ul>
          </div>
        )}

        {tab === "langues" && (
          <div>
            <p className="mb-3 font-semibold text-neutral-200">Anglais</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Niveau opérationnel</div>
                <div className="text-xs text-green-400">✓ Validé par Erasmus (TalTech, Estonie)</div>
                <div className="text-xs text-neutral-400">Cursus intégralement en anglais</div>
              </div>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-2 w-2 rounded-full bg-blue-500"></div>
                ))}
                <div className="h-2 w-2 rounded-full bg-neutral-600"></div>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-neutral-800 p-2">
              <div className="text-xs text-neutral-300">
                <span className="font-medium">Expérience :</span> 5 mois d&apos;études en environnement anglophone
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default PanelWithTabs;
