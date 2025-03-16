import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "React",
    collapsed: true,
    items: [
      {
        text: "에러 경계 세분화하기",
        link: "react/에러-경계-세분화하기",
      },
      {
        text: "선억적으로 비동기 처리하기",
        link: "react/선언적으로-비동기-처리하기",
      },
    ],
  };
}
