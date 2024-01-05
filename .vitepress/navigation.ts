import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import {resourcesMenu} from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";

const navigation = buildSidebarNav('./src/', [
    {
        link: '/get-started/',
        text: 'Get started',
    },
    {
        link: '/foundations/',
        text: 'Foundations',
    },
    {
        link: '/product-experience/',
        text: 'Product Experience',
    },
    {
        link: '/components.html',
        text: 'Components',
    },
    {
        link: 'https://brand.shopware.com',
        text: 'Brand',
    },
    {
        link: '/team/',
        text: 'Careers',
    },
    resourcesMenu,
], [
    '/', // always have root sidebar
]);

export default navigation;