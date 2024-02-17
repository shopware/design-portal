import { defineConfigWithTheme } from "vitepress";
import type { HeadConfig, TransformContext } from 'vitepress'
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import {resolve} from "path";

import { CssCleanup, baseCleanup } from "../node_modules/@shopware-docs/vitepress/src/plugins/cssCleanup";
import Inspect from "vite-plugin-inspect";
import liveReload from 'vite-plugin-live-reload'

import {copyAdditionalAssets, createSitemap, storeRedirects, addOGImage} from "../node_modules/@shopware-docs/vitepress/src/helpers";
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
    //  ['meta', {name: 'robots', content: 'noindex'}],

    // usercentrics
    [
      'link',
      {
        rel: 'preconnect',
        href: '//app.usercentrics.eu',
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: '//api.usercentrics.eu',
      }
    ],
    [
      'link',
      {
        rel: 'preload',
        href: '//app.usercentrics.eu/browser-ui/latest/loader.js',
        as: 'script',
      }
    ],
    [
      'script',
      {
        async: true,
        src: "https://app.usercentrics.eu/browser-ui/latest/loader.js",
        'data-settings-id': process.env.USERCENTRICS || '',
        id: 'usercentrics-cmp'
      }
    ],

    // GA4 - G-9JLJ6GGB76
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-9JLJ6GGB76' }
    ],

    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9JLJ6GGB76');"
    ],
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
              text: 'Artifical Intelligence',
              items: [
                { text: 'Human-AI-Interaction', link: '/foundations/human-ai-interation' },
                { text: 'UX-Writing', link: '/foundations/human-ai-ux-writing' }
              ]
            },
            {
              text: 'Design',
              items: [
                { text: 'Colors', link: '/foundations/design/colors' },
                { text: 'Images', link: '/foundations/design/images' }
              ]
            },
            {
              text: 'Get involved',
              items: [
                { text: 'Contributions', link: '/foundations/contributions' }
              ]
            },
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `product-experience` directory.
      '/product-experience/': [
        {
          text: 'Product Experience',
          link: '/product-experience/'
        },
        {
          text: 'Content',
          items: [
            { text: 'Content Experience', link: '/product-experience/content/' },
            { text: 'Basics', link: '/product-experience/content/basics' },
            { text: 'Inclusive Language', link: '/product-experience/content/inclusive-language' },
            { text: 'Abbreviations and acronyms', link: '/product-experience/content/abbreviations-and-acronyms' },
            { text: 'TL;DR', link: '/product-experience/content/tldr' }
          ]
        }
      ],
      // This sidebar gets displayed when a user
      // is on `get-started` directory.
      '/get-started/': [
        {
          text: 'Get Started',
          items: [
            { text: 'Get started', link: '/get-started/' },
            { text: 'Meteor 101', link: '/get-started/meteor-101' },
            { text: 'Contact us', link: '/get-started/contact-us' },
            { text: 'License', link: '/get-started/license' }
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
      //liveReload([
      //    '../node_modules/@shopware-docs/**/*.*',
      //  '../node_modules/vitepress-shopware-docs/**/*.*',
      //]),
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
        src: '../node_modules/shiki/dist/langs',
        dst: 'shiki/langs',
      },
      {
        src: '../node_modules/shiki/dist/themes',
        dst: 'shiki/themes',
      },
      {
        src: '../node_modules/shiki/dist',
        dst: 'shiki/dist',
        ext: [
          '.wasm'
        ],
      },
      // meteor-icon-kit
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
    await createSitemap([], 'shopware.design');
  }
});
