import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "WebView",
    collapsed: true,
    items: [
      {
        text: "네이티브 앱과의 브릿지 통신용 유틸 함수 구현하기",
        link: "webview/네이티브-앱과의-브릿지-통신용-유틸-함수-구현하기",
      },
    ],
  };
}
