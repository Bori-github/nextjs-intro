# NextJS Introduction

## Library(라이브러리) vs Framework(프레임워크)

### Library

- 사용자가 폴더 구조나 파일명 등 모든 것을 정할 수 있고, 사용자가 원하는대로 라이브러리를 가져다 사용하는 것
  ⇒ 사용자의 자유도가 높다

### Framework

- 프레임워크가 정한 특정 규칙에 따라 코드를 작성하면 프레임워크가 사용자가 작성한 코드를 불러와서 동작하는 형태
  ⇒ 사용자의 자유도가 정해진 규칙 내에 한정되어 있다

### 주요 차이점 = "Inversion of Control"(통제의 역전)

- 라이브러리에서 메서드를 호출하면 사용자가 제어 가능
- 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출

> 예시) React
> 비어있는 App component로 시작
> 내가 언제 react를 import 할 지, 어떤 폴더 구조로 만들지 정할 수 있고 폴더명도 내가 원하는대로 지정할 수 있다.
> routing을 다루는 방법은 나에게 달려있다.
> => React 앱을 만드는데에는 자유도가 있다
> React 앱이 만들어졌을 때 모든 것을 볼 수 있다
>
> Next.js에는 ReactDOM.render가 없다.
> 따라서 ReactDOM.render를 커스텀할 수 있는 곳이 없다.
> 유일하게 할 수 있는 것은 pages 안에서 무언가를 만드는 것
> Next.js 내의 어딘가에서 ReactDOM.render 과정을 하고 있는 것. 그리고 우리가 거기로 직접 접근할 수 없다.

## pages

- pages 디렉토리 내의 파일명은 URL이 된다(component의 이름은 중요하지 않다)
- 단, defualt로 export 해야한다

```
export default function PageName () {}

// 또는

const PageName = () => {}
export default PageName;
```

- `export detault`를 적용하지 않은 경우 에러 발생
  ![](https://i.imgur.com/dAd4iKg.png)
- 예외사항
  - index.tsx : URL에 `/`로 표시 된다
    ⇒ `/index` 로 표시되지 않음
  - react를 import할 필요가 없다
    - react 메서드를 사용할 때에는 import가 필요

## Client Side Rendering(CRA)

- 브라우저가 유저가 보는 UI를 만든다는 것을 의미
- CSR이 소스코드를 보면 비어있는 하나의 div만 존재 ⇒ 유저가 보게 될 비어있는 HTML
- 나머지는 모두 JavaScript로 이루어져 있다
- 브라우저가 JavaScript(React.js)를 다운받고 난 후 JavaScript가 모든 UI를 만드는 것
- 단점
  - 브라우저가 JavaScript, React 등 모든 것을 fetch한 후 UI가 보인다
  - 초기 렌더링 시 비어있는 흰 화면이 먼저 나타나고, 로딩 후 데이터들이 보이기 시작

## Pre Rendering(Next.js)

### Initial Load

- Next.js는 React를 백엔드에서 동작 시켜 페이지를 미리 생성하여 페이지의 소스코드에 HTML 코드를 넣는다
- 유저는 JavaScript와 React가 로딩되지 않았더라도 컨텐츠를 볼 수 있다
  - JavaScript가 비활성화 되어 있어도 소스코드에 HTML 코드가 존재한다
  - 데이터가 로딩되는 데 시간이 오래 걸린다고 하더라도 유저는 적어도 어떠한 HTML 코드를 볼 수 있다

### Hydration

- React가 로딩되었을 때, 미리 생성된 HTML과 연결
  ⇒ 상호작용이 일어난다

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fctjh7i%2Fbtq805Fhpk0%2Fs2Tn9LP37uB8ZkwsBryWeK%2Fimg.png)

## Routing

- Next.js 앱 내에서 페이지를 네비게이트 할 때 사용해야하는 특정 컴포넌트가 존재
- 아래의 예시와 같이 `a`태그만 사용했을 경우, 해당 링크를 클릭하면 브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침하게 된다
  ⇒ 클라이언트 사이드 네비게이션이 없다는 것을 의미
  ⇒ 또한, 속도도 느리다.

> #### [Clinet-Side Navigation(클라이언트 사이드 네비게이션)](https://nextjs.org/learn/basics/navigate-between-pages/client-side)
>
> Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.<br/>
> ⇒ 페이지 전환 시 자바스크립트를 사용하여 브라우저에 의한 동작보다 속도가 더 빠르다<br/>
> ⇒ 링크 클릭 시 전페 페이지가 새로고침 되지 않는다.

```javascript
// a태그로만 이루어진 네비게이션
export const NavigationBar = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
};

// Link를 사용한 네비게이션
import Link from 'next/link';

export const NavigationBar = () => {
  return (
    <nav>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
    </nav>
  );
};
```

### `useRouter`

- `useRouter` hook을 사용하여 router 객체에 접근할 수 있다.

```javascript
import { useRouter } from 'next/router';

export const NavigationBar = () => {
  const router = useRouter();
  console.log(router);
  // 코드 생략
};
```

![](https://i.imgur.com/CoZriNQ.png)

## Style

### CSS Module

- CSS 파일의 확장자 명 : `.module.css`
- 컴포넌트 파일에서 해당 CSS 파일을 import 하여 사용
  - 해당 컴포넌트 내에서 CSS 파일에서 선언한 클래스 이름이 고유해진다
  - `className` 설정 시 `import`로 불러온 `styles` 객체 안의 값을 참조
  - 여러 개의 클래스를 적용할 경우
  ```
  className={`${styles.one} ${styles.two}`}`
  ```
  - 조건부 스타일링을 적용할 경우
  ```
  className={`${styles.one} ${condition ? styles.two : ""}`}`
  ```

```css
/* `NavigationBar.module.css` */
.nav {
  background-color: aquamarine;
  color: white;
}
```

```jsx
// NavigationBar.tsx
import styles from './NavigationBar.module.css';

export const NavigationBar = () => {
  return <nav className={styles.nav}>// 코드 생략</nav>;
};
```

![](https://i.imgur.com/MRWoYu6.png)

### Styled JSX

- Next.js가 기본으로 제공하는 기능
- `<style jsx>` 태그를 사용
  - `global` 속성을 추가하면 global styles를 적용할 수 있다
  - 단, 페이지 별로 적용되는 Next.js의 특성을 고려해야한다

```jsx
<style jsx>{`
  /* 스타일 넣기 */
`}</style>

/* global styles 적용 */
<style jsx global>{`
  /* 스타일 넣기 */
`}</style>
```

```jsx
// NavigationBar.tsx
export const NavigationBar = () => {
  return;
  <nav className="nav">
    // 코드 생략
    <style jsx>{`
      .nav {
        background-color: red;
      }
    `}</style>
  </nav>;
};
```
