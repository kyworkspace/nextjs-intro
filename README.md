# Next JS Introduction

1. 이건 프레임워크 이다!!!!
2. page 폴더안에서 자동으로 라우팅 된다!!!!
3. 기본 루트파일은 page 폴더내에 index 파일을 바라본다!!!
4. 파일명은 라우팅 명이다!!!!
5. 각 파일은 export default를 반드시 작성해줘야 한다.!!!

## 장점

- prerender : 정적으로 생성된다. CSR과는 다르게 미리 그려지는 것이 특징이라 볼 수 있다.
- 상태를 가질 경우 초기 상태를 가지고 렌더링 된다.
- 백엔드에서 리액트를 동작시켜서 페이지를 미리 만든다. 백 렌더링 -> HTML 호출 -> 보여줌

### module pattern

```
import styles from "./NavBar.module.css"
```

- 위와같이 특정 파일에 대하여 모듈 패턴으로 파일을 만든 뒤
- js 처럼 임포트 한다.
- 그리고 원하는 엘리먼트에 해당 클래스를 호출하여 사용한다.

```
<nav className={styles.nav}>
```
