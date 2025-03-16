import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "zustand",
    collapsed: true,
    items: [
      {
        text: "useState + context 성능 문제 해결하기",
        link: "zustand/useState-context-성능-문제-해결하기",
      },
    ],
  };
}
