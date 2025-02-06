import { defineConfigWithTheme } from "vitepress";
import type { HeadConfig, TransformContext } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import { baseConfig } from "@shopware-docs/vitepress";
import ViteRequireContext from "@originjs/vite-plugin-require-context";
import { resolve } from "path";

import Inspect from "vite-plugin-inspect";
import liveReload from "vite-plugin-live-reload";

import {
  CssCleanup,
  baseCleanup,
  copyAdditionalAssets,
  createSitemap,
  storeRedirects,
  addOGImage,
  userCentricsHead,
} from "@shopware-docs/vitepress";
import navigation from "./navigation";

import {
  sections,
  embeds,
  similarArticles,
  versionSwitcher,
  colorCoding,
} from "./swag";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig.default,

  title: "Shopware – Meteor Design System",
  description:
    "Dive into the heart of Shopware's Design System – a comprehensive guide to our unified approach in crafting seamless commerce experiences.",
  srcDir: "src",
  srcExclude: [],

  rewrites: {},

  head: [
    // favicon
    ["link", { rel: "icon", type: "image/png", href: "/favicon.webp" }],
    ["link", { rel: "shortcut icon", href: "/favicon.webp" }],

    // disallow indexing
    //  ['meta', {name: 'robots', content: 'noindex'}],

    ...userCentricsHead({
      usercentrics: process.env.USERCENTRICS,
      gtm: "WJKMNPS",
    }),
  ],

  themeConfig: {
    ...navigation, // add sidebar and nav config
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `foundations` directory.
      "/foundations/": [
        {
          text: "Foundations",
          items: [
            {
              text: "Design Principles",
              link: "/foundations/",
            },
            {
              text: "Accessibility",
              link: "/foundations/accessibility",
            },
            {
              text: "Artifical Intelligence",
              collapsed: true,
              items: [
                {
                  text: "Human-AI-Interaction",
                  link: "/foundations/human-ai-interation",
                },
                {
                  text: "UX-Writing",
                  link: "/foundations/human-ai-ux-writing",
                },
              ],
            },
            {
              text: "Design",
              collapsed: true,
              items: [
                { text: "Colors", link: "/foundations/design/colors" },
                { text: "Images", link: "/foundations/design/images" },
              ],
            },
            {
              text: "Get involved",
              collapsed: true,
              items: [
                { text: "Contributions", link: "/foundations/contributions" },
              ],
            },
          ],
        },
      ],

      // This sidebar gets displayed when a user
      // is on `product-experience` directory.
      "/product-experience/": [
        {
          text: "Product Experience",
          items: [
            {
              text: "Content Experience",
              link: "/product-experience/content/",
            },
            {
              text: "Basics",
              link: "/product-experience/content/basics",
            },
            {
              text: "Inclusive Language",
              link: "/product-experience/content/inclusive-language",
            },
            {
              text: "Abbreviations and acronyms",
              link: "/product-experience/content/abbreviations-and-acronyms",
            },
            { text: "TL;DR", link: "/product-experience/content/tldr" },
          ],
        },
      ],
      // This sidebar gets displayed when a user
      // is on `tokens` directory.
      "/tokens/": [
        {
          text: "Tokens",
          items: [
            {
              text: "Color",
              link: "/tokens/color",
            },
            {
              text: "Font",
              link: "/tokens/font",
            },
            {
              text: "Border",
              link: "/tokens/border",
            }
          ],
        },
      ],
      // This sidebar gets displayed when a user
      // is on `get-started` directory.
      "/get-started/": [
        {
          text: "Get Started",
          items: [
            {
              text: "Get started",
              link: "/get-started/",
            },
            {
              text: "Meteor 101",
              link: "/get-started/meteor-101",
            },
            {
              text: "Contact us",
              link: "/get-started/contact-us",
            },
            {
              text: "License",
              link: "/get-started/license",
            },
          ],
        },
      ],
      // This sidebar gets displayed when a user
      // is on `meteor-components` directory.
      "/meteor-components/": [
        {
          text: "Components",
          items: [
            {
              text: "About",
              link: "/meteor-components/",
            },
            {
              text: "Form",
              collapsed: true,
              items: [
                {
                  text: "mt-field-label",
                  link: "/meteor-components/form/mt-field-label",
                },
                {
                  text: "mt-button",
                  link: "/meteor-components/form/mt-button",
                },
                {
                  text: "mt-checkbox",
                  link: "/meteor-components/form/mt-checkbox",
                },
                {
                  text: "mt-colorpicker",
                  link: "/meteor-components/form/mt-colorpicker",
                },
                {
                  text: "mt-datepicker",
                  link: "/meteor-components/form/mt-datepicker",
                },
                {
                  text: "mt-email-field",
                  link: "/meteor-components/form/mt-email-field",
                },
                {
                  text: "mt-help-text",
                  link: "/meteor-components/form/mt-help-text",
                },
                {
                  text: "mt-number-field",
                  link: "/meteor-components/form/mt-number-field",
                },
                {
                  text: "mt-password-field",
                  link: "/meteor-components/form/mt-password-field",
                },
                {
                  text: "mt-select",
                  link: "/meteor-components/form/mt-select",
                },
                {
                  text: "mt-slider",
                  link: "/meteor-components/form/mt-slider",
                },
                {
                  text: "mt-switch",
                  link: "/meteor-components/form/mt-switch",
                },
                {
                  text: "mt-text-field",
                  link: "/meteor-components/form/mt-text-field",
                },
                {
                  text: "mt-textarea",
                  link: "/meteor-components/form/mt-textarea",
                },
              ],
            },
            {
              text: "Feedback indicator",
              collapsed: true,
              items: [
                {
                  text: "mt-banner",
                  link: "/meteor-components/feedbackindicator/mt-banner",
                },
                {
                  text: "mt-loader",
                  link: "/meteor-components/feedbackindicator/mt-loader",
                },
                {
                  text: "mt-progress-bar",
                  link: "/meteor-components/feedbackindicator/mt-progress-bar",
                },
                {
                  text: "mt-skeleton-bar",
                  link: "/meteor-components/feedbackindicator/mt-skeleton-bar",
                },
              ],
            },
            {
              text: "Content",
              collapsed: true,
              items: [
                {
                  text: "mt-text",
                  link: "/meteor-components/content/mt-text",
                },
              ],
            },
            {
              text: "Icons & Media",
              collapsed: true,
              items: [
                {
                  text: "mt-icon",
                  link: "/meteor-components/iconsmedia/mt-icon",
                },
              ],
            },
            {
              text: "Layout",
              collapsed: true,
              items: [
                {
                  text: "mt-card",
                  link: "/meteor-components/layout/mt-card",
                },
                {
                  text: "mt-empty-state",
                  link: "/meteor-components/layout/mt-empty-state",
                },
              ],
            },
            {
              text: "Navigation",
              collapsed: true,
              items: [
                {
                  text: "mt-link",
                  link: "/meteor-components/navigation/mt-link",
                },
                {
                  text: "mt-search",
                  link: "/meteor-components/navigation/mt-search",
                },
                {
                  text: "mt-segmented-control",
                  link: "/meteor-components/navigation/mt-segmented-control",
                },
                {
                  text: "mt-tabs",
                  link: "/meteor-components/navigation/mt-tabs",
                },
              ],
            },
            {
              text: "Overlay",
              collapsed: true,
              items: [
                {
                  text: "mt-modal",
                  link: "/meteor-components/overlay/mt-modal",
                },
                {
                  text: "mt-popover",
                  link: "/meteor-components/overlay/mt-popover",
                },
                {
                  text: "mt-tooltip",
                  link: "/meteor-components/overlay/mt-tooltip",
                },
              ],
            },
            {
              text: "Table & list",
              collapsed: true,
              items: [
                {
                  text: "mt-pagination",
                  link: "/meteor-components/tablelist/mt-pagination",
                },
              ],
            },
          ],
        },
      ],
    },

    algolia: {
      indexName: "beta-developer-shopware",
      appId: "J1Y01X9HGM",
      apiKey: "711e1cadf66a3957aaf183a58aad12a7",
    },

    swag: {
      // config for the "Edit on GitHub" link and Algolia Search facets (area, version)
      embeds,

      // config for the Algolia Search Modal lvl1
      sections,

      // knowledge index
      similarArticles,

      // version switcher definition for docs
      versionSwitcher,

      // color coding for breadcrumbs
      colorCoding,
    },
  },

  vite: {
    plugins: [
      Inspect(),
      ViteRequireContext.default({
        projectBasePath: `${process.cwd()}/src`,
      }),
      CssCleanup({
        cleanup: [...baseCleanup],
      }),
      //liveReload([
      //    '../node_modules/@shopware-docs/**/*.*',
      //  '../node_modules/vitepress-shopware-docs/**/*.*',
      //]),
    ],
    build: {
      rollupOptions: {
        external: [
          "vue-instantsearch/vue3/es",
          "instantsearch.css/themes/algolia-min.css",
        ],
      },
    },
    resolve: {
      alias: {
        "@node_modules": resolve(process.cwd(), "node_modules"),
        "../composables/edit-link": resolve(
          __dirname,
          "../node_modules/vitepress-shopware-docs/src/shopware/composables/edit-link.ts"
        ),
        "./VPNavBarTitle.vue": resolve(
          __dirname,
          "../node_modules/vitepress-shopware-docs/src/shopware/components/override/VPNavBarTitle.vue"
        ),
        "./VPAlgoliaSearchBox.vue": resolve(
          __dirname,
          "../node_modules/vitepress-shopware-docs/src/shopware/components/override/VPAlgoliaSearchBox.vue"
        ),
        "../NotFound.vue": resolve(
          __dirname,
          "../node_modules/vitepress-shopware-docs/src/shopware/components/override/NotFound.vue"
        ),
        "../SwagRelatedArticles.vue": resolve(
          __dirname,
          "../node_modules/vitepress-shopware-docs/src/shopware/components/SwagRelatedArticles.vue"
        ),
      },
    },
  },

  vue: {
    // https://github.com/vitejs/vite/issues/7854
    reactivityTransform: resolve(__dirname, "src"), // true
  },

  async transformHead(context: TransformContext): Promise<HeadConfig[]> {
    return addOGImage([], context);
  },

  async buildEnd() {
    /**
     * Copy additional assets not present in the assets or public dir.
     */
    await copyAdditionalAssets([
      // shiki
      {
        src: "../node_modules/shiki/dist/langs",
        dst: "shiki/langs",
      },
      {
        src: "../node_modules/shiki/dist/themes",
        dst: "shiki/themes",
      },
      {
        src: "../node_modules/shiki/dist",
        dst: "shiki/dist",
        ext: [".wasm"],
      },
      // meteor-icon-kit
      {
        src: "../node_modules/@shopware-ag/meteor-icon-kit/icons/regular",
        dst: "icons/regular",
      },
      {
        src: "../node_modules/@shopware-ag/meteor-icon-kit/icons/solid",
        dst: "icons/solid",
      },
    ]);

    /**
     * Copy redirects.
     */
    await storeRedirects();

    /**
     * Create public sitemap.xml.
     */
    await createSitemap([], "shopware.design");
  },
});
