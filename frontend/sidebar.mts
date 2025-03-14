import { DefaultTheme } from "vitepress";
import { sidebarItem as criteriaForGoodCode } from "./criteria-for-good-code/sidebarItem.mjs";

export function sidebar(): DefaultTheme.SidebarMulti {
  return {
    "/frontend/": { base: "/frontend/", items: [criteriaForGoodCode()] },
  };
}
