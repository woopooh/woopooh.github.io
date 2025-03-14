import { DefaultTheme } from "vitepress";

export function sidebarItem(): DefaultTheme.SidebarItem {
  return {
    text: "좋은 코드의 기준",
    collapsed: true,
    items: [
      {
        text: "변경하기 쉬운 코드",
        link: "criteria-for-good-code/변경하기-쉬운-코드",
      },
      {
        text: "1. 가독성",
        collapsed: true,
        items: [
          {
            text: "맥락 줄이기",
            collapsed: true,
            items: [
              {
                text: "A. 같이 실행되지 않는 코드 분리하기",
                link: "criteria-for-good-code/같이-실행되지-않는-코드-분리하기",
              },
              {
                text: "B. 구현 상세 추상화하기",
                link: "criteria-for-good-code/구현-상세-추상화하기",
              },
              {
                text: "C. 로직 종류에 따라 합쳐진 함수 쪼개기",
                link: "criteria-for-good-code/로직-종류에-따라-합쳐진-함수-쪼개기",
              },
            ],
          },
          {
            text: "이름 붙이기",
            collapsed: true,
            items: [
              {
                text: "A. 복잡한 조건에 이름 붙이기",
                link: "criteria-for-good-code/복잡한-조건에-이름-붙이기",
              },
              {
                text: "B. 매직 넘버에 이름 붙이기",
                link: "criteria-for-good-code/매직-넘버에-이름-붙이기",
              },
            ],
          },
          {
            text: "위에서 아래로 읽히게 하기",
            collapsed: true,
            items: [
              {
                text: "A. 시점 이동 줄이기",
                link: "criteria-for-good-code/시점-이동-줄이기",
              },
              {
                text: "B. 삼항 연산자 단순하게 하기",
                link: "criteria-for-good-code/삼항-연산자-단순하게-하기",
              },
            ],
          },
        ],
      },
      {
        text: "2. 예측 가능성",
        collapsed: true,
        items: [
          {
            text: "A. 이름 겹치지 않게 관리하기",
            link: "criteria-for-good-code/이름-겹치지-않게-관리하기",
          },
          {
            text: "B. 같은 종류의 함수는 반환 타입 통일하기",
            link: "criteria-for-good-code/같은-종류의-함수는-반환-타입-통일하기",
          },
          {
            text: "C. 숨은 로직 드러내기",
            link: "criteria-for-good-code/숨은-로직-드러내기",
          },
        ],
      },
      {
        text: "3. 응집도",
        collapsed: true,
        items: [
          {
            text: "A. 함께 수정되는 파일을 같은 디렉토리에 두기",
            link: "criteria-for-good-code/함께-수정되는-파일을-같은-디렉토리에-두기",
          },
          {
            text: "B. 매직 넘버 없애기",
            link: "criteria-for-good-code/매직-넘버-없애기",
          },
          {
            text: "C. 폼의 응집도 생각하기",
            link: "criteria-for-good-code/폼의-응집도-생각하기",
          },
        ],
      },
      {
        text: "4. 결합도",
        collapsed: true,
        items: [
          {
            text: "A. 책임을 하나씩 관리하기",
            link: "criteria-for-good-code/책임을-하나씩-관리하기",
          },
          {
            text: "B. 중복 코드 허용하기",
            link: "criteria-for-good-code/중복-코드-허용하기",
          },
        ],
      },
    ],
  };
}
