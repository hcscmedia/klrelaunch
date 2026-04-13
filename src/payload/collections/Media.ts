import type { CollectionConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Medium", plural: "Medien" },
  admin: {
    group: "System",
  },
  access: { read: () => true },
  upload: {
    staticDir: path.resolve(__dirname, "../../../public/media"),
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre", fit: "cover" },
      { name: "card", width: 768, height: 512, position: "centre", fit: "cover" },
      { name: "og", width: 1200, height: 630, position: "centre", fit: "cover" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "video/mp4", "application/pdf"],
  },
  fields: [
    { name: "alt", type: "text", required: true, label: "Alt-Text (Barrierefreiheit & SEO)" },
    { name: "caption", type: "text", label: "Bildunterschrift" },
  ],
};
