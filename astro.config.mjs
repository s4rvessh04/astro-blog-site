import { defineConfig } from "astro/config";
import fs from "fs";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import remarkUnwrapImages from "remark-unwrap-images";
import partytown from "@astrojs/partytown";
// @ts-ignore:next-line
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

function rawFonts(ext) {
  return {
    name: "vite-plugin-raw-fonts",
    // @ts-ignore:next-line
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://blog-sarvessh.vercel.app/",
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    remarkRehype: {
      footnoteLabelProperties: {
        className: [""]
      }
    },
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  integrations: [mdx({}), tailwind({
    applyBaseStyles: false
  }), sitemap(), prefetch(), partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),],
  vite: {
    plugins: [rawFonts([".ttf"])],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});