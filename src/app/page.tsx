import ClientShell from "./ClientShell";

/**
 * Pure Server Component — no "use client".
 * Next.js prerenders this on the server so all content is in the HTML
 * that Google crawls, even before JavaScript runs.
 *
 * JSON-LD structured data is injected here (server-side) for rich Google
 * results when someone searches "Marc Estassy BATABA".
 */
export default function Portfolio() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marc Estassy BATABA",
    jobTitle: "Software Engineer – Java / Angular",
    description:
      "Software Engineer Full-Stack spécialisé en Java Spring Boot, Quarkus, React et Angular. Consultant chez Sogeti en mission France Travail.",
    url: "https://marc-estassy-bataba.vercel.app",
    sameAs: [
      "https://github.com/Estassy",
      "https://www.linkedin.com/in/marc-estassy-bataba",
    ],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Quarkus",
      "React",
      "Angular",
      "GraphQL",
      "DevOps",
      "CI/CD",
      "Agile",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Sogeti",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Université Aix-Marseille – MIAGE",
    },
  };

  return (
    <>
      {/* JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientShell />
    </>
  );
}