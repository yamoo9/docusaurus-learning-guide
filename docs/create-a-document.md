---
title: 문서 작성하기
---

:::tip 문서란? 
**사이드바(sidebar)**, **이전(previous)/다음(next) 탐색(navigation)** 등 여러 기능이 제공되는 페이지를 말합니다.
:::

## 문서를 작성하는 방법

`docs` 디렉토리 안에 Markdown 파일을 생성하고 다음과 같이 작성합니다.

```md title="docs/my-first-doc.md"
---
title: 나의 첫번째 도큐사우르스!
---

## 나의 첫번째 문서!

React 또는 Markdown을 사용해 문서를 만들 수 있어 참 좋죠? 😄
```

## 사이드바에 문서 추가

`sidebars.js` 파일을 열어 새로 작성한 문서 이름을 추가해야 해당 문서를 볼 때 사이드바가 표시됩니다.

```diff title="sidebars.js"
module.exports = {
  docs: [
    {
      type: 'category',
      label: '도큐사우르스 튜토리얼',
      items: [
        'getting-started',
        'create-a-page',
        'create-a-document',
+        'my-first-doc',
        'create-a-blog-post',
        'markdown-features',
        'thank-you',
      ],
    },
  ],
}

```

작성한 문서는 [localhost:3000/docs/my-first-doc](http://localhost:3000/docs/my-first-doc) 루트(route)로 접속 가능합니다.