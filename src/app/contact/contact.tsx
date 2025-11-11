import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "../links/linksData";



function Contact() {
    return <>
    <section id="contact" className="scroll-mt-24 py-16">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact</h2>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
        <p className="text-neutral-300">
          Discutons d’un projet, d’une opportunité ou d’une collab. Écris‑moi directement :
        </p>
        <div className="mt-4 flex items-center gap-3">
          <a href={LINKS.email} className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Mail className="mr-2 h-4 w-4" /> marcbataba99@gmail.com
          </a>
          <a href={LINKS.linkedin} className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
          <a href={LINKS.github} className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  </>
}
export default Contact;