---
title: 페이지 작성하기
---

`src/pages` 디렉토리에 포함된 모든 React 컴포넌트 또는 Markdown 파일은 웹사이트 페이지로 변환됩니다.

파일(File) |  | 루트(Route)
--- | --- | ---
`src/pages/index.js` | → |  `localhost:3000/`
`src/pages/foo.md` | → |  `localhost:3000/foo`
`src/pages/foo/bar.js` | → |  `localhost:3000/foo/bar`

## React 페이지 컴포넌트 만들기

`src/pages/react-page.js` 파일을 만들고 다음과 같이 작성해보세요.

```jsx title="src/pages/ReactPage.js"
import React from 'react'
import Layout from '@theme/Layout'


function ReactPage() {
  return (
    <Layout title="React 페이지 컴포넌트 만들기">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          height: '95vh',
          fontSize: '20px',
        }}
      >
        <h1>React 페이지</h1>
        <p>이 페이지는 React를 사용해 만들어졌습니다. 👀</p>
      </div>
    </Layout>
  )
}

export default ReactPage
```

이제 React를 사용해 작성한 페이지는 [localhost:3000/react-page](http://localhost:3000/react-page) 주소로 접속할 수 있습니다.

:::tip 루트(Route) 경로 설정 방법은?
React 컴포넌트 파일 이름이 웹 사이트 루트(route) URL이 됩니다.
:::

## Markdown 페이지 만들기

`src/pages/markdown-page.md` 파일을 만들고 다음과 같이 작성해보세요.

```md title="src/pages/markdown-page.md"
---
title: Markdown 페이지
---

# Markdown 페이지

Markdown으로 작성된 페이지입니다. 👀
```

이제 Markdown을 사용해 작성한 페이지는 [localhost:3000/markdown-page](http://localhost:3000/markdown-page) 주소로 접속할 수 있습니다.
