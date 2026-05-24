"use client";

import { useState } from "react";
import TabButton from "../components/TabButton";
import { motion } from "framer-motion";
import SmoothLink from "../components/SmoothLink";
import { useLang } from "../i18n/LangContext";

function PanelWithTabs() {
  const [tab, setTab] = useState<string>("diplomas");
  const { t } = useLang();

  return (
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <TabButton active={tab === "diplomas"} onClick={() => setTab("diplomas")}>
          {t.tabs.diplomas}
        </TabButton>
        <TabButton active={tab === "langues"} onClick={() => setTab("langues")}>
          {t.tabs.languages}
        </TabButton>
        <TabButton active={tab === "objective"} onClick={() => setTab("objective")}>
          {t.tabs.objective}
        </TabButton>
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.28 }}
        className="mt-3 rounded-lg bg-neutral-900 p-4 text-sm text-neutral-300"
      >
        {tab === "objective" && (
          <div>
            <p className="mb-2 font-semibold text-neutral-200">{t.tabs.objectiveTitle}</p>
            <p>{t.tabs.objectiveText}</p>
            <div className="mt-3 flex gap-2">
              <SmoothLink targetId="contact" className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-neutral-900">
                {t.tabs.contactMe}
              </SmoothLink>
            </div>
          </div>
        )}

        {tab === "diplomas" && (
          <div>
            <p className="mb-2 font-semibold text-neutral-200">{t.tabs.diplomasTitle}</p>
            <ul className="space-y-3 text-neutral-300">
              <li>
                <div className="font-medium text-white">{t.tabs.masterTitle}</div>
                <div className="mt-1 text-xs text-neutral-400">{t.tabs.masterSchool}</div>
                <div className="mt-1 text-xs text-green-400">{t.tabs.masterErasmus}</div>
              </li>
              <li>
                <div className="font-medium text-white">{t.tabs.licenceTitle}</div>
                <div className="mt-1 text-xs text-neutral-400">{t.tabs.licenceSchool}</div>
              </li>
            </ul>
          </div>
        )}

        {tab === "langues" && (
          <div>
            <p className="mb-3 font-semibold text-neutral-200">{t.tabs.langTitle}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">{t.tabs.langLevel}</div>
                <div className="text-xs text-green-400">{t.tabs.langValidated}</div>
                <div className="text-xs text-neutral-400">{t.tabs.langCourse}</div>
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
                <span className="font-medium">{t.tabs.langXp}</span> {t.tabs.langXpDetail}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default PanelWithTabs;
