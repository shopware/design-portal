import { buildSidebarNav } from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import { resourcesMenu } from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";

const navigation = buildSidebarNav(
  "./src/",
  [
    {
      link: "/get-started/",
      text: "Get started",
    },
    {
      link: "/foundations/",
      text: "Foundations",
    },
    {
      link: "/product-experience/",
      text: "Product Experience",
    },
    {
      link: "/tokens/color",
      text: "Tokens",
    },
    {
      link: "/icons/",
      text: "Icons",
    },
    {
      link: "/meteor-components/form/mt-field-label.md",
      text: "Components",
    },
    {
      link: "/team/",
      text: "Design at Shopware",
    },
    {
      link: "https://brand.shopware.com",
      text: "Brand",
    },
    resourcesMenu({
      design: "/",
      developer: "https://developer.shopware.com/",
    }),
  ],
  [
    "/", // always have root sidebar
  ]
);

export default navigation;
