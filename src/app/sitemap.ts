import { MetadataRoute } from "next"

const sitemap: MetadataRoute.Sitemap = [
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
]

export default sitemap
