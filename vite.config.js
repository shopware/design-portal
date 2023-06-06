import path from 'path';

export default {
    resolve: {
        alias: {
            '@shopware-docs/vitest': path.resolve(__dirname, 'node_modules/@shopware-docs/vitest/src'),
            '@shopware-docs/vitepress': path.resolve(__dirname, 'node_modules/@shopware-docs/vitepress/src'),
        },
    },
}