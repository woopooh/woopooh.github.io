# useState + context 성능 문제 해결하기

<div style="margin-top: 16px">
  <Badge type="info" text="Zustand" />
  <Badge type="info" text="React Context" />
</div>

## 🔔 상황

React Context를 상태 관리 도구로 많이 사용합니다. 그러나 상태가 변경될 때마다 모든 하위 컴포넌트가 리렌더링되어 성능 문제가 발생할 수 있습니다.

## 🎳 해결법

React Context는 의존성 주입 도구로, Zustand는 상태 관리 도구로 사용합니다.

<div style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;">
  <iframe scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" title="X Post" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1495072479118864398&amp;lang=en&amp;origin=https%3A%2F%2Fvelog.io%2F%40ojj1123%2Fzustand-and-react-context&amp;sessionId=805236174e6e5498c1410f0d8597510864815702&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px" style="position: static; visibility: visible; width: 250px; height: 420px; display: block; flex-grow: 1;" data-tweet-id="1495072479118864398">
  </iframe>
</div>

## 상태 관리란

초기 상태 값을 설정하고, 현재 상태 값을 읽고, 상태 값을 수정할 수 있다면 상태 관리한다고 말할 수 있습니다.

::: code-group

```tsx [StateManagement.tsx]
function StateManagement() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

```tsx [NotStateManagement.tsx]
function NotStateManagement() {
  // 이 상태는 수정할 수 없습니다
  const [count] = useState(0);

  return <p>{count}</p>;
}
```

:::

## React Context를 의존성 주입 도구로 사용하기

Props을 컴포넌트에 전달하는 경우가 많습니다. 컴포넌트가 props를 받는 것은 해당 props가 필요하기 때문입니다. 즉, 컴포넌트는 props로 전달된 값에 의존하고 있다고 볼 수 있습니다.

React Context도 동일합니다. props drilling 문제를 해결하거나 여러 하위 컴포넌트에서 공통 값을 사용해야 할 때, 먼저 React Context를 떠올리는 것이 자연스러운 일이지만, 상태 관리 도구가 아닌 의존성 주입 용도로 사용하는 것이 중요합니다.

::: code-group

```tsx [CounterProvider.tsx]
import { createCounter } from "./createCounter";

const CounterContext = createContext<
  ReturnType<typeof createCounter> | undefined
>(undefined);

const CounterProvider = ({ children }) => {
  // count 값 자체를 수정할 수 없습니다
  const [counter] = useState(createCounter);

  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
};
```

```tsx [createCounter.tsx]
import { createStore } from "zustand";

type Counter = {
  count: number;
  decrementCount: () => void;
  incrementCount: () => void;
};

export const createCounter = () => {
  return createStore<Counter>()((set) => ({
    count: 0,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
```

:::

:::tip
`counter` 상태를 만들 때 `useState` 를 사용했습니다. `useRef` 를 사용해도 정상적으로 동작하지만, 더 많은 코드를 작성하여 복잡해 집니다.

```typescript
const counter = useRef<ReturnType<typeof createStore>>();
if (!counter.current) {
  counter.current = createCounter();
}
```

:::
