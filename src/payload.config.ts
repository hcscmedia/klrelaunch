import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Projects } from "./payload/collections/Projects";
import { BlogPosts } from "./payload/collections/BlogPosts";
import { Products } from "./payload/collections/Products";
import { Testimonials } from "./payload/collections/Testimonials";
import { Leads } from "./payload/collections/Leads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— koellner.life Admin",
    },
    components: {},
  },
  collections: [
    Users,
    Media,
    Projects,
    BlogPosts,
    Products,
    Testimonials,
    Leads,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "fallback-secret-change-me",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? "",
    },
  }),
  sharp,
  plugins: [
    // Add plugins here when needed
  ],
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  ],
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  ],
});
