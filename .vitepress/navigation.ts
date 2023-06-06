import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import {resourcesMenu} from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";

const navigation = buildSidebarNav('./src/', [
    {
        link: 'https://shopware.design/',
        text: 'shopware.design',
    },
    {
        link: 'https://brand.shopware.com/',
        text: 'Brand',
    },
    resourcesMenu,
], [
    '/', // always have root sidebar
]);

export default navigation;