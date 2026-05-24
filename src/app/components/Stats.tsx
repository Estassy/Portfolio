import { motion } from "framer-motion";
import { Trophy, Users, Code, Calendar } from "lucide-react";
import Stat from "../stat/stat";
import { useLang } from "../i18n/LangContext";
import AnimatedNumber from "./AnimatedNumber";

function Stats() {
  const { t, lang } = useLang();

  return (
    <section className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
      >
        <Stat
          icon={<Calendar className="h-5 w-5" />}
          label={t.stats.experience}
          value={<><AnimatedNumber end={3} suffix="+" /> {lang === "fr" ? "ans" : "years"}</>}
        />
        <Stat
          icon={<Users className="h-5 w-5" />}
          label={t.stats.companies}
          value={<AnimatedNumber end={4} />}
        />
        <Stat
          icon={<Code className="h-5 w-5" />}
          label={t.stats.technologies}
          value={<><AnimatedNumber end={20} suffix="+" /></>}
        />
        <Stat
          icon={<Trophy className="h-5 w-5" />}
          label={t.stats.projects}
          value={<><AnimatedNumber end={10} suffix="+" /></>}
        />
      </motion.div>
    </section>
  );
}

export default Stats;