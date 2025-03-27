import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "Next.js",
    collapsed: true,
    items: [
      {
        text: "CSR, SSR, SSG, ISR 알아보기",
        link: "next-js/csr-ssr-ssg-isr-알아보기",
      },
    ],
  };
}
