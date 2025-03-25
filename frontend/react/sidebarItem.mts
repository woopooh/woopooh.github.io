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
      {
        text: "합성 컴포넌트 패턴 적용하기",
        link: "react/합성-컴포넌트-패턴-적용하기",
      },
      {
        text: "react-lazy 및 suspense를 사용한 코드 분할",
        link: "react/react-lazy-및-suspense를-사용한-코드-분할",
      },
      {
        text: "모던 CSS 알아보기",
        link: "react/모던-css-알아보기",
      },
    ],
  };
}
