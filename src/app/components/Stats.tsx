import { motion } from "framer-motion";
import { Trophy, Users, Code, Calendar } from "lucide-react";
import Stat from "../stat/stat";

function Stats() {
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
                    label="Expérience"
                    value="2+ ans"
                />
                <Stat
                    icon={<Users className="h-5 w-5" />}
                    label="Entreprises"
                    value="3"
                />
                <Stat
                    icon={<Code className="h-5 w-5" />}
                    label="Technologies"
                    value="15+"
                />
                <Stat
                    icon={<Trophy className="h-5 w-5" />}
                    label="Projets"
                    value="10+"
                />
            </motion.div>
        </section>
    );
}

export default Stats;