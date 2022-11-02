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

- pages 디렉토리 내의 파일명은 URL이 된다
- 예외사항
  - index.tsx : URL에 `/`로 표시 된다.
    ⇒ `/index` 로 표시되지 않음
  - react를 import할 필요가 없다
    - react 메서드를 사용할 때에는 import가 필요
