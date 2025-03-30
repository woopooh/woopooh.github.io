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
      {
        text: "변형(mutation) 알아보기",
        link: "tanstack-query/변형-알아보기",
      },
      {
        text: "변형(mutation) 후에 자동으로 쿼리(Query)를 무효화하기",
        link: "tanstack-query/변형-후에-자동으로-쿼리를-무효화하기",
      },
    ],
  };
}
