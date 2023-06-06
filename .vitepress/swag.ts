import {
    SwagColorCodingConfig,
    SwagEmbedsConfig,
    SwagSectionsConfig,
    SwagSimilarArticlesConfig,
    SwagVersionSwitcherConfig,
} from "../../developer-documentation-vitepress/src/shopware/config";

export const sections: SwagSectionsConfig[] = [
    {
        title: 'Frontends',
        matches: [
            '/frontends/',
        ],
    },
    {
        title: 'Apps',
        matches: [
            '/apps/',
            '/docs/guides/apps/',
            '/docs/v6.4/guides/apps/',
            '/docs/v6.3/guides/apps/',
        ],
    },
    {
        title: 'Themes',
        matches: [
            '/themes/',
            '/docs/guides/themes/',
            '/docs/v6.4/guides/themes/',
            '/docs/v6.3/guides/themes/',
        ],
    },
    {
        title: 'Plugins',
        matches: [
            '/plugins/',
            '/docs/guides/plugins/',
            '/docs/v6.4/guides/plugins/',
            '/docs/v6.3/guides/plugins/',
        ],
    },
    {
        title: 'Integrations',
        matches: [
            '/integrations/',
        ],
    },
    {
        title: 'Concepts',
        matches: [
            '/docs/concepts/',
            '/docs/v6.4/concepts/',
            '/docs/v6.3/concepts/',
        ],
    },
    {
        title: 'Guides',
        matches: [
            '/docs/guides/',
            '/docs/v6.4/guides/',
            '/docs/v6.3/guides/',
        ],
    },
    {
        title: 'Products',
        matches: [
            '/docs/products/',
            '/docs/v6.4/products/',
            '/docs/v6.3/products/',
        ],
    },
    {
        title: 'Resources',
        matches: [
            '/docs/resources/',
            '/docs/v6.4/resources/',
            '/docs/v6.3/resources/',
        ],
    },
    {
        title: 'General',
        matches: [
            '/',
        ],
    },
];

export const embeds: SwagEmbedsConfig[] = [
    {
        repository: 'docs',
        points: {
            '/docs/v6.4/': 'next-6.4',
            '/docs/v6.3/': 'next-6.3',
            '/docs/': 'main', // next
        },
        folder: '.',
    },
    {
        repository: 'frontends',
        points: {
            '/frontends/': 'main',
        },
        folder: 'app/docs/docs'
    },
    {
        repository: 'admin-extension-sdk',
        points: {
            '/resources/admin-extension-sdk/': 'main',
        },
        folder: 'docs',
    },
    {
        repository: 'meteor-component-library',
        points: {
            '/resources/meteor-component-library/': 'main',
        },
        folder: 'docs',
    },
    {
        repository: 'meteor-icon-kit',
        points: {
            '/resources/meteor-icon-kit/': 'main',
        },
        folder: 'docs',
    },
    {
        repository: 'admin-api-reference',
        points: {
            '/resources/api/admin-api-reference/': 'main',
        },
        folder: 'docs',
    },
    {
        repository: 'store-api-reference',
        points: {
            '/resources/api/store-api-reference/': 'main',
        },
        folder: 'docs',
    },
    {
        repository: 'developer-portal',
        points: {
            '/': 'main',
        },
        folder: 'src',
    }
];

export const similarArticles: SwagSimilarArticlesConfig = {
    host: 'https://ai-ml.fly.dev',
    filter: {
        'default': {
            exclude: [
                'docs/v6.4/',
                'docs/v6.3/',
            ],
        },
        '/docs/': {
            exclude: [
                'docs/v6.4/',
                'docs/v6.3/',
            ],
        },
        '/docs/v6.4/': {
            exclude: [
                'docs/',
                'docs/v6.3/',
            ],
            include: [
                'docs/v6.4/',
            ]
        },
        '/docs/v6.3/': {
            exclude: [
                'docs/',
                'docs/v6.4/',
            ],
            include: [
                'docs/v6.3/',
            ]
        }
    },
};

export const versionSwitcher: SwagVersionSwitcherConfig = {
    paths: [
        {
            'docs': 'v6.5 (latest)',
            'docs/v6.4': 'v6.4',
            'docs/v6.3': 'v6.3',
        }
    ]
};

export const colorCoding: SwagColorCodingConfig[] = [
    {
        link: '/docs/guides/plugins/apps/',
        color: 'from-blue-500 to-blue-700',
    },
    {
        link: '/docs/concepts/extensions/apps-concept.html',
        color: 'from-blue-500 to-blue-700',
    },
    {
        link: '/docs/guides/plugins/plugins/',
        color: 'from-purple-500 to-purple-700',
    },
    {
        link: '/docs/concepts/extensions/plugins-concept.html',
        color: 'from-purple-500 to-purple-700',
    },
    {
        link: '/docs/guides/plugins/themes/',
        color: 'from-orange-500 to-orange-700',
    },
];