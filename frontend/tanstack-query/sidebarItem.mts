import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "TanStack Query",
    collapsed: true,
    items: [
      {
        text: "효율적으로 쿼리 키 관리하기",
        link: "tanstack-query/효율적으로-쿼리-키-관리하기",
      },
    ],
  };
}
