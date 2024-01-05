import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import {resolve} from "path";

import { CssCleanup, baseCleanup } from "../node_modules/@shopware-docs/vitepress/src/plugins/cssCleanup";
import Inspect from "vite-plugin-inspect";
import liveReload from 'vite-plugin-live-reload'

import {copyAdditionalAssets, createSitemap, storeRedirects} from "../node_modules/@shopware-docs/vitepress/src/helpers";
import navigation from "./navigation";

import {
  sections,
  embeds,
  similarArticles,
  versionSwitcher,
  colorCoding,
} from "./swag";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  title: "Shopware – Meteor Design System",
  description: "Dive into the heart of Shopware's Design System – a comprehensive guide to our unified approach in crafting seamless commerce experiences.",
  srcDir: "src",
  srcExclude: [],

  rewrites: {},

  head: [
    // favicon
    ['link', {rel: "icon", type: "image/png", href: "/favicon.webp"}],
    ['link', {rel: "shortcut icon", href: "/favicon.webp"}],

    // disallow indexing
    ['meta', {name: 'robots', content: 'noindex'}],

    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-64631238-1' }
    ],

    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-64631238-1');"
    ]
  ],

  themeConfig: {
    ...navigation, // add sidebar and nav config
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `foundations` directory.
      '/foundations/': [
        {
          text: 'Foundations',
          items: [
            { 
              text: 'Design Principles', 
              link: '/foundations/' 
            },
            {
              text: 'Accessibility',
              link: '/foundations/accessibility'
            },
            {
              text: 'Human-AI-Interaction',
              link: '/foundations/human-ai-interation'
            },
            {
              text: 'Design',
              items: [
                { text: 'Typography', link: '/foundations/design/typography' },
                { text: 'Colors', link: '/foundations/design/colors' },
                { text: 'Elevation', link: '/foundations/design/elevation' }
              ]
            }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `product-experience` directory.
      '/product-experience/': [
        {
          text: 'Product-experience',
          items: [
            { text: 'Index', link: '/product-experience/' },
            { text: 'Three', link: '/product-experience/three' },
            { text: 'Four', link: '/product-experience/four' }
          ]
        }
      ]
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
    }
  },

  vite: {
    plugins: [
      Inspect(),
      ViteRequireContext.default({
        projectBasePath: `${process.cwd()}/src`
      }),
      CssCleanup({
        cleanup: [
            ...baseCleanup,
        ]
      }),
      liveReload([
          '../node_modules/@shopware-docs/**/*.*',
        '../node_modules/vitepress-shopware-docs/**/*.*',
      ]),
    ],
    build: {
      rollupOptions: {
        external: [
            'vue-instantsearch/vue3/es',
            'instantsearch.css/themes/algolia-min.css',
        ]
      }
    }
  },

  vue: {
    // https://github.com/vitejs/vite/issues/7854
    reactivityTransform: resolve(__dirname, 'src'), // true
  },

  async buildEnd() {
    /**
     * Copy additional assets not present in the assets or public dir.
     */
    await copyAdditionalAssets([
      {
        src: '../node_modules/@shopware-ag/meteor-icon-kit/icons/regular',
        dst: 'icons/regular',
      },
      {
        src: '../node_modules/@shopware-ag/meteor-icon-kit/icons/solid',
        dst: 'icons/solid',
      },
    ]);

    /**
     * Copy redirects.
     */
    await storeRedirects();

    /**
     * Create public sitemap.xml.
     */
    await createSitemap();
  }
});
