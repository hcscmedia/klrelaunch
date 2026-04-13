import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  labels: { singular: "Blog-Artikel", plural: "Blog-Artikel" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedAt", "status", "featured"],
    group: "Content",
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return { status: { equals: "published" } };
    },
  },
  fields: [
    { name: "title", type: "text", required: true, label: "Titel" },
    { name: "slug", type: "text", required: true, unique: true, label: "Slug" },
    { name: "excerpt", type: "textarea", required: true, label: "Zusammenfassung (für Listen + SEO)" },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
      label: "Artikel-Inhalt",
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: "Kategorie",
      options: [
        { label: "Webentwicklung", value: "webentwicklung" },
        { label: "KI-Strategie", value: "ki-strategie" },
        { label: "KI", value: "ki" },
        { label: "TypeScript", value: "typescript" },
        { label: "CMS", value: "cms" },
        { label: "Recht & Tools", value: "recht-tools" },
        { label: "Business", value: "business" },
      ],
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [{ name: "tag", type: "text", required: true }],
    },
    { name: "readTime", type: "number", label: "Lesezeit (Minuten)" },
    { name: "publishedAt", type: "date", label: "Veröffentlichungsdatum" },
    { name: "featured", type: "checkbox", label: "Featured-Artikel", defaultValue: false },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: "Cover-Bild",
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "Entwurf", value: "draft" },
        { label: "Veröffentlicht", value: "published" },
      ],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text", label: "Meta Title" },
        { name: "description", type: "textarea", label: "Meta Description" },
        { name: "ogImage", type: "upload", relationTo: "media", label: "OG Image" },
      ],
    },
  ],
  versions: { drafts: true },
};
