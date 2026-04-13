import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonial", plural: "Testimonials" },
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "role", "rating", "approved"],
    group: "Content",
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return { approved: { equals: true } };
    },
  },
  fields: [
    { name: "text", type: "textarea", required: true, label: "Zitat" },
    { name: "author", type: "text", required: true, label: "Name" },
    { name: "role", type: "text", required: true, label: "Position & Unternehmen" },
    {
      name: "rating",
      type: "select",
      required: true,
      label: "Bewertung",
      options: ["1", "2", "3", "4", "5"].map((v) => ({ label: `${v} Sterne`, value: v })),
      defaultValue: "5",
    },
    { name: "approved", type: "checkbox", label: "Freigegeben", defaultValue: false },
    {
      name: "projectRef",
      type: "relationship",
      relationTo: "projects",
      label: "Zugehöriges Projekt (optional)",
    },
  ],
};
