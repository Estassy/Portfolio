export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://marc-estassy-bataba.vercel.app/sitemap.xml",
  };
}
