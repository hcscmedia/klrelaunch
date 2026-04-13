import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Products: CollectionConfig = {
  slug: "products",
  labels: { singular: "Produkt", plural: "Produkte" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "price", "status"],
    group: "Shop",
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, label: "Produktname" },
    { name: "slug", type: "text", required: true, unique: true, label: "Slug" },
    { name: "tagline", type: "text", required: true, label: "Tagline" },
    {
      name: "type",
      type: "select",
      required: true,
      label: "Produkttyp",
      options: [
        { label: "Template / Code", value: "template" },
        { label: "Video-Kurs", value: "course" },
        { label: "PDF / Workbook", value: "pdf" },
        { label: "Dokumentenpaket", value: "document" },
      ],
    },
    { name: "format", type: "text", label: "Format (z.B. 'ZIP + GitHub Repo')" },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
      label: "Beschreibung",
    },
    { name: "price", type: "number", required: true, label: "Preis (€)" },
    { name: "originalPrice", type: "number", label: "Originalpreis (für Durchstreichung)" },
    {
      name: "includes",
      type: "array",
      label: "Enthält (Features)",
      fields: [{ name: "item", type: "text", required: true }],
    },
    {
      name: "forWhom",
      type: "array",
      label: "Für wen?",
      fields: [{ name: "item", type: "text", required: true }],
    },
    { name: "badge", type: "text", label: "Badge (z.B. 'Bestseller', 'Neu')" },
    { name: "stripeProductId", type: "text", label: "Stripe Product ID" },
    { name: "stripePriceId", type: "text", label: "Stripe Price ID" },
    { name: "downloadUrl", type: "text", label: "Download-URL (nach Kauf)" },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      label: "Produktbild",
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "Aktiv", value: "active" },
        { label: "Entwurf", value: "draft" },
        { label: "Archiviert", value: "archived" },
      ],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
    { name: "featured", type: "checkbox", label: "Featured", defaultValue: false },
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
