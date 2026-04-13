import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Benutzer", plural: "Benutzer" },
  admin: {
    useAsTitle: "email",
    group: "System",
  },
  auth: true,
  fields: [
    { name: "name", type: "text", label: "Name" },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      defaultValue: "editor",
      required: true,
      admin: { position: "sidebar" },
    },
  ],
};
