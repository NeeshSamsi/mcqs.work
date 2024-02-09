import { MetadataRoute } from "next"
import { url } from "@/lib/config"

const sitemap: MetadataRoute.Sitemap = [
  {
    url: `${url}/`,
    lastModified: new Date(),
  },
  {
    url: "${url}/new",
    lastModified: new Date(),
  },
  {
    url: "${url}/session",
    lastModified: new Date(),
  },
]

export default sitemap
