export default function sitemap() {
  return [
    {
      url: "https://marc-estassy-bataba.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://marc-estassy-bataba.vercel.app/#projects",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://marc-estassy-bataba.vercel.app/#skills",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://marc-estassy-bataba.vercel.app/#experiences",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://marc-estassy-bataba.vercel.app/#contact",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
  ];
}
