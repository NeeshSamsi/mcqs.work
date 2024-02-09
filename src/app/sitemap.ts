import { type MetadataRoute } from "next"
import { url } from "@/lib/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
}
