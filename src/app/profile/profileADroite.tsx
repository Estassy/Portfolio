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
                <div className="mt-1 text-xs text-green-400">Erasmus | TalTech, Estonie | Sept 2023 - Janv 2024</div>
              </li>

              <li>
                <div className="font-medium text-white">Licence : Informatique</div>
                <div className="mt-1 text-xs text-neutral-400">Université Aix-Marseille, UFR Sciences, MIAGE | 2020 - 2023</div>
              </li>
            </ul>
          </div>
        )}

        {tab === "highlights" && (
          <div>
            <p className="mb-2 font-semibold text-neutral-200">Faits marquants</p>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm">Mobilit&eacute; acad&eacute;mique en Estonie (TalTech) — cours en anglais</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="text-sm">Mission client prestigieux (La Fran&ccedil;aise des Jeux)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span className="text-sm">Sp&eacute;cialis&eacute; CI/CD et m&eacute;thodologie Agile SAFe</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-sm">Polyvalent : Java/Spring, Angular/React, Python</span>
              </li>
            </ul>
            <div className="mt-4">
              <SmoothLink targetId="experiences" className="inline-flex items-center text-sm text-neutral-200 hover:text-white">
                Voir le d&eacute;tail de mes exp&eacute;riences →
              </SmoothLink>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default PanelWithTabs;
