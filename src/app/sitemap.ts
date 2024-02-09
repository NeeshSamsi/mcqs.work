import { MetadataRoute } from "next"

export default [
  {
    url: "/",
    lastModified: new Date(),
  },
  {
    url: "/new",
    lastModified: new Date(),
  },
  {
    url: "/session",
    lastModified: new Date(),
  },
] satisfies MetadataRoute.Sitemap
