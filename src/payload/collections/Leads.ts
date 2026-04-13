import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  labels: { singular: "Lead / Anfrage", plural: "Leads & Anfragen" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "subject", "status", "createdAt"],
    group: "CRM",
  },
  access: {
    create: () => true,   // Public (contact form)
    read: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: "name", type: "text", required: true, label: "Name" },
    { name: "email", type: "email", required: true, label: "E-Mail" },
    { name: "company", type: "text", label: "Unternehmen" },
    {
      name: "subject",
      type: "select",
      label: "Betreff",
      options: [
        { label: "Webentwicklung / Projekt", value: "webdev" },
        { label: "KI-Beratung", value: "ki" },
        { label: "Online Transformation", value: "transformation" },
        { label: "Shop / Digitale Produkte", value: "shop" },
        { label: "Sonstiges", value: "other" },
      ],
    },
    { name: "message", type: "textarea", required: true, label: "Nachricht" },
    { name: "source", type: "text", label: "Quelle (URL)", admin: { readOnly: true } },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "Neu", value: "new" },
        { label: "Gelesen", value: "read" },
        { label: "Beantwortet", value: "replied" },
        { label: "Archiviert", value: "archived" },
      ],
      defaultValue: "new",
      admin: { position: "sidebar" },
    },
    { name: "notes", type: "textarea", label: "Interne Notizen", admin: { position: "sidebar" } },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          data.status = "new";
        }
        return data;
      },
    ],
  },
};
