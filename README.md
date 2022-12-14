```
npx create-next-app next-intro
```
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
- Next에서는 APP.js 이외에선 global css 임포트가 되지않기 때문에 위와같은 방법을 사용한다.
```
<nav className={styles.nav}>
```
#### style jsx
 - 각 컴포넌트에서 독립적으로 동작한다.

### \_app.js

- 페이지가 랜더링되기 전에 먼저 바라보는 파일이라고 보면된다.
- 글로벌로 적용할 상태나 HTML 을 적용할때 쓰면 된다.


### public
 - public 폴더에 들어가있는 파일을 리소스로 가져올려고 하는 경우 경로를 전부 적을 필요없다.
 - 해당 파일명만 가지고 불러오면 된다.


 ### next.config   
   - redirect : 특정 주소가 들어왔을때 다른 주소로 리다이렉트 시키고, 영구지속시킬지 여부를 정한다.
   - rewrites : 특정 주소를 받으면 사용자가 URL이 바뀌는 것을 확인할 수 있는 것이 아닌, 지정된 dest의 URL를 실행한다. URL을 마스킹 한다고 보면 된당

### prerender set
 - getServerSideProps();
 - 백엔드에서 미리 실행하여 해당 컴포넌트에 정보를 보내준다.
 - useEffect처럼 렌더링 후 실행하는 것이 아니기 때문에 HTML을 먼저 보여주기 때문에 SEO 검색엔진에서 유효한 영향을 가진다.
 - 단점으로는 API가 실행되기 전까지 유저가 보는 것은 흰색화면이다.

### routing
 - 원하는 위치의 폴더에 [] 대괄호를 사용하고 그 안에 파일명을 입력후 컴포넌트를 생성한다.
 - 그럼 해당 URL을 타겟으로 할때 movie/:id 로 하는것 처럼 데이터가 넘어가는 것을 확인할 수 있다.
 - 많은 데이터가 쿼리에 담겨져서 URL에 노출되는 것이 안되는 경우에는 as 기능을 사용하여 URL를 마스킹 할 수 있다.

### catch all
 - routing 하고자하는 파일(URL 타겟) 명앞에 ... 을 써주게 되면 URL사이사이에 /항목/:id 형태의 URL을 사용할 수 있다.

### 404 page
 - pages 폴더 하위항목으로 404.js를 만들어서 커스텀 한다.