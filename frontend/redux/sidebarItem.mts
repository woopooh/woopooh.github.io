import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "Redux",
    collapsed: true,
    items: [
      {
        text: "Flux 아키텍처 알아보기",
        link: "redux/flux-아키텍처-알아보기",
      },
    ],
  };
}
