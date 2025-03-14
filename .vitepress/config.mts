import { DefaultTheme, defineConfig } from "vitepress";
import { sidebar as sidebarFrontend } from "../frontend/sidebar.mjs";

export default defineConfig({
  lang: "ko",
  title: "Woopooh Tech Blog",
  description: "개발 과정에서 배운 것들을 기록하고 공유하는 공간",
  head: [
    ["link", { rel: "icon", type: "image/jpeg", href: "/images/profile.jpeg" }],
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{ icon: "github", link: "https://github.com/woopooh" }],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "검색",
                buttonAriaLabel: "검색",
              },
              modal: {
                displayDetails: "더보기",
                resetButtonTitle: "검색 지우기",
                backButtonTitle: "검색 닫기",
                noResultsText: "검색 결과를 찾지 못했어요.",
                footer: {
                  selectText: "선택",
                  selectKeyAriaLabel: "선택",
                  navigateText: "이동",
                  navigateUpKeyAriaLabel: "위로",
                  navigateDownKeyAriaLabel: "아래로",
                  closeText: "닫기",
                  closeKeyAriaLabel: "닫기",
                },
              },
            },
          },
        },
      },
    },
    outline: {
      label: "페이지 내용",
    },
    docFooter: {
      prev: "이전 페이지",
      next: "다음 페이지",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "홈", link: "/" },
    { text: "프론트엔드", link: "/frontend/", activeMatch: "/frontend/" },
  ];
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    ...sidebarFrontend(),
  };
}
