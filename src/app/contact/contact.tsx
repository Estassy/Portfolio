import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "../links/linksData";



function Contact() {
  return <>
    <section id="contact" className="scroll-mt-24 py-8 sm:py-12 md:py-16">
      <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold">Contact</h2>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6">
        <p className="text-sm sm:text-base text-neutral-300">
          Discutons d&apos;un projet, d&apos;une opportunité ou d&apos;une collab. Écris‑moi directement :
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={LINKS.email} className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Mail className="mr-2 h-4 w-4" /> <span className="hidden sm:inline">marcbataba99@gmail.com</span><span className="sm:hidden">Email</span>
          </a>
          <a href={LINKS.linkedin} className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
          <a href={LINKS.github} className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  </>
}
export default Contact;