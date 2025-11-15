"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { ExperiencesData } from "./experiencesData";
import SmoothLink from "../components/SmoothLink";

function Experiences() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experiences" className="scroll-mt-24 py-8 sm:py-12 md:py-16">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Expériences Professionnelles</h2>
        <p className="text-sm sm:text-base text-neutral-400">2+ ans d&apos;exp&eacute;rience en d&eacute;veloppement full‑stack, actuellement en CDI chez Sopra Steria.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 sm:left-4 md:left-8"></div>

        {ExperiencesData.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline dot */}
            <div className={`absolute left-1 top-6 rounded-full border-2 sm:border-4 border-neutral-900 bg-white sm:left-2 md:left-6 ${exp.isGrouped ? 'h-4 w-4 sm:h-5 sm:w-5 ring-2 ring-blue-500/30' : 'h-3 w-3 sm:h-4 sm:w-4'}`}></div>

            {/* Experience card */}
            <div className="ml-8 sm:ml-12 md:ml-20">
              <motion.div
                whileHover={{ y: -2 }}
                className={`rounded-2xl border ${exp.isGrouped ? 'border-blue-600/30 bg-gradient-to-br from-blue-950/20 to-neutral-900' : 'border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900'} p-6 shadow-lg transition-shadow hover:shadow-xl`}
              >
                {/* Header */}
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${exp.isGrouped ? 'bg-blue-600/20 text-blue-300 ring-1 ring-blue-600/30' : 'bg-neutral-800 text-neutral-300'}`}>
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.client && (
                      <div className="mt-1 text-sm text-neutral-500">
                        <span className="font-medium">Client :</span> {exp.client}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <div className="flex items-center gap-1 text-sm font-medium text-neutral-300">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="text-xs text-neutral-500">{exp.duration}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-neutral-300">{exp.description}</p>

                {/* Sub-experiences ou Missions selon le type */}
                {exp.isGrouped && exp.subExperiences ? (
                  <div className="mb-4 space-y-6">
                    {exp.subExperiences.map((subExp) => (
                      <div key={subExp.id} className="rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold text-white">{subExp.title}</h5>
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${subExp.type === 'CDI' ? 'bg-green-600/20 text-green-300 ring-1 ring-green-600/30' : 'bg-orange-600/20 text-orange-300 ring-1 ring-orange-600/30'}`}>
                              {subExp.type}
                            </span>
                          </div>
                          <div className="text-xs text-neutral-400">{subExp.period}</div>
                        </div>
                        <p className="mb-3 text-sm text-neutral-300">{subExp.description}</p>
                        <ul className="space-y-1">
                          {subExp.missions.map((mission, missionIdx) => (
                            <li key={missionIdx} className="flex items-start gap-2 text-sm text-neutral-300">
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-500"></span>
                              <span>{mission}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mb-4">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                      Missions & Réalisations
                    </h4>
                    <ul className="space-y-2">
                      {exp.missions?.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-500"></span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Points clés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-600/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <p className="mb-4 text-neutral-300">
            Intéressé par mon parcours ? Discutons de votre prochain projet.
          </p>
          <SmoothLink
            targetId="contact"
            className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white"
          >
            Contactez‑moi <ExternalLink className="ml-2 h-4 w-4" />
          </SmoothLink>
        </div>
      </motion.div>
    </section>
  );
}

export default Experiences;
