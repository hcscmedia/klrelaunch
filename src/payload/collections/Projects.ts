import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: { singular: "Projekt", plural: "Projekte" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "year", "status", "featured"],
    group: "Content",
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, label: "Projekttitel" },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "URL-Pfad, z.B. 'ecommerce-ki'" },
    },
    {
      name: "category",
      type: "text",
      required: true,
      label: "Kategorie",
      admin: { description: "z.B. 'Web App · KI'" },
    },
    { name: "client", type: "text", label: "Kunde (optional)" },
    { name: "year", type: "number", required: true, label: "Jahr" },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "Live", value: "live" },
        { label: "Intern", value: "intern" },
        { label: "Archiviert", value: "archived" },
      ],
      defaultValue: "live",
    },
    { name: "tagline", type: "text", required: true, label: "Tagline / Hauptergebnis" },
    { name: "description", type: "textarea", required: true, label: "Kurzbeschreibung" },
    { name: "challenge", type: "textarea", label: "Die Herausforderung" },
    { name: "solution", type: "textarea", label: "Die Lösung" },
    {
      name: "results",
      type: "array",
      label: "Ergebnisse / Metriken",
      fields: [
        { name: "metric", type: "text", required: true, label: "Bezeichnung" },
        { name: "value", type: "text", required: true, label: "Wert (z.B. +240%)" },
        { name: "description", type: "text", label: "Beschreibung" },
      ],
    },
    {
      name: "tech",
      type: "array",
      label: "Tech Stack",
      fields: [{ name: "name", type: "text", required: true }],
    },
    {
      name: "deliverables",
      type: "array",
      label: "Deliverables",
      fields: [{ name: "item", type: "text", required: true }],
    },
    { name: "liveUrl", type: "text", label: "Live-URL (optional)" },
    { name: "duration", type: "text", label: "Projektdauer" },
    { name: "featured", type: "checkbox", label: "Featured (Startseite)", defaultValue: false },
    {
      name: "images",
      type: "array",
      label: "Projektbilder",
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "caption", type: "text", label: "Bildunterschrift" },
      ],
    },
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text", label: "Meta Title" },
        { name: "description", type: "textarea", label: "Meta Description" },
      ],
    },
  ],
};
