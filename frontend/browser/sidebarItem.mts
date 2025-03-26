import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "Browser",
    collapsed: true,
    items: [
      {
        text: "중요 렌더링 경로 알아보기",
        link: "browser/중요-렌더링-경로-알아보기",
      },
    ],
  };
}
