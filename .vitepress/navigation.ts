import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import {resourcesMenu} from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";

const navigation = buildSidebarNav('./src/', [
    {
        link: '/foundations.html',
        text: 'Foundations',
    },
    {
        link: '/product-experience.html',
        text: 'Product Experience',
    },
    {
        link: '/content-experience.html',
        text: 'Content Experience',
    },
    {
        link: '/components.html',
        text: 'Components',
    },
    resourcesMenu,
    {
        link: '/what-is-new.html',
        text: 'What\' New',
    },
], [
    '/', // always have root sidebar
]);

export default navigation;