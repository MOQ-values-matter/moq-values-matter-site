// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://moq-values-matter.github.io",
  base: "/moq-values-matter-site/",
  integrations: [
    starlight({
      title: "MOQ Values Matter",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MOQ-values-matter/moq-values-matter-site",
        },
      ],
      sidebar: [
        {
          label: "Fundamentals",
          autogenerate: { directory: "fundamentals" },
        },
        {
          label: "Value Atlas",
          items: [
            { label: "Overview", link: "/atlas/" },
            { label: "clusters", autogenerate: { directory: "atlas/clusters" } },
            { label: "Values", autogenerate: { directory: "atlas/values" } },
          ],
        },
        {
          label: "Essays",
          autogenerate: { directory: "essays" },
        },
      ],
    }),
  ],
});
