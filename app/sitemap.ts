

export default async function sitemap() {
  const routes = ["", "/about", "/projects", "/blog"].map((route) => ({
    url: `https://pranavteja.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
