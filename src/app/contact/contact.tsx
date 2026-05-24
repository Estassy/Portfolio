"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy } from "lucide-react";
import { LINKS } from "../links/linksData";
import { useLang } from "../i18n/LangContext";
import Toast from "../components/Toast";

const EMAIL = "marcbataba99@gmail.com";

function Contact() {
  const { t } = useLang();
  const [toastVisible, setToastVisible] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);
    } catch {
      // Fallback for browsers without clipboard API
      window.open(`mailto:${EMAIL}`);
    }
  };

  return (
    <>
      <Toast message={t.contact.copied} visible={toastVisible} />
      <section id="contact" className="scroll-mt-24 py-8 sm:py-12 md:py-16">
        <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold">{t.contact.title}</h2>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6">
          <p className="text-sm sm:text-base text-neutral-300">{t.contact.body}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Email: mailto link + copy button */}
            <div className="flex w-full sm:w-auto items-center gap-1">
              <a
                href={LINKS.email}
                className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-l-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">{EMAIL}</span>
                <span className="sm:hidden">{t.contact.email}</span>
              </a>
              <button
                onClick={copyEmail}
                id="copy-email-btn"
                title={t.contact.copyEmail ?? "Copier l'email"}
                aria-label={t.contact.copyEmail ?? "Copier l'email"}
                className="inline-flex items-center justify-center rounded-r-full border border-l-0 border-neutral-700 px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-indigo-400 transition-colors"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition-colors"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition-colors"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;