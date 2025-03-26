import { DefaultTheme } from "vitepress";
import { sidebarItem as criteriaForGoodCode } from "./criteria-for-good-code/sidebarItem.mjs";
import { sidebarItem as react } from "./react/sidebarItem.mjs";
import { sidebarItem as tanstackQuery } from "./tanstack-query/sidebarItem.mjs";
import { sidebarItem as zustand } from "./zustand/sidebarItem.mjs";
import { sidebarItem as browser } from "./browser/sidebarItem.mjs";
import { sidebarItem as webview } from "./webview/sidebarItem.mjs";

export function sidebar(): DefaultTheme.SidebarMulti {
  return {
    "/frontend/": {
      base: "/frontend/",
      items: [
        criteriaForGoodCode(),
        react(),
        tanstackQuery(),
        zustand(),
        browser(),
        webview(),
      ],
    },
  };
}
