import { defineConfigWithTheme } from "vitepress";
import type { HeadConfig, TransformContext } from 'vitepress'
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import { baseConfig } from "@shopware-docs/vitepress";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import {resolve} from "path";

import Inspect from "vite-plugin-inspect";
import liveReload from 'vite-plugin-live-reload'

import {CssCleanup, baseCleanup, copyAdditionalAssets, createSitemap, storeRedirects, addOGImage, userCentricsHead} from "@shopware-docs/vitepress";
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

    ...userCentricsHead({
      usercentrics: process.env.USERCENTRICS,
      gtm: 'WJKMNPS',
    }),
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
    },
    resolve: {
      alias: {
        '@node_modules': resolve(process.cwd(), 'node_modules'),
        '../composables/edit-link': resolve(__dirname, '../node_modules/vitepress-shopware-docs/src/shopware/composables/edit-link.ts'),
        './VPNavBarTitle.vue': resolve(__dirname, '../node_modules/vitepress-shopware-docs/src/shopware/components/override/VPNavBarTitle.vue'),
        './VPAlgoliaSearchBox.vue': resolve(__dirname, '../node_modules/vitepress-shopware-docs/src/shopware/components/override/VPAlgoliaSearchBox.vue'),
        '../NotFound.vue': resolve(__dirname, '../node_modules/vitepress-shopware-docs/src/shopware/components/override/NotFound.vue'),
        '../SwagRelatedArticles.vue': resolve(__dirname, '../node_modules/vitepress-shopware-docs/src/shopware/components/SwagRelatedArticles.vue'),
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
