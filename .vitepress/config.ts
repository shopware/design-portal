import { defineConfigWithTheme } from "vitepress";
import type { HeadConfig, TransformContext } from 'vitepress'
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
const {resolve} = require('path');
//import { MarkdownTransform } from "../plugins/markdownTransform";
import Inspect from "vite-plugin-inspect";

import {addOGImage, copyAdditionalAssets, createSitemap, storeRedirects} from "../node_modules/@shopware-docs/vitepress/src/helpers";
//import {generateMarkdownFromStoplight, getStoplightUrls} from "../node_modules/@shopware-docs/vitepress/src/helpers/stoplight";
import {generateMarkdownFromStoplight, getStoplightUrls} from "@shopware-docs/vitepress/helpers/stoplight";
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

  title: "Shopware Design",
  description: "Documentation for Shopware designers",
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
    mode: 'development',
    plugins: [
      Inspect(),
      ViteRequireContext({
        projectBasePath: `${process.cwd()}/src`
      }),
      //MarkdownTransform(),
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
    const head: HeadConfig[] = [];

    addOGImage(head, context);

    return head;
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
      }
    ]);

    /**
     * Copy redirects.
     */
    await storeRedirects();

    /**
     * Fetch Stoplight URLs.
     */
    /*const stoplightUrls = [
      ...await getStoplightUrls({
        source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0NQ/table-of-contents',
        prefix: '/resources/api/store-api-reference.html#/',
      }),
      ...await getStoplightUrls({
        source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0Mw/table-of-contents',
        prefix: '/resources/api/admin-api-reference.html#/',
      }),
    ];*/

    /**
     * Create public sitemap.xml.
     */
    await createSitemap(/*stoplightUrls*/);

    /**
     * Transform Store API JSON reference to Markdown for Knowledge base.
     */
    /*await generateMarkdownFromStoplight({
      source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0NQ/table-of-contents',
      nodes: 'https://shopware.stoplight.io/api/v1/workspaces/d2s6MzM5MTQ/nodes?project_ids[0]=cHJqOjEwNjA0NQ',
      reference: 'https://raw.githubusercontent.com/shopware/store-api-reference/main/storeapi.json',
      as: 'resources/api/admin-api-reference.html',
    });*/

    /**
     * Transform Admin API JSON reference to Markdown for Knowledge base.
     */
    /*await generateMarkdownFromStoplight({
      source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0Mw/table-of-contents',
      nodes: 'https://shopware.stoplight.io/api/v1/workspaces/d2s6MzM5MTQ/nodes?project_ids[0]=cHJqOjEwNjA0Mw',
      reference: 'https://raw.githubusercontent.com/shopware/admin-api-reference/main/storeapi.json',
      as: 'resources/api/store-api-reference.html',
    }, false);*/
  }
});
